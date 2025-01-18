FROM ubuntu:latest
LABEL authors="thomas"

RUN apt update && \
    apt install -y timewarrior \
                   faketime
WORKDIR /home/root
COPY timew_tutorial_playbook .
RUN chmod u+x timew_tutorial_playbook

CMD ["./timew_tutorial_playbook"]
