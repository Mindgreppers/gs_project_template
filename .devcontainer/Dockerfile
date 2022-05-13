# See here for image contents: https://github.com/microsoft/vscode-dev-containers/tree/v0.231.6/containers/javascript-node/.devcontainer/base.Dockerfile

# [Choice] Node.js version (use -bullseye variants on local arm64/Apple Silicon): 16, 14, 12, 16-bullseye, 14-bullseye, 12-bullseye, 16-buster, 14-buster, 12-buster
ARG VARIANT="latest"

FROM adminmindgrep/gs_service:$VARIANT
WORKDIR /workspace/development
ARG USERNAME=gs_user
ARG USER_UID=1001
ARG USER_GID=$USER_UID
# Create the user
RUN useradd -o --uid $USER_UID -s /bin/bash --gid $USER_GID -m $USERNAME \
    && apt-get update \
    && apt-get install -y sudo \
    && echo $USERNAME ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/$USERNAME \
    && chmod 0440 /etc/sudoers.d/$USERNAME \
    && chown -R dev /workspace/development



# RUN cd /workspaces/gs_project_template && rsync --delete -rv src/ gs_service/project && npm install && \
#     cd gs_service && cp -r project/* src/* build/  && \
#     rsync -rv --delete --exclude='*.ts' build/ dist/ && \
#     npm install && ./node_modules/typescript/bin/tsc


# [Optional] Uncomment this section to install additional OS packages.
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends <your-package-list-here>

# [Optional] Uncomment if you want to install an additional version of node using nvm
# ARG EXTRA_NODE_VERSION=10
# RUN su node -c "source /usr/local/share/nvm/nvm.sh && nvm install ${EXTRA_NODE_VERSION}"

# [Optional] Uncomment if you want to install more global node modules
# RUN su node -c "npm install -g <your-package-list-here>"
