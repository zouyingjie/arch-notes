import comp from "/Users/jinyinhuacha/study/blog/arch-notes/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{\"description\":\"关于本书 本书是作者在日常工作中，对系统架构设计的一些思考和总结。\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://abc/arch-notes/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"架构笔记\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"关于本书 本书是作者在日常工作中，对系统架构设计的一些思考和总结。\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"en-US\"}],[\"meta\",{\"property\":\"og:updated_time\",\"content\":\"2024-10-31T09:08:49.000Z\"}],[\"meta\",{\"property\":\"article:modified_time\",\"content\":\"2024-10-31T09:08:49.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":\\\"2024-10-31T09:08:49.000Z\\\",\\\"author\\\":[]}\"]]},\"headers\":[{\"level\":2,\"title\":\"关于本书\",\"slug\":\"关于本书\",\"link\":\"#关于本书\",\"children\":[]}],\"git\":{\"updatedTime\":1730365729000,\"contributors\":[{\"name\":\"zouyingjie\",\"email\":\"yingjiezou1@gmail.com\",\"commits\":1}]},\"autoDesc\":true,\"filePathRelative\":\"README.md\"}")
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
