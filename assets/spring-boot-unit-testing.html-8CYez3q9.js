import{_ as t,c as s,b as a,o as e}from"./app-D-gFUe8_.js";const p={};function i(o,n){return e(),s("div",null,n[0]||(n[0]=[a(`<h1 id="实践-springboot-单元测试最佳实践" tabindex="-1">实践：SpringBoot 单元测试最佳实践</h1><p>本篇文章介绍在 SpringBoot 框架下实现单元测试的实践。</p><h2 id="_1-测试框架" tabindex="-1">1. 测试框架</h2><p>项目依赖</p><div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml" data-title="xml"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">&gt;</span></span>test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其集成了如下测试框架：</p><table><thead><tr><th>测试框架</th><th>说明</th></tr></thead><tbody><tr><td>JUnit5</td><td>Java中最流行和最常用的单元测试框架，提供了一套注解和断言来编写和运行单元测试。</td></tr><tr><td>SpringTest &amp; SpringBootTest</td><td>基于 Spring 的测试框架，可以为测试用例配置、管理 Spring上下文 和 Bean。</td></tr><tr><td>Mockito</td><td>Java中最流行和最强大的Mock对象库，它可以模拟复杂的真实对象行为，从而简化测试过程。</td></tr><tr><td>AssertJ</td><td>一个流式断言库，提供了更简洁和易读的断言语法，使测试代码更易写、易读、易维护。</td></tr><tr><td>Hamcrest</td><td>一个匹配器库，提供了更简洁和易读的匹配器语法，使测试代码更易写、易读、易维护。</td></tr><tr><td>jsonassert</td><td>一个JSON断言库，提供了更简洁和易读的JSON断言语法，使测试代码更易写、易读、易维护。</td></tr><tr><td>JsonPath</td><td>一个JSON路径库，提供了更简洁和易读的JSON路径语法，使测试代码更易写、易读、易维护。</td></tr></tbody></table><h2 id="_2-注解说明" tabindex="-1">2. 注解说明</h2><ul><li>@SpringBootTest</li><li>@ExtendWith(SpringExtension.class)</li><li>@MockBean</li><li>@Mock</li><li>@InjectMocks</li><li>@Mock</li><li>@Test</li><li>@BeforeEach</li><li>@AfterEach</li><li>@BeforeAll</li><li>@AfterAll</li><li>@Disabled</li><li>@DisplayName</li><li>@Timeout</li><li>@RepeatedTest</li><li>@ParameterizedTest</li><li>@CsvSource</li><li>@ValueSource</li><li>@ExtendWith</li><li>@Mock</li><li>@MockBean</li><li>@InjectMocks</li><li>@Mock</li><li>@Spy</li><li>@Captor</li><li>@MockedBean</li><li>@MockedStatic</li><li>@ExtendWith</li></ul><h2 id="_2-基本的单元测试" tabindex="-1">2. 基本的单元测试</h2><p>如果一个类或者方法没有依赖 Spring 或者其他组件，比如一个简单的工具类那么可以使用JUnit5的@Test注解来测试。</p><p>下面是一个测试日期工具类的示例：</p><p>当然，即使是一个 Service 类，如果它没有依赖 Spring 或者其他组件，那么也可以使用JUnit5的@Test注解来测试。</p><p>\`\`</p><h2 id="_3-springboot-单元测试" tabindex="-1">3. SpringBoot 单元测试</h2>`,15)]))}const c=t(p,[["render",i],["__file","spring-boot-unit-testing.html.vue"]]),r=JSON.parse('{"path":"/common-design/software-testing/spring-boot-unit-testing.html","title":"实践：SpringBoot 单元测试最佳实践","lang":"en-US","frontmatter":{"description":"实践：SpringBoot 单元测试最佳实践 本篇文章介绍在 SpringBoot 框架下实现单元测试的实践。 1. 测试框架 项目依赖 其集成了如下测试框架： 2. 注解说明 @SpringBootTest @ExtendWith(SpringExtension.class) @MockBean @Mock @InjectMocks @Mock @T...","head":[["meta",{"property":"og:url","content":"https://abc/common-design/software-testing/spring-boot-unit-testing.html"}],["meta",{"property":"og:site_name","content":"架构笔记"}],["meta",{"property":"og:title","content":"实践：SpringBoot 单元测试最佳实践"}],["meta",{"property":"og:description","content":"实践：SpringBoot 单元测试最佳实践 本篇文章介绍在 SpringBoot 框架下实现单元测试的实践。 1. 测试框架 项目依赖 其集成了如下测试框架： 2. 注解说明 @SpringBootTest @ExtendWith(SpringExtension.class) @MockBean @Mock @InjectMocks @Mock @T..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-06T09:57:25.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-06T09:57:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"实践：SpringBoot 单元测试最佳实践\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-06T09:57:25.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"1. 测试框架","slug":"_1-测试框架","link":"#_1-测试框架","children":[]},{"level":2,"title":"2. 注解说明","slug":"_2-注解说明","link":"#_2-注解说明","children":[]},{"level":2,"title":"2. 基本的单元测试","slug":"_2-基本的单元测试","link":"#_2-基本的单元测试","children":[]},{"level":2,"title":"3. SpringBoot 单元测试","slug":"_3-springboot-单元测试","link":"#_3-springboot-单元测试","children":[]}],"git":{"updatedTime":1730887045000,"contributors":[{"name":"zouyingjie","email":"yingjiezou1@gmail.com","commits":1,"url":"https://github.com/zouyingjie"}]},"autoDesc":true,"filePathRelative":"common-design/software-testing/spring-boot-unit-testing.md","excerpt":"\\n<p>本篇文章介绍在 SpringBoot 框架下实现单元测试的实践。</p>\\n<h2>1. 测试框架</h2>\\n<p>项目依赖</p>\\n<div class=\\"language-xml line-numbers-mode\\" data-highlighter=\\"prismjs\\" data-ext=\\"xml\\" data-title=\\"xml\\"><pre><code><span class=\\"line\\"><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>dependency</span><span class=\\"token punctuation\\">&gt;</span></span></span>\\n<span class=\\"line\\">    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>groupId</span><span class=\\"token punctuation\\">&gt;</span></span>org.springframework.boot<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>groupId</span><span class=\\"token punctuation\\">&gt;</span></span></span>\\n<span class=\\"line\\">    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>artifactId</span><span class=\\"token punctuation\\">&gt;</span></span>spring-boot-starter-test<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>artifactId</span><span class=\\"token punctuation\\">&gt;</span></span></span>\\n<span class=\\"line\\">    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>scope</span><span class=\\"token punctuation\\">&gt;</span></span>test<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>scope</span><span class=\\"token punctuation\\">&gt;</span></span></span>\\n<span class=\\"line\\"><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>dependency</span><span class=\\"token punctuation\\">&gt;</span></span></span>\\n<span class=\\"line\\"></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{c as comp,r as data};