import comp from "/Users/jinyinhuacha/study/blog/arch-notes/docs/.vuepress/.temp/pages/common-design/software-testing/spring-boot-unit-testing.html.vue"
const data = JSON.parse("{\"path\":\"/common-design/software-testing/spring-boot-unit-testing.html\",\"title\":\"实践：SpringBoot 单元测试最佳实践\",\"lang\":\"en-US\",\"frontmatter\":{\"description\":\"实践：SpringBoot 单元测试最佳实践 本篇文章介绍在 SpringBoot 框架下实现单元测试的实践。 1. 测试框架 项目依赖 其集成了如下测试框架： 2. 注解说明 @SpringBootTest @ExtendWith(SpringExtension.class) @MockBean @Mock @InjectMocks @Mock @T...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://abc/arch-notes/common-design/software-testing/spring-boot-unit-testing.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"架构笔记\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"实践：SpringBoot 单元测试最佳实践\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"实践：SpringBoot 单元测试最佳实践 本篇文章介绍在 SpringBoot 框架下实现单元测试的实践。 1. 测试框架 项目依赖 其集成了如下测试框架： 2. 注解说明 @SpringBootTest @ExtendWith(SpringExtension.class) @MockBean @Mock @InjectMocks @Mock @T...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"en-US\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"实践：SpringBoot 单元测试最佳实践\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[]}\"]]},\"headers\":[{\"level\":2,\"title\":\"1. 测试框架\",\"slug\":\"_1-测试框架\",\"link\":\"#_1-测试框架\",\"children\":[]},{\"level\":2,\"title\":\"2. 注解说明\",\"slug\":\"_2-注解说明\",\"link\":\"#_2-注解说明\",\"children\":[]},{\"level\":2,\"title\":\"2. 基本的单元测试\",\"slug\":\"_2-基本的单元测试\",\"link\":\"#_2-基本的单元测试\",\"children\":[]},{\"level\":2,\"title\":\"3. SpringBoot 单元测试\",\"slug\":\"_3-springboot-单元测试\",\"link\":\"#_3-springboot-单元测试\",\"children\":[]}],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"autoDesc\":true,\"filePathRelative\":\"common-design/software-testing/spring-boot-unit-testing.md\",\"excerpt\":\"\\n<p>本篇文章介绍在 SpringBoot 框架下实现单元测试的实践。</p>\\n<h2>1. 测试框架</h2>\\n<p>项目依赖</p>\\n<div class=\\\"language-xml line-numbers-mode\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"xml\\\" data-title=\\\"xml\\\"><pre><code><span class=\\\"line\\\"><span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>dependency</span><span class=\\\"token punctuation\\\">&gt;</span></span></span>\\n<span class=\\\"line\\\">    <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>groupId</span><span class=\\\"token punctuation\\\">&gt;</span></span>org.springframework.boot<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>groupId</span><span class=\\\"token punctuation\\\">&gt;</span></span></span>\\n<span class=\\\"line\\\">    <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>artifactId</span><span class=\\\"token punctuation\\\">&gt;</span></span>spring-boot-starter-test<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>artifactId</span><span class=\\\"token punctuation\\\">&gt;</span></span></span>\\n<span class=\\\"line\\\">    <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>scope</span><span class=\\\"token punctuation\\\">&gt;</span></span>test<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>scope</span><span class=\\\"token punctuation\\\">&gt;</span></span></span>\\n<span class=\\\"line\\\"><span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>dependency</span><span class=\\\"token punctuation\\\">&gt;</span></span></span>\\n<span class=\\\"line\\\"></span></code></pre>\\n<div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\" style=\\\"counter-reset:line-number 0\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\"}")
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
