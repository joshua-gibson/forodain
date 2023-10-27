FROM node:14
WORKDIR /node-servers
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
RUN npm ci
RUN mkdir node_modules/.cache && chmod -R 777 node_modules/.cache
ADD . .

ENTRYPOINT ["/entrypoint.sh"]
## EXPOSE [Port you mentioned in the vite.config file]
EXPOSE 5173
CMD ["npm", "run", "dev"]
