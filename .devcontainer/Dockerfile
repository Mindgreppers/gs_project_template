FROM adminmindgrep/gs_service:1.0.10
ARG USERNAME=node
ARG USER_UID=1000
ARG USER_GID=$USER_UID

RUN sudo groupmod --gid $USER_GID $USERNAME \
    && usermod --uid $USER_UID --gid $USER_GID $USERNAME \
    && chown -R $USER_UID:$USER_GID /workspace/development

RUN sudo npm i -g @mindgrep/godspeed
RUN cd /workspace/development/gs_service && npm i