FROM node:latest

ARG USERNAME=node
ARG USER_UID=1000
ARG USER_GID=$USER_UID

RUN apt update && apt install rsync cmake g++ sudo -y && echo '%sudo ALL=(ALL) NOPASSWD:ALL' >> /etc/sudoers && rm -rf /var/cache/apt/* && rm -rf /var/log/apt && usermod -G sudo node 

USER root
RUN groupmod --gid $USER_GID $USERNAME \
    && usermod --uid $USER_UID --gid $USER_GID $USERNAME

RUN mkdir -p /workspace/development && chown  -R $USER_UID:$USER_GID /workspace 

USER node
WORKDIR /workspace/development
RUN sudo npm i -g @mindgrep/godspeed
COPY --chown=$USER_UID:$USER_GID . app

# RUN ln -s app/gs_service .

# RUN cd app/gs_service && npm i
