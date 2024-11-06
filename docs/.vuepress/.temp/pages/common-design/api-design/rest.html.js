import comp from "/Users/jinyinhuacha/study/blog/arch-notes/docs/.vuepress/.temp/pages/common-design/api-design/rest.html.vue"
const data = JSON.parse("{\"path\":\"/common-design/api-design/rest.html\",\"title\":\"REST API 设计最佳实践\",\"lang\":\"en-US\",\"frontmatter\":{\"description\":\"REST API 设计最佳实践 什么是REST API？ REST 是 Representational State Transfer 的缩写，是一种设计 Web 服务的方式。REST 是一种架构风格，而不是一种标准。REST 的核心思想是将资源（Resource）作为中心，通过 HTTP 方法（如 GET、POST、PUT、DELETE）来操作资源。...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://abc/arch-notes/common-design/api-design/rest.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"架构笔记\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"REST API 设计最佳实践\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"REST API 设计最佳实践 什么是REST API？ REST 是 Representational State Transfer 的缩写，是一种设计 Web 服务的方式。REST 是一种架构风格，而不是一种标准。REST 的核心思想是将资源（Resource）作为中心，通过 HTTP 方法（如 GET、POST、PUT、DELETE）来操作资源。...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"en-US\"}],[\"meta\",{\"property\":\"og:updated_time\",\"content\":\"2024-10-31T09:08:49.000Z\"}],[\"meta\",{\"property\":\"article:modified_time\",\"content\":\"2024-10-31T09:08:49.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"REST API 设计最佳实践\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":\\\"2024-10-31T09:08:49.000Z\\\",\\\"author\\\":[]}\"]]},\"headers\":[{\"level\":3,\"title\":\"REST API 设计原则\",\"slug\":\"rest-api-设计原则\",\"link\":\"#rest-api-设计原则\",\"children\":[]},{\"level\":3,\"title\":\"REST 成熟度模型\",\"slug\":\"rest-成熟度模型\",\"link\":\"#rest-成熟度模型\",\"children\":[]}],\"git\":{\"updatedTime\":1730365729000,\"contributors\":[{\"name\":\"zouyingjie\",\"email\":\"yingjiezou1@gmail.com\",\"commits\":1}]},\"autoDesc\":true,\"filePathRelative\":\"common-design/api-design/rest.md\",\"excerpt\":\"\\n<p>什么是REST API？</p>\\n<p>REST 是 Representational State Transfer 的缩写，是一种设计 Web 服务的方式。REST 是一种架构风格，而不是一种标准。REST 的核心思想是将资源（Resource）作为中心，通过 HTTP 方法（如 GET、POST、PUT、DELETE）来操作资源。</p>\\n<h3>REST API 设计原则</h3>\\n<ul>\\n<li>资源（Resource）：REST API 的核心是资源。资源是 API 操作的对象，可以是任何可以被识别和操作的对象，如用户、订单、商品等。</li>\\n<li>统一接口（Uniform Interface）：REST API 使用统一的接口来操作资源。接口包括 HTTP 方法、URI、请求头、请求体等。</li>\\n<li>无状态（Stateless）：REST API 是无状态的。客户端和服务器之间不需要维护会话状态。</li>\\n<li>可缓存（Cacheable）：REST API 支持缓存。客户端和服务器之间可以通过缓存来提高性能。</li>\\n<li>分层系统（Layered System）：REST API 可以由分层系统来实现。分层系统包括客户端、代理、服务器等。</li>\\n<li>按需编码（Code on Demand）：REST API 支持按需编码。服务器可以根据客户端的需求来动态生成数据。</li>\\n<li>客户端-服务器（Client-Server）：REST API 是客户端-服务器架构。客户端和服务器之间是松耦合的。</li>\\n</ul>\"}")
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
