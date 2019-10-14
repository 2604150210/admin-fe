# 线上环境配置

## 一、本地代码修改
修改webpack.config.js和package.json,通过WEBPACK_ENV判断是线上环境还是开发环境。


## 二、生产环境配置
1. 安装NodeJs
使用root账号进入自己的云服务器，进入了`~`目录下。
去Node的官网，下载Linux的6.12.3版本的Node，node-v6.12.3-linux-x64.tar.gz。下载地址是：https://nodejs.org/download/release/v6.12.3/

在命令行下载：
`apt install 地址`
下载好了后，然后解压：
`tar -xzvf node-v6.12.3-linux-x64.tar.gz`
然后移动文件夹到经常装文件的位置：
`mv nodev6.12.3-linux-x64 /usr/local/node`

```bash
cd /usr/local/node/
ls
cd bin/
./node -v
```

查看到版本：v6.12.3
做一个软链接：
```bash
ln /usr/local/node/bin/node /usr/local/bin/
```
如果有npm，则给npm也做一个软链接：
```bash
ln /usr/local/node/bin/npm /usr/local/bin/
```

如果没有npm，则先去安装npm:`apt install npm`

`npm -v`可以查看版本

2. 安装Yarn
网址：https://yarn.bootcss.com
找到Ubuntu的，需要先移除cmdtest
```bash
sudo apt remove cmdtest
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get update && sudo apt-get install yarn
```
安装好后可以执行`yarn -v`查看版本。

3. 安装Git， 并配置权限
`apt-get install git`
安装好后，执行`git --version`查看版本
生成Git的ssh秘钥`ssh-keygen -t rsa -C 517486222@qq.com`
查看公钥：`cat ~/.ssh/id_rsa.pub`

然后遇到需要输入的地方，一路回车，啥也不用填。
然后去GitHub的项目里，管理-> 公钥管理 -> 部署公钥管理,将刚才查看到的公钥部署到公钥管理处。

4. 创建文件夹,克隆项目
```bash
cd /
mkdir developer
mkdir product
cd developer
mkdir git-repository
cd git-repository
git clone git@github.com:2604150210/admin-fe.git
```
clone时要输入yes，不要直接回车过。然后就顺利克隆下来了。


5. 安装Nginx
```bash
apt-get install nginx
```
安装好后查看是否安装成功：`nginx -v`

## 三、代码发布过程
1. 拉取最新master分支的代码
```bash
cd admin-fe
git pull
```
2. 项目初始化
```bash
yarn
```
如果在初始化node-sass的过程出现问题，可以指定yarn源。

3. 执行线_上环境的打包编译
```bash
yarn run dist
```

4. 复制dist目录到目标目录
```bash
cd /product/
mkdir front
cd front/
mkdir admin-fe
cd admin-fe
cp -R /developer/git-repository/admin-fe/dist ./

```

5. 将deploy文件夹中的fe-deploy.sh，放到/developer文件夹中，然后执行
```bash
chmod 775 ./fe-deploy.sh
./fe-deploy.sh admin-fe
cd /front/admin-fe
ls
```

## 四、Nginx和域名配置
1. Nginx中vhost的配置

```bash
cd /etc/nginx/
ls
mkdir vhost
vim nginx.conf
```

输入：`include vhost/*.conf;`
```bash
cd vhost/
touch admin.jiailing.com.conf
touch s.jiailing.com.conf
```
`admin.jiailing.com.conf`和`s.jiailing.com.conf`文件的内容就是在这个项目的vhost文件夹中。

然后执行`nginx -t`，检测Nginx配置是否有问题。
重启nginx服务：`nginx -s reload`

如果出现报错`nginx: [error] invalid PID number "" in "/run/nginx.pid."`

可以通过这个命令解决：`nginx -c /etc/nginx/nginx.conf`，然后重新执行`nginx -s reload`重启服务

2. 更改域名解析，通过指定的hosts方式做线上回归测试
将`admin.jiailing.com`和`s.jiailing.com`都解析到云服务器IP地址`49.235.94.74`
