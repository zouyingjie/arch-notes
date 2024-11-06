import comp from "/Users/jinyinhuacha/study/blog/arch-notes/docs/.vuepress/.temp/pages/kubernetes/01.kubernetes_roadmap.html.vue"
const data = JSON.parse("{\"path\":\"/kubernetes/01.kubernetes_roadmap.html\",\"title\":\"Kubernetes 架构概览\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Kubernetes 架构概览\",\"description\":\"组成 K8s 的主要组件\",\"tags\":[\"Kubernetes\"],\"categories\":[\"Kubernetes\"]},\"headers\":[{\"level\":2,\"title\":\"1.  Kubernetes 集群架构\",\"slug\":\"_1-kubernetes-集群架构\",\"link\":\"#_1-kubernetes-集群架构\",\"children\":[{\"level\":3,\"title\":\"1.1 Kubernnetes 节点\",\"slug\":\"_1-1-kubernnetes-节点\",\"link\":\"#_1-1-kubernnetes-节点\",\"children\":[]},{\"level\":3,\"title\":\"1.2 Kubernnetes 组件\",\"slug\":\"_1-2-kubernnetes-组件\",\"link\":\"#_1-2-kubernnetes-组件\",\"children\":[]}]},{\"level\":2,\"title\":\"2. Kubernetes 资源对象\",\"slug\":\"_2-kubernetes-资源对象\",\"link\":\"#_2-kubernetes-资源对象\",\"children\":[]}],\"git\":{\"updatedTime\":1730365729000,\"contributors\":[{\"name\":\"zouyingjie\",\"email\":\"yingjiezou1@gmail.com\",\"commits\":1}]},\"filePathRelative\":\"kubernetes/01.kubernetes_roadmap.md\",\"excerpt\":\"<h2>1.  Kubernetes 集群架构</h2>\\n<p>Kuberetes 本身是由一系列组件组成的容器编排系统，每个组件各司其职从而实现容器的调度、部署以及自动伸缩等功能。</p>\\n<p>下面是包含各个组件的 Kubernetes 整体架构图</p>\\n<p><img src=\\\"https://i-blog.csdnimg.cn/blog_migrate/552253edcadd302a94466b2ead1e4082.png#pic_center\\\" alt=\\\"在这里插入图片描述\\\"></p>\\n<p>首先是 Kubernetes 的节点，也就是组成 Kubernetes 的一台台服务器，K8s 的节点有两类：</p>\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
