export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/jinyinhuacha/study/blog/arch-notes/docs/.vuepress/.temp/pages/index.html.js"), meta: {"_blog":{},"title":""} }],
  ["/SUMMARY.html", { loader: () => import(/* webpackChunkName: "SUMMARY.html" */"/Users/jinyinhuacha/study/blog/arch-notes/docs/.vuepress/.temp/pages/SUMMARY.html.js"), meta: {"_blog":{},"title":"Home"} }],
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"/Users/jinyinhuacha/study/blog/arch-notes/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"_blog":{},"title":"Home"} }],
  ["/kubernetes/01.kubernetes_roadmap.html", { loader: () => import(/* webpackChunkName: "kubernetes_01.kubernetes_roadmap.html" */"/Users/jinyinhuacha/study/blog/arch-notes/docs/.vuepress/.temp/pages/kubernetes/01.kubernetes_roadmap.html.js"), meta: {"_blog":{},"title":"Kubernetes 架构概览"} }],
  ["/kubernetes/02.kubernetes_pod.html", { loader: () => import(/* webpackChunkName: "kubernetes_02.kubernetes_pod.html" */"/Users/jinyinhuacha/study/blog/arch-notes/docs/.vuepress/.temp/pages/kubernetes/02.kubernetes_pod.html.js"), meta: {"_blog":{},"title":"Pod 那些事"} }],
  ["/common-design/api-design/rest.html", { loader: () => import(/* webpackChunkName: "common-design_api-design_rest.html" */"/Users/jinyinhuacha/study/blog/arch-notes/docs/.vuepress/.temp/pages/common-design/api-design/rest.html.js"), meta: {"_blog":{},"title":"REST API 设计最佳实践"} }],
  ["/common-design/api-design/swagger.html", { loader: () => import(/* webpackChunkName: "common-design_api-design_swagger.html" */"/Users/jinyinhuacha/study/blog/arch-notes/docs/.vuepress/.temp/pages/common-design/api-design/swagger.html.js"), meta: {"_blog":{},"title":"实践：Spring Boot 集成 Swagger"} }],
  ["/common-design/api-design/webapi.html", { loader: () => import(/* webpackChunkName: "common-design_api-design_webapi.html" */"/Users/jinyinhuacha/study/blog/arch-notes/docs/.vuepress/.temp/pages/common-design/api-design/webapi.html.js"), meta: {"_blog":{},"title":"Web API 路径设计哪家强"} }],
  ["/common-design/software-testing/spring-boot-unit-testing.html", { loader: () => import(/* webpackChunkName: "common-design_software-testing_spring-boot-unit-testing.html" */"/Users/jinyinhuacha/study/blog/arch-notes/docs/.vuepress/.temp/pages/common-design/software-testing/spring-boot-unit-testing.html.js"), meta: {"_blog":{},"title":"实践：SpringBoot 单元测试最佳实践"} }],
  ["/common-design/software-testing/unit-test.html", { loader: () => import(/* webpackChunkName: "common-design_software-testing_unit-test.html" */"/Users/jinyinhuacha/study/blog/arch-notes/docs/.vuepress/.temp/pages/common-design/software-testing/unit-test.html.js"), meta: {"_blog":{},"title":"单元测试那些事"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/jinyinhuacha/study/blog/arch-notes/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
