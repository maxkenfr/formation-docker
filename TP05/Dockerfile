FROM debian:jessie
RUN apt-get update \
    && apt-get install -y curl && mkdir -p /app/log
RUN curl -sL https://deb.nodesource.com/setup_11.x | bash - \
    && apt-get install -y nodejs
ADD package.json /app/
WORKDIR /app
RUN npm install
ADD index.js /app/
EXPOSE 3030
VOLUME /app/log
ENV PORT=3030
CMD node .