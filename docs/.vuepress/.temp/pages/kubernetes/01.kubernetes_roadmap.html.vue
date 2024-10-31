<template><div><h2 id="_1-kubernetes-集群架构" tabindex="-1">1.  Kubernetes 集群架构</h2>
<p>Kuberetes 本身是由一系列组件组成的容器编排系统，每个组件各司其职从而实现容器的调度、部署以及自动伸缩等功能。</p>
<p>下面是包含各个组件的 Kubernetes 整体架构图</p>
<p><img src="https://i-blog.csdnimg.cn/blog_migrate/552253edcadd302a94466b2ead1e4082.png#pic_center" alt="在这里插入图片描述"></p>
<p>首先是 Kubernetes 的节点，也就是组成 Kubernetes 的一台台服务器，K8s 的节点有两类：</p>
<ul>
<li>控制节点（ControlPlane Node），也叫 master 节点。</li>
<li>工作节点 (Work Node)</li>
</ul>
<h3 id="_1-1-kubernnetes-节点" tabindex="-1">1.1 Kubernnetes 节点</h3>
<h4 id="_1-1-1-master-节点" tabindex="-1">1.1.1 Master 节点</h4>
<p>Master 节点是集群中的控制节点，为单数数量，负责运行集群中的控制逻辑的相关组件。也就是 Kubernetes 本身的几个组件。</p>
<p>默认 master 节点会被打上 <code v-pre>node-rule.kubernetes.io/master:NoSchedule</code> 的 taint，用来告知调度模块不要将用户的 Pod 调度部署到这些节点，以便维持集群控制逻辑运行的所需资源稳定，从而保证 Kubernetes 正常运作。。Master 节点上主要运行的组件有 4 个：</p>
<ul>
<li>etcd</li>
<li>api-server</li>
<li>controller manager</li>
<li>scheduler</li>
</ul>
<h4 id="_1-2-worker节点" tabindex="-1">1.2 Worker节点</h4>
<p>实际运行用户应用，部署业务的 Pod 的节点。</p>
<h3 id="_1-2-kubernnetes-组件" tabindex="-1">1.2 Kubernnetes 组件</h3>
<h4 id="_1-2-1-etcd" tabindex="-1">1.2.1 Etcd</h4>
<p><a href="https://etcd.io/" target="_blank" rel="noopener noreferrer">Etcd</a> 是一个采用 RAFT协议的强一致性，高可用，开源的 key-value 数据库，Kubernetes 用它来保存数据。Kuberntes 的所有资源对象数据都会存储在 Etcd 中。</p>
<p>Etcd 采用乐观锁机制控制对所有存储资源的访问，其保存的所有资源都有一个版本号，每次编辑时都会更新。如果资源版与保存的修订版不同，kube-apiserver 会利用它来拒绝冲突的编辑请求。</p>
<h4 id="_1-2-2-api-server" tabindex="-1">1.2.2 api-server</h4>
<p>api-server 是外部和其他组件访问 Kubernetes 的 API 网关，采用 RESTful 协议，支持无状态水平伸缩。api-server 是唯一可以与 etcd 通信的组件，其提供了一系列的 CRUD 接口供外部访问以操作数据，它会校验请求中 object 的数据的合法性，还会进行身份认证、鉴权、准入控制等操作。</p>
<h4 id="_1-2-3-controller-manager" tabindex="-1">1.2.3 controller-manager</h4>
<p>运行一系列的控制器进程，来监听我们创建的各种控制器资源对象，然后进行状态拟合管理对应的 Pod 资源，保证我们部署在 K8s 上的应用正常运行。</p>
<p>一些常见的控制器对象：</p>
<ul>
<li>Deployment</li>
<li>ReplicaSet</li>
<li>DaemonSet</li>
<li>Job/CronJob</li>
</ul>
<h4 id="_1-2-4-scheduler" tabindex="-1">1.2.4 scheduler</h4>
<p>调度器，负责监听集群中还未分配到所属节点的 Pod，其根据一系列调度规则，将 Pod 调度到合适的节点运行。</p>
<p>以上四个是 Kubernetes 运行所需的最主要组件，默认都会运行在 master 节点上。</p>
<h4 id="_1-2-5-其他组件" tabindex="-1">1.2.5 其他组件</h4>
<p><strong>Kubelet</strong></p>
<p>Kubelet 是一个运行在每个节点上的 agent，向上与 api-server 交互同步 Pod 相关的信息；向下与容器运行时通信，根据 Pod 信息来创建或销毁容器，并收集容器的状态、指标。</p>
<p><strong>container-runtime</strong></p>
<p>容器运行时负责容器具体的创建、销毁等操作。Kubernetes 最开始是耦合于 Docker 的，在 1.5 版本引入了 CRI（容器运行时）接口，从而实现了 Kubernetes 与具体容器工具的解耦，只要实现了 CRI 接口，就可以与 Kubelet 交互从而被 Kubernetes 编排，这也符合 IOC 和 “面向接口编程”的原则。</p>
<p>常见的容器运行时有 Docker，containerd，CRI-O 等，可以在部署 K8s 时运行特定的运行时软件，kubelet 会通过 grpc 协议与容器运行时通信。下面这个图可以清楚看到相关的关系。</p>
<p><img src="https://i-blog.csdnimg.cn/blog_migrate/91d6465497281ec9da7d352851f45620.png" alt="在这里插入图片描述"></p>
<p><strong>kube-proxy</strong>
‘
kube-proxy 也是运行在每个节点上，它的角色是一个网络代理，管理在节点上的网络规则，用来允许集群中的 Pod 进行集群内外的网络通讯。一般情况 kube-proxy 会直接使用操作系统提供的网络包过滤层的能力（比如iptable，ipvs），否则它需要自己实际负责流量的分发。</p>
<p><strong>CNI plugin</strong></p>
<p>网络插件，和 CRI 接口一样，Kubernetes 针对网络也定义了一系列的接口，具体的实现则由各种网络插件来实现，给集群中的 Pod 设置 IP 并实现集群内的内外通信。</p>
<p><strong>DNS 组件</strong></p>
<p>Kubernetes 内部的 DNS 服务组件，用来对 Service、Pod 做 DNS 解析实现集群内部的服务发现，目前默认是 <a href="https://coredns.io/" target="_blank" rel="noopener noreferrer">CoreDNS</a>。</p>
<p><strong>Ingress Controller</strong></p>
<p>该组件基于 Ingress 对外部请求做路由，将 K8s 中的服务暴露给外界访问，最常用的一般是
<a href="https://docs.nginx.com/nginx-ingress-controller/" target="_blank" rel="noopener noreferrer">NGINX Ingress Controlle</a>。 简单来说，在我们的传统 IT 环境中，通常会用 Nginx 做请求代理和路由、负载均衡。哪怕将应用部署到了 Kubernetes 中事情并没有发生变化，只不过是由 Ingress Controller 来做。</p>
<h2 id="_2-kubernetes-资源对象" tabindex="-1">2. Kubernetes 资源对象</h2>
<p>Kubernetes 将一切视为资源，Kubernetes 资源对象是持久化的实体，其本质是对分布式系统所需要的各种功能的抽象，其表现形式就是 yaml 文件。我们使用 Kubernetes 时基本就是通过 kubectl 命令来操作各种通过 yaml 文件定义资源对象，下面是一个 yaml 文件示例：</p>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre v-pre><code><span class="line"><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1 <span class="token comment"># for versions before 1.9.0 use apps/v1beta2</span></span>
<span class="line"><span class="token key atrule">kind</span><span class="token punctuation">:</span> Deployment</span>
<span class="line"><span class="token key atrule">metadata</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx<span class="token punctuation">-</span>deployment</span>
<span class="line"><span class="token key atrule">spec</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">selector</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">app</span><span class="token punctuation">:</span> nginx</span>
<span class="line">  <span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">2</span> <span class="token comment"># tells deployment to run 2 pods matching the template</span></span>
<span class="line">  <span class="token key atrule">template</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">metadata</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">labels</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token key atrule">app</span><span class="token punctuation">:</span> nginx</span>
<span class="line">    <span class="token key atrule">spec</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">containers</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx</span>
<span class="line">        <span class="token key atrule">image</span><span class="token punctuation">:</span> nginx<span class="token punctuation">:</span>1.14.2</span>
<span class="line">        <span class="token key atrule">ports</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token punctuation">-</span> <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">80</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一个完整的资源对象的 yaml 文件由四部分组成：</p>
<ul>
<li><strong>apiVersion &amp; kind</strong>：创建该对象所使用的 Kubernetes API 的版本和对象的类别。</li>
<li><strong>metadata</strong>：元信息，帮助唯一性标识对象的一些数据，包括一个 name 字符串、UID 和可选的 namespace。</li>
<li><strong>spec</strong>：对象规格，不同的对象有不同的 spec，用于定义其相关属性，创建对象时设置其内容，描述我们希望对象所具有的特征，也就是 「期望状态」。</li>
<li><strong>status</strong>:  对象的<code v-pre>「当前状态」</code>，由 Kubernetes 系统组件设置并更新，在创建对象时我们只需要定义上述三部分内容即可。在任何时刻，Kubernetes Control Pannel 都一直积极地管理着对象的实际状态，以使之与期望状态相匹配。</li>
</ul>
<p>使用 <code v-pre>kubectl get [objectType] [objectName] -o yaml</code> 可以在命令行上查看资源对象完整的 yaml。比如：</p>
<div class="language-handlebars line-numbers-mode" data-highlighter="prismjs" data-ext="handlebars" data-title="handlebars"><pre v-pre><code><span class="line">$ kubectl get pod nginx -o yaml</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>下图是常用的一些 Kubernetes 对象，所有的对象类型可以用下面命令查看：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">$ kubectl api-resources</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><img src="https://i-blog.csdnimg.cn/blog_migrate/a4df3e4a748f924af71b78ce7025eb82.png" alt="在这里插入图片描述"></p>
<p>基于上面是对 K8s 整体的概述，我们可以知道对于 Kubernetes 本身的学习大致可以归为两方面：</p>
<ul>
<li>熟悉 Kubernetes 各个组件的作用与设计原理，比如 etcd 的工作原理，调度器的工作原理、网络插件的实现原理等。</li>
<li>熟悉 Kubernetes 各个资源对象的使用与原理，比如 Pod、Service 以及各种控制器对象、存储对象、RBAC 对象的使用等。</li>
</ul>
</div></template>


