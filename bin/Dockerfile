FROM ghcr.io/gothenburgbitfactory/timew:stable

RUN apt update && \
    apt install -y faketime

WORKDIR /home/root
COPY timew_tutorial_playbook .
RUN chmod u+x timew_tutorial_playbook

CMD ["./timew_tutorial_playbook"]
