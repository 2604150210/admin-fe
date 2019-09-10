
>**Windows版用户可以看我的这篇博客->[最详细的GitHub / Git 的windows配置、使用教程、常用日志汇总（小白必看！）](https://blog.csdn.net/jal517486222/article/details/79967632)**
## 一、下载Git并且安装
自行去Git官网下载dmg安装包，然后进行安装
## 二、在用户目录~下配置.gitconfig
在终端输入`vim ~/.gitconfig`
主要是配置好user中的name和email。第六行开始的alias是Git命令的别名
```sh
  [user]
      name = Cathy
      email = 517486222@qq.com
  [core]
      autocrlf = input
  [alias]
      co=checkout
      ci=commit
      st=status
      pl=pull
      ps=push
      dt=difftool
      ca=commit -am
      b=branch
```
如图所示:
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190911060943499.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2phbDUxNzQ4NjIyMg==,size_16,color_FFFFFF,t_70)
## 三、在用户目录~下生成ssh密钥对
`ssh-keygen -t rsa -C '517486222@qq.com'`，然后等到终端执行，不用输入，直接按回车
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190911061648271.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2phbDUxNzQ4NjIyMg==,size_16,color_FFFFFF,t_70)
## 四、在GitHub上添加你的ssh公钥
进入GItHub登录，头像下面有个Settings
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190911061719786.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2phbDUxNzQ4NjIyMg==,size_16,color_FFFFFF,t_70)
然后点击左侧的SSH key，就可以看到SSH keys配置的地方。
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190911062001353.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2phbDUxNzQ4NjIyMg==,size_16,color_FFFFFF,t_70)

点击按钮后就配置好了SSH了。

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190911061835362.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2phbDUxNzQ4NjIyMg==,size_16,color_FFFFFF,t_70)
## 五、使用ssh克隆仓库
回到项目中，点击绿色的clone or download那个按钮，然后使用SSH clone。将SSH地址复制下来。
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190911062118139.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2phbDUxNzQ4NjIyMg==,size_16,color_FFFFFF,t_70)
在你想要存放代码的路径下，使用命令：`git clone git@github.com:2604150210/admin-fe.git`就可以将代码克隆下来了。如果可能不成功，可能是SSH还没生效，多试几次就行了
我克隆一遍就成功了，非常顺利方便，再也不用使用http克隆还得输账号密码了
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190911062441950.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2phbDUxNzQ4NjIyMg==,size_16,color_FFFFFF,t_70)

## 六、在项目里创建.gitignore文件
在当前项目下输入命令`vim .gitignore`,来配置提交代码时的忽略文件：
React项目忽略以下几种文件和文件夹就可以了
```sh
.DS_Store
mode_modules
dist
*.log
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/2019091106262898.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2phbDUxNzQ4NjIyMg==,size_16,color_FFFFFF,t_70)

## 七、上传.gitignore文件
代码上传就是老套路了,`git add .`， `git ca "your commit info"`，`git push`三步走就搞定了
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190911062742745.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2phbDUxNzQ4NjIyMg==,size_16,color_FFFFFF,t_70)
回到GitHub刷新一下就能看到刚才提交的.gitignore文件了