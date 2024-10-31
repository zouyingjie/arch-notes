export const themeData = JSON.parse("{\"docsDir\":\"docs\",\"docsBranch\":\"main\",\"home\":false,\"logo\":\"/images/logo-color.png\",\"lastUpdated\":\"最后更新\",\"smoothScroll\":true,\"editLinks\":true,\"editLinkText\":\"在GitHub中编辑\",\"repo\":\"https://github.com/zouyingjie/arch-notes\",\"repoLabel\":\"GitHub\",\"serviceWorker\":{\"updatePopup\":true},\"navbar\":[\"/\",{\"text\":\"关于我\",\"link\":\"https://zouyingjie.github.io\"}],\"sidebarDepth\":3,\"sidebar\":[{\"text\":\"通用设计\",\"link\":\"/common-design/\",\"collapsable\":false,\"children\":[{\"text\":\"API 设计\",\"collapsable\":false,\"path\":\"/common-design/api-design/\",\"children\":[\"/common-design/api-design/rest\",\"/common-design/api-design/webapi\",\"/common-design/api-design/swagger\"]},{\"text\":\"软件测试\",\"collapsable\":false,\"path\":\"/common-design/software-testing/\",\"children\":[\"/common-design/software-testing/unit-test\"]}]},{\"text\":\"Kubernetes\",\"link\":\"/kubernetes/\",\"collapsable\":false,\"children\":[\"/kubernetes/01.kubernetes_roadmap.md\",\"/kubernetes/02.kubernetes_pod.md\"]}],\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"editLink\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
