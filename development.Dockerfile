FROM node:8.11.2
LABEL description="kd-webfront-user-center"
#暂时测试Docker部署
ADD . /home/app
WORKDIR /home/app
RUN chmod 777 /home/app
ENV NODE_ENV "development"
ENV HOST 0.0.0.0
EXPOSE 80 443 8186
#设置时区
RUN /bin/cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && echo 'Asia/Shanghai' >/etc/timezone
ENTRYPOINT [ "npm","run","start" ]