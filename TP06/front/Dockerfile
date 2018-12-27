FROM nginx:1.15.2-alpine
RUN rm /etc/nginx/conf.d/default.conf
COPY build /build
COPY nginx.conf /etc/nginx/conf.d/default.conf
RUN rm build/static/js/*.js.map
RUN rm build/static/css/*.css.map
CMD ["nginx", "-g", "daemon off;"]
