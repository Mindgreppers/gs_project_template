FROM adminmindgrep/gs_service:latest
ARG USERNAME=node
ARG USER_UID
ARG USER_GID=$USER_UID
USER root
RUN sudo groupmod --gid $USER_GID $USERNAME \
    && usermod --uid $USER_UID --gid $USER_GID $USERNAME \
    && chown -R $USER_UID:$USER_GID /workspace/development

USER node
RUN sudo npm i -g @mindgrep/godspeed
RUN cd /workspace/development/gs_service && npm i