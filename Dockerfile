FROM adminmindgrep/gs_service:1.0.11 AS appbuild
COPY --chown=node:node . .
RUN npm run build

FROM node:16.14.2-slim
WORKDIR  /app
COPY --chown=node:node --from=appbuild /workspace/development/gs_service .
ENV NODE_ENV production
CMD npm start
