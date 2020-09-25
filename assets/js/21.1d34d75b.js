(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{434:function(s,e,t){"use strict";t.r(e);var a=t(42),r=Object(a.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[s._v("#")]),s._v(" Docker")]),s._v(" "),t("p",[s._v("Docker 是一个容器化平台，它将应用程序及其所有依赖项以容器的形式打包在一起，以确保应用程序在任何环境（无论是开发环境、测试环境还是生产环境）中无缝运行。")]),s._v(" "),t("h2",{attrs:{id:"常用命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[s._v("#")]),s._v(" 常用命令")]),s._v(" "),t("h3",{attrs:{id:"镜像操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#镜像操作"}},[s._v("#")]),s._v(" 镜像操作")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("列出本地镜像")]),s._v(" "),t("p",[t("code",[s._v("docker images")])])]),s._v(" "),t("li",[t("p",[s._v("获取镜像")]),s._v(" "),t("p",[t("code",[s._v("docker pull mysql")])])]),s._v(" "),t("li",[t("p",[s._v("搜索镜像")]),s._v(" "),t("p",[t("code",[s._v("docker search mysql")])])]),s._v(" "),t("li",[t("p",[s._v("删除镜像")]),s._v(" "),t("p",[t("code",[s._v("docker rmi -f mysql")])])]),s._v(" "),t("li",[t("p",[s._v("编写 Dockerfile")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#在centos上安装nginx")]),s._v("\nFROM centos\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#标明著作人的名称和邮箱")]),s._v("\nMAINTAINER jiabuli "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("649917837")]),s._v("@qq.com\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#测试一下网络环境")]),s._v("\nRUN "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ping")]),s._v(" -c "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" www.baidu.com\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#安装nginx必要的一些软件")]),s._v("\nRUN yum -y "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" gcc "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" pcre-devel zlib-devel "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" zlib\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#把nginx安装包复制到/usr/src/目录下")]),s._v("\nADD nginx-1.15.8.tar.gz /usr/src/\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#切换到/usr/src/nginx-1.15.8编译并且安装nginx")]),s._v("\nRUN "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/src/nginx-1.15.8 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" /usr/local/nginx "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" ./configure --prefix"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/nginx "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" -s /usr/local/nginx/sbin/nginx /usr/local/sbin/ "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" nginx\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#删除安装nginx安装目录")]),s._v("\nRUN "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf /usr/src/nginx-nginx-1.15.8\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#对外暴露80端口")]),s._v("\nEXPOSE "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#启动nginx")]),s._v("\nCMD "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nginx"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-g"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"daemon off;"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])])]),s._v(" "),t("li",[t("p",[s._v("构建镜像")]),s._v(" "),t("p",[t("code",[s._v("docker build -f /docker/dockerfile/nginx -t nginx：1.15.8")])])])]),s._v(" "),t("h3",{attrs:{id:"容器操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#容器操作"}},[s._v("#")]),s._v(" 容器操作")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("启动容器")]),s._v(" "),t("p",[t("code",[s._v("docker run -i -t --name mysentos")])]),s._v(" "),t("blockquote",[t("p",[s._v("参数说明：")]),s._v(" "),t("p",[s._v("-i：交互式操作")]),s._v(" "),t("p",[s._v("-t：终端")]),s._v(" "),t("p",[s._v("--name：为容器指定名字")])])]),s._v(" "),t("li",[t("p",[s._v("启动已停止的容器")]),s._v(" "),t("p",[t("code",[s._v("docker start/restart mysql")])])]),s._v(" "),t("li",[t("p",[s._v("查看容器")]),s._v(" "),t("p",[t("code",[s._v("docker ps")])])]),s._v(" "),t("li",[t("p",[s._v("停止容器")]),s._v(" "),t("p",[t("code",[s._v("docker stop/kill/(rm -f) mysql")])])]),s._v(" "),t("li",[t("p",[s._v("生成镜像")]),s._v(" "),t("p",[t("code",[s._v('docker commit -a="lamarsan" -m="my mysql" [容器ID] mysql:5.7')])]),s._v(" "),t("blockquote",[t("p",[s._v("参数说明：")]),s._v(" "),t("p",[s._v("-a：镜像作者")]),s._v(" "),t("p",[s._v("-c：用 Dockerfile 指令来创建镜像")]),s._v(" "),t("p",[s._v("-m：说明")]),s._v(" "),t("p",[s._v("-p：在 commit 时，将容器暂停")])])])]),s._v(" "),t("h2",{attrs:{id:"docker-组成"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-组成"}},[s._v("#")]),s._v(" Docker 组成")]),s._v(" "),t("p",[s._v("镜像、容器、仓库。")]),s._v(" "),t("h3",{attrs:{id:"镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#镜像"}},[s._v("#")]),s._v(" 镜像")]),s._v(" "),t("p",[s._v("Docker 镜像（Image）就是一个"),t("strong",[s._v("只读")]),s._v("的模板。镜像可以用来创建 Docker 容器，一个镜像可以创建很多容器。")]),s._v(" "),t("p",[s._v("镜像由一系列只读层构建，所谓的层代表着镜像 Dockerfile 中的一条指令。")]),s._v(" "),t("h3",{attrs:{id:"容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#容器"}},[s._v("#")]),s._v(" 容器")]),s._v(" "),t("ul",[t("li",[s._v("Docker 利用容器（Container）独立运行的一个或一组应用。容器是用镜像创建的运行实例。")]),s._v(" "),t("li",[s._v("它可以被启动、开始、停止、删除。每个容器都是相互隔离的、保证安全的平台。")]),s._v(" "),t("li",[t("strong",[s._v("可以把容器看做是一个简易版的 Linux 环境")]),s._v("（包括 root 用户权限、进程空间、用户空间和网络空间等）和运行在其中的应用程序。")]),s._v(" "),t("li",[s._v("容器的定义和镜像几乎一模一样，也是一堆层的统一视角，唯一区别在于容器的最上面那一层是可读可写的。")])]),s._v(" "),t("h3",{attrs:{id:"仓库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#仓库"}},[s._v("#")]),s._v(" 仓库")]),s._v(" "),t("p",[s._v("仓库是集中存放镜像文件的场所。")]),s._v(" "),t("p",[s._v("仓库分为公开仓库（Public）和私有仓库（Private）两种形式。最大的公开仓库是 Docker Hub，存放了数量庞大的镜像供用户下载。国内的公开仓库包括阿里云 、网易云 等。")]),s._v(" "),t("h2",{attrs:{id:"docker-compose"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose"}},[s._v("#")]),s._v(" Docker Compose")]),s._v(" "),t("p",[s._v("Docker Compose 是 docker 提供的一个命令行工具，用来定义和运行由多个容器组成的应用。使用 compose，我们可以通过 YAML 文件声明式的定义应用程序的各个服务，并由单个命令完成应用的创建和启动。")]),s._v(" "),t("p",[t("strong",[s._v("使用步骤如下：")])]),s._v(" "),t("ol",[t("li",[s._v("定义应用环境，"),t("code",[s._v("Dockerfile")]),s._v("以便可以在任何地方复制。")]),s._v(" "),t("li",[s._v("定义组成应用程序的服务，"),t("code",[s._v("docker-compose.yml")]),s._v(" 以便它们可以在隔离的环境中一起运行。")]),s._v(" "),t("li",[s._v("Run "),t("code",[s._v("docker-compose up")]),s._v("and Compose 启动并运行您的整个应用程序。")])]),s._v(" "),t("h3",{attrs:{id:"docker-compose-yml"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose-yml"}},[s._v("#")]),s._v(" docker-compose.yml")]),s._v(" "),t("p",[s._v("这是 Docker Compose 运行时所需的配置文件：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("version: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'3'")]),s._v("\nservices:\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 定义web服务")]),s._v("\n  web:\n  \t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 文件地址")]),s._v("\n    build: "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开放端口")]),s._v("\n    ports:\n    - "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"5000:5000"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 卷挂载路径设置")]),s._v("\n    volumes:\n    - .:/code\n    - logvolume01:/var/log\n    links:\n    - redis\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 定义redis服务")]),s._v("\n  redis:\n    image: redis\nvolumes:\n  logvolume01: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("p",[s._v("编写完成后使用"),t("code",[s._v("docker-compose up -d")]),s._v("进行运行。该"),t("code",[s._v("web")]),s._v("服务使用从"),t("code",[s._v("Dockerfile")]),s._v("当前目录中构建的映像。然后，它将容器和主机绑定到暴露的端口"),t("code",[s._v("5000")]),s._v("。")]),s._v(" "),t("h3",{attrs:{id:"常见命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常见命令"}},[s._v("#")]),s._v(" 常见命令")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("执行命令运行容器")]),s._v(" "),t("p",[t("code",[s._v("docker-compose up -d")])])]),s._v(" "),t("li",[t("p",[s._v("查看镜像")]),s._v(" "),t("p",[t("code",[s._v("docker images")])])]),s._v(" "),t("li",[t("p",[s._v("停止和删除容器")]),s._v(" "),t("p",[t("code",[s._v("docker-compose stop/rm redis")])])])]),s._v(" "),t("h2",{attrs:{id:"dockerfile-常见指令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile-常见指令"}},[s._v("#")]),s._v(" DockerFile 常见指令")]),s._v(" "),t("ul",[t("li",[s._v("FROM：指定基础镜像")]),s._v(" "),t("li",[s._v("LABEL：功能是为镜像指定标签")]),s._v(" "),t("li",[s._v("RUN：运行指定的命令")]),s._v(" "),t("li",[s._v("CMD：容器启动时要运行的命令")])]),s._v(" "),t("h2",{attrs:{id:"docker-swarm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-swarm"}},[s._v("#")]),s._v(" Docker Swarm")]),s._v(" "),t("p",[s._v("Docker Swarm 是 Docker 的本机群集。它将 Docker 主机池转变为单个虚拟 Docker 主机。Docker Swarm 提供标准的 Docker API，任何已经与 Docker 守护进程通信的工具都可以使用 Swarm 透明地扩展到多个主机。")]),s._v(" "),t("h2",{attrs:{id:"docker-容器的几种状态"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-容器的几种状态"}},[s._v("#")]),s._v(" Docker 容器的几种状态")]),s._v(" "),t("ul",[t("li",[s._v("运行")]),s._v(" "),t("li",[s._v("已暂停")]),s._v(" "),t("li",[s._v("重新启动")]),s._v(" "),t("li",[s._v("已退出")])]),s._v(" "),t("p",[s._v("可以通过运行命令来识别 Docker 容器的状态：")]),s._v(" "),t("p",[t("code",[s._v("docker ps -a")])])])}),[],!1,null,null,null);e.default=r.exports}}]);