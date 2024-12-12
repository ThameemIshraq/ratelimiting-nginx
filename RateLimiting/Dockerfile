
FROM nginx:latest
COPY ./conf.d /etc/nginx
COPY nginx.conf /etc/nginx
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
