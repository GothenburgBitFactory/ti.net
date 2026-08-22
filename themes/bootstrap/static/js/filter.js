"use strict";

let excludeDormant = document.getElementById('exclude-dormant').checked
let includeArchived = document.getElementById('include-archived').checked;
let searchTerms = [];
const search = document.getElementById('search')
const excludeDormantCheckbox = document.getElementById('exclude-dormant');
const includeArchivedCheckbox = document.getElementById('include-archived');
const searchResultMessage = document.getElementById('search-result-message');
const SEARCH_WAIT_TIME = 400;
const CHECKB0X_WAIT_TIME = 200;
const LOADING_MESSAGE = "Loading...";
let sortedTools = [];
let owners = new Set();  // owners, languages, categories become arrays.
let languages = new Set();
const selectedLanguages = new Set();
const selectedOwners = new Set();


/** Load the tools that are not archived. */
fetch('https://raw.githubusercontent.com/GothenburgBitFactory/gbf-tools-listing/refs/heads/main/timew/tools-data.json')
  .then(response => response.json())
  .then(toolsData => {
    sortedTools = sortTools(toolsData);
    languages = populateLanguages(sortedTools);
    owners = populateOwners(sortedTools);

    populateToolsKeywords(sortedTools);
    fillToolsTable(sortedTools, selectedLanguages, selectedOwners);
    initFormProcessors();
  });


/** Given the tools data, return it sorted by rating and name. */
function sortTools(toolsData) {
    return toolsData.sort((a, b) => {
      if (b.rating === a.rating) {
          return a.name.localeCompare(b.name);
      }
      return b.rating - a.rating;
  });
}


/** Given the tools data, return a sorted array of the languages. */
function populateLanguages(sortedTools) {
  const languages = new Set();
  for (const tool of sortedTools) {
    for (const toolLanguage of tool.language) languages.add(toolLanguage);
  }
  return [...languages].sort((a, b) => a.localeCompare(b));
}


/** Given the tools data, return a sorted array of the owners. */
function populateOwners(sortedTools) {
  const owners = new Set();
  for (const tool of sortedTools) {
    for (const toolOwner of tool.owner) owners.add(toolOwner);
  }
  return [...owners].sort((a, b) => a.localeCompare(b));
}


/**
 * Populate all the tools in the given sortedTools with keywords.
 * sortedTools[i].keywords is an array of each of the strings in the tool's:
 * - description
 * - license
 * - name
 * - languages
 * - owners
 * - categories
 */
function populateToolsKeywords(tools) {
  for (let i = 0; i < tools.length; i++) {
    let keywords = new Set();
    const pattern = /[\s\-_.,!?]/;
    const descriptionArr = tools[i].description ? tools[i].description.split(pattern) : [];
    const licenseArr = tools[i].license ? tools[i].license.split(pattern) : [];
    const nameArr = tools[i].name ? tools[i].name.split(pattern) : [];

    descriptionArr.map(w => keywords.add(w.toLowerCase()));
    licenseArr.map(w => keywords.add(w.toLowerCase()));
    nameArr.map(w => keywords.add(w.toLowerCase()));

    // Note that owner, language and category are already arrays -- no processing needed.
    tools[i].owner.map(w => keywords.add(w.toLowerCase()));
    tools[i].language.map(w => keywords.add(w.toLowerCase()));

    tools[i]['keywords'] = keywords;
  }
}


/**
 * Given toolsData and sets of languages and owners, populate the DOM's tools table.
 * If languages is empty, use all languages.
 * If owners is empty, use all owners.
 */
function fillToolsTable(tools, selectedLanguages, selectedOwners) {
    document.getElementById('tools-table').textContent = '';
    let numMatchingTools = 0;
    for (let tool of tools) {
        const languageMatch = tool.language.some(lang => selectedLanguages.has(lang));
        const ownerMatch = tool.owner.some(o => selectedOwners.has(o));
        if (
          (selectedLanguages.size === 0 || languageMatch)
          && (selectedOwners.size === 0 || ownerMatch)
          && (!excludeDormant || !tool.dormant)
          && ((includeArchived && tool.archived) || !tool.archived)
          && (searchMatch(searchTerms, tool.keywords))
        ) {
            numMatchingTools++;
            const toolsTable = document.getElementById('tools-table');
            toolsTable.insertAdjacentHTML('beforeend', makeTableRow(tool));
        }
    }
    updateSearchResultMessage(numMatchingTools)
}


/** If every searchTerm is a substring of some keyword, return true. */
function searchMatch(searchTerms, keywords) {
  return searchTerms.every(t =>
    [...keywords].some(k => k.includes(t))
  );
}


