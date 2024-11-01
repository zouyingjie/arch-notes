import comp from "/Users/jinyinhuacha/study/blog/arch-notes/docs/.vuepress/.temp/pages/kubernetes/02.kubernetes_pod.html.vue"
const data = JSON.parse("{\"path\":\"/kubernetes/02.kubernetes_pod.html\",\"title\":\"Pod 那些事\",\"lang\":\"zh-CN\",\"frontmatter\":{\"lang\":\"zh-CN\",\"title\":\"Pod 那些事\",\"description\":\"Pod 是 Kubernetes 中最重要的概念之一\",\"tags\":[\"Kubernetes\"],\"categories\":[\"Kubernetes\"],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://abc/arch-notes/kubernetes/02.kubernetes_pod.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"架构笔记\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Pod 那些事\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Pod 是 Kubernetes 中最重要的概念之一\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:image\",\"content\":\"https://i-blog.csdnimg.cn/blog_migrate/82d9d8913e5e92de88d805c680a6d988.png\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"og:updated_time\",\"content\":\"2024-10-31T09:08:49.000Z\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Kubernetes\"}],[\"meta\",{\"property\":\"article:modified_time\",\"content\":\"2024-10-31T09:08:49.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Pod 那些事\\\",\\\"image\\\":[\\\"https://i-blog.csdnimg.cn/blog_migrate/82d9d8913e5e92de88d805c680a6d988.png\\\",\\\"https://i-blog.csdnimg.cn/blog_migrate/04a5fe6db3a970db0b06c30fddaa2295.png\\\",\\\"https://i-blog.csdnimg.cn/blog_migrate/c5a702137aef212ed22ea7b0a71169ad.png\\\",\\\"https://i-blog.csdnimg.cn/blog_migrate/c093e21480708a1c7c7fdab68392d94a.png\\\",\\\"https://i-blog.csdnimg.cn/blog_migrate/2b19f13682624963a87c61b4b280abd5.png\\\",\\\"https://i-blog.csdnimg.cn/blog_migrate/fd49c26fe3f8be73e9f9d5a8a2188aa6.png\\\",\\\"https://i-blog.csdnimg.cn/blog_migrate/104379ccb608e1fae1dcbe59054aad91.png\\\",\\\"https://i-blog.csdnimg.cn/blog_migrate/c1cf81e9997b195ba4d98e547217bcb5.png\\\"],\\\"dateModified\\\":\\\"2024-10-31T09:08:49.000Z\\\",\\\"author\\\":[]}\"]]},\"headers\":[{\"level\":3,\"title\":\"1. 为什么需要 Pod\",\"slug\":\"_1-为什么需要-pod\",\"link\":\"#_1-为什么需要-pod\",\"children\":[]},{\"level\":3,\"title\":\"2. Pod 状态\",\"slug\":\"_2-pod-状态\",\"link\":\"#_2-pod-状态\",\"children\":[]},{\"level\":3,\"title\":\"3.  Pod Probe\",\"slug\":\"_3-pod-probe\",\"link\":\"#_3-pod-probe\",\"children\":[]},{\"level\":3,\"title\":\"4. Init container\",\"slug\":\"_4-init-container\",\"link\":\"#_4-init-container\",\"children\":[]},{\"level\":3,\"title\":\"5. PodPreset\",\"slug\":\"_5-podpreset\",\"link\":\"#_5-podpreset\",\"children\":[]},{\"level\":3,\"title\":\"6. Disruption\",\"slug\":\"_6-disruption\",\"link\":\"#_6-disruption\",\"children\":[]},{\"level\":3,\"title\":\"7. 临时容器（Ephemeral Containers）\",\"slug\":\"_7-临时容器-ephemeral-containers\",\"link\":\"#_7-临时容器-ephemeral-containers\",\"children\":[]},{\"level\":3,\"title\":\"8. Pod Cmd & Args\",\"slug\":\"_8-pod-cmd-args\",\"link\":\"#_8-pod-cmd-args\",\"children\":[]},{\"level\":3,\"title\":\"9. Pod 的启动与终止\",\"slug\":\"_9-pod-的启动与终止\",\"link\":\"#_9-pod-的启动与终止\",\"children\":[]},{\"level\":3,\"title\":\"10. Pod 容器设计模式\",\"slug\":\"_10-pod-容器设计模式\",\"link\":\"#_10-pod-容器设计模式\",\"children\":[]}],\"git\":{\"updatedTime\":1730365729000,\"contributors\":[{\"name\":\"zouyingjie\",\"email\":\"yingjiezou1@gmail.com\",\"commits\":1}]},\"filePathRelative\":\"kubernetes/02.kubernetes_pod.md\",\"excerpt\":\"<h3>1. 为什么需要 Pod</h3>\\n<p>Pods 是 K8s 中最小的可部署和管理单元，是一个逻辑概念。一个 Pod 包含一个或多个 container，它们可以<strong>共享网络和存储</strong>，可以把 Pod 看作是一个虚拟的逻辑主机，里面包含了一个或多个紧密关联的 container，Pod 同时也告知系统如何去运行它所描述的容器。</p>\\n<p>Pod 的存在主要是为了解决两个问题：</p>\\n<ul>\\n<li>对“进程组”的抽象，满足容器共享 namespace 的需求。</li>\\n<li>协同调度</li>\\n</ul>\\n<p>容器本身是单进程模型，其应用本身的 PID 为 1，本身没有管理多个进程的能力。在实际应用中，往往存在着需要「超亲密关系」的进程，它们必须要运行在同一机器上共享存储、网络等，而 Pod 其实就是一组共享了网络、存储、IPC、UTS 以及时间的的容器，它们只有 PID 和文件 namespace 是默认隔离的，可以满足这种超亲密关系的要求。</p>\"}")
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
