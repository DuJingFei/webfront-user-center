FROM node:8.9.3
LABEL description="kd-webfront-user-center"
#暂时测试Docker部署
ADD . /home/app
WORKDIR /home/app
RUN chmod 777 /home/app
EXPOSE 80 8186 443
ENV NODE_ENV "production"
ENV HOST 0.0.0.0
#设置时区
RUN /bin/cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && echo 'Asia/Shanghai' >/etc/timezone
ENTRYPOINT [ "npm","run","start" ]