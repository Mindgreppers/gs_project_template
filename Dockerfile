
FROM adminmindgrep/gs_service:latest AS appbuild

WORKDIR /workspace/development/app

COPY . .

RUN  ln -s /workspace/development/gs_service /workspace/development/app && npm run build
#  rsync --delete -rv src/ gs_service/project && npm install && \
#     cd gs_service && npm run build && mkdir -p build &&  cp -r project/* src/* build/  && \
#     rsync -rv --delete --exclude='*.ts' build/ dist/ && \
#     npm install && ./node_modules/typescript/bin/tsc

FROM node:16.14.2-slim
WORKDIR /usr/src/app

RUN apt update && apt install rsync cmake g++ -y && rm -rf /var/cache/apt/* && rm -rf /var/log/apt  

COPY --from=appbuild /workspace/development/gs_service/package.json . 
RUN npm install
COPY --from=appbuild /workspace/development/gs_service/dist ./dist
EXPOSE 3000
CMD PORT=3000 /usr/src/app/node_modules/.bin/nodemon dist/app.js