/** Given a tool, return the HTML string to represent it in the tools table. */
function makeTableRow(tool) {
  return (
    `<tr>
      <td>
        <p>
          <strong>
            <a title="Project" href="${tool.url}">${tool.name}</a>
          </strong>&ensp;` +
          `<span style="display: ${tool.dormant ? 'visible' : 'none'};" class="tooltip">
            <em class="bi bi-moon-stars">&thinsp;</em>
            <span class="tooltip-text">Project is dormant</span>
          </span>
          <span style="display: ${tool.archived ? 'visible' : 'none'};" class="tooltip">
            <em class="bi bi-archive">&thinsp;</em>
            <span class="tooltip-text">project has been archived</span>
          </span><br>
          <span style="display: ${tool.owner.length > 0 ? 'visible' : 'none'};">
            <small>
              by <em title="Owners">${tool.owner.join(', ')}</em>
            </small>
          </span>
        </p>
        <p>
          <span>Rating:
            <span title="Rating">${tool.rating}</span>&ensp;<em class="bi bi-star"></em>
          </span>
        </p>
      </td>
      <td>
        <p title="Description">${tool.description ? tool.description : ''}</p>
        <p>
        <small>
          <span style="display: ${tool.language.length > 0 ? 'visible' : 'none'};">
            Language${tool.language.length > 1 ? 's' : ''}:
            <span title="Language">${tool.language.join(', ')}</span>
          </span><br>
          Last update: <span title="Last update">${tool.updated}</span>
        </small>
        </p>
      </td>
      <td>
        <p title="License">${tool.license ? tool.license : ''}</p>
      </td>
    </tr>`
  )
}


/** Debounce helper function to filter at the right moment, improving UX. */
function debounce(func, wait) {
    let timeout;
    return function(...args) {
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func.apply(context, args);
        }, wait);
    };
}


/** Update the search result message on the DOM. */
function updateSearchResultMessage(numTools) {
  let message;
  if (numTools === 1) {
    message = `There is 1 tool/extension matching your search:`;
    searchResultMessage.innerHTML = message;
  } else {
    message = `There are ${numTools} tools/extensions matching your search:`;
    searchResultMessage.innerHTML = message;
  }
}


/** Initialize the form processors. */
function initFormProcessors() {
  // Form handlers
  search.addEventListener('keyup', (e) => {
    searchResultMessage.innerHTML = LOADING_MESSAGE;
    debouncedHandleSearch(e);
  });
  excludeDormantCheckbox.addEventListener('click', (e) => {
    searchResultMessage.innerHTML = LOADING_MESSAGE;
    debouncedHandleDormantCheckbox(e);
  });
  includeArchivedCheckbox.addEventListener('click', (e) => {
    searchResultMessage.innerHTML = LOADING_MESSAGE;
    debouncedHandleArchivedCheckbox(e);
  });

  // Init multiselect components
  const multiselectElLanguages = document.getElementById('js-multiselect-languages');
  const multiselectComponentLanguages =
    new Multiselect(multiselectElLanguages, languages, 'languages');
  multiselectComponentLanguages.init();

  const multiselectElOwners = document.getElementById('js-multiselect-owners');
  const multiselectComponentOwners =
    new Multiselect(multiselectElOwners, owners, 'owners');
  multiselectComponentOwners.init();
}


/** When the archived checkbox is clicked, refill the tools table. */
function handleArchivedCheckbox() {
  includeArchived = !includeArchived;
  fillToolsTable(sortedTools, selectedLanguages, selectedOwners);
}

const debouncedHandleArchivedCheckbox = debounce((e) => {
  handleArchivedCheckbox(e);
}, CHECKB0X_WAIT_TIME);


/** When the dormant checkbox is clicked, refill the tools table. */
function handleDormantCheckbox() {
  excludeDormant = !excludeDormant;
  fillToolsTable(sortedTools, selectedLanguages, selectedOwners);
}

const debouncedHandleDormantCheckbox = debounce((e) => {
  handleDormantCheckbox(e);
}, CHECKB0X_WAIT_TIME);


/** On search, refill the tools table. */
function handleSearch(e) {
  searchTerms = e.target.value.toLowerCase().trim().split(' ');
  if (searchTerms.length === 1 && searchTerms[0] === '') searchTerms = [];
  fillToolsTable(sortedTools, selectedLanguages, selectedOwners);
}

const debouncedHandleSearch = debounce((e) => {
  handleSearch(e);
}, SEARCH_WAIT_TIME);
