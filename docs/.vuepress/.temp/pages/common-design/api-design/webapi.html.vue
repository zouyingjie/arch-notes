<template><div><h1 id="web-api-路径设计哪家强" tabindex="-1">Web API 路径设计哪家强</h1>
<p>本文档主要比较一下各家API的URL路径设计，通过学习各家API的URL路径设计，可以更好的理解REST API的设计。</p>
<h2 id="google" tabindex="-1">Google</h2>
<ul>
<li>API 文档地址：<a href="https://developers.google.com/apis-explorer/#p/" target="_blank" rel="noopener noreferrer">https://developers.google.com/apis-explorer/#p/</a></li>
</ul>
<h3 id="youtube-data-api" tabindex="-1">YouTube Data API</h3>
<ul>
<li>API 文档地址：<a href="https://developers.google.com/apis-explorer/#p/youtube/v3/" target="_blank" rel="noopener noreferrer">YouTube Data API</a></li>
<li>API 前缀：<code v-pre>https://www.googleapis.com/youtube/v3</code></li>
</ul>
<p><strong>播放列表 API</strong></p>
<ul>
<li>创建播放列表：<code v-pre>POST /playlists</code></li>
<li>查询播放列表集合：<code v-pre>GET /playlists</code></li>
<li>更新播放列表：<code v-pre>PUT /playlists</code></li>
<li>删除播放列表：<code v-pre>DELETE /playlists</code></li>
</ul>
<p><strong>视频 API</strong></p>
<ul>
<li>上传视频：<code v-pre>POST /videos</code></li>
<li>查询列表：<code v-pre>GET /videos</code></li>
<li>更新视频信息：<code v-pre>PUT /videos</code></li>
<li>删除视频：<code v-pre>DELETE /videos</code></li>
<li>为视频评分：<code v-pre>POST /videos/rate</code></li>
<li>获取视频评分：<code v-pre>GET /videos/getRating</code></li>
</ul>
<h3 id="calendar-api" tabindex="-1">Calendar API</h3>
<ul>
<li>API 文档地址：<a href="https://developers.google.com/apis-explorer/#p/calendar/v3/" target="_blank" rel="noopener noreferrer">Calendar API</a></li>
<li>API 前缀：<code v-pre>https://www.googleapis.com/calendar/v3</code></li>
</ul>
<p><strong>日历 API</strong></p>
<ul>
<li>创建辅助日历：<code v-pre>POST /calendars</code></li>
<li>查询日历：<code v-pre>GET /calendars/{calendarId}</code></li>
<li>更新/补丁日历：<code v-pre>PUT/PATCH /calendars/{calendarId}</code></li>
<li>删除服务日历：<code v-pre>DELETE /calendars/{calendarId}</code></li>
<li>清除主日历：<code v-pre>POST /calendars/calendarId/clear</code></li>
</ul>
<p><strong>事件 API</strong></p>
<ul>
<li>创建事件：<code v-pre>POST /calendars/calendarId/events</code></li>
<li>查询日历中的事件：<code v-pre>GET /calendars/calendarId/events</code></li>
<li>查询单个事件：<code v-pre>GET /calendars/calendarId/events/eventId</code></li>
<li>更新事件：``PUT /calendars/calendarId/events/eventId`</li>
<li>删除事件：<code v-pre>DELETE /calendars/calendarId/events/eventId</code></li>
<li>移动事件：<code v-pre>POST  /calendars/calendarId/events/eventId/move</code></li>
</ul>
<h3 id="gmail-api" tabindex="-1">Gmail API</h3>
<ul>
<li>API 文档地址：<a href="https://developers.google.com/apis-explorer/#p/gmail/v1/" target="_blank" rel="noopener noreferrer">Gmail API</a></li>
<li>API 前缀：<code v-pre>https://gmail.googleapis.com</code></li>
</ul>
<p><strong>标签 API</strong></p>
<ul>
<li>创建标签：<code v-pre>POST /gmail/v1/users/{userId}/labels</code></li>
<li>查询标签列表：<code v-pre>GET /gmail/v1/users/{userId}/labels</code></li>
<li>获取指定标签：<code v-pre>GET /gmail/v1/users/{userId}/labels/{id}</code></li>
<li>更新标签：<code v-pre>PUT /gmail/v1/users/{userId}/labels/{id}</code></li>
<li>删除标签：<code v-pre>DELETE /gmail/v1/users/{userId}/labels/{id}</code></li>
</ul>
<p><strong>消息 API</strong></p>
<ul>
<li>发送消息：<code v-pre>POST /gmail/v1/users/{userId}/messages/send</code></li>
<li>查询消息列表：<code v-pre>GET /gmail/v1/users/{userId}/messages</code></li>
<li>获取指定消息：<code v-pre>GET /gmail/v1/users/{userId}/messages/{id}</code></li>
<li>删除消息：<code v-pre>DELETE /gmail/v1/users/{userId}/messages/{id}</code></li>
<li>修改邮件标签：<code v-pre>POST /gmail/v1/users/{userId}/messages/{id}/modify</code></li>
<li>批量修改邮件标签：<code v-pre>POST /gmail/v1/users/{userId}/messages/batchModify</code></li>
<li>批量删除邮件：<code v-pre>POST /gmail/v1/users/{userId}/messages/batchDelete</code></li>
</ul>
<p>批量修改和批量删除的操作 API 是 <code v-pre>POST</code> 方法，略违和。</p>
<h3 id="观察结果" tabindex="-1">观察结果</h3>
<ol>
<li>
<p>结构基本为：<code v-pre>/ product_line / version / {namespace} / resource / {resourceId} / action</code></p>
<ul>
<li>product_line：产品线，区分不同产品，比如 gmail、calendar、adsense</li>
<li>version：版本，区分不同版本，比如 v1、v2</li>
<li>namespace：命名空间（可选）。可以用来帮助组织区分 API，做不同的访问控制等处理。</li>
<li>resource：资源，比如 gmail 下的 messages、labels，使用名词。</li>
<li>resourceId：资源ID（可选），比如 gmail 下的 messageId</li>
<li>action：动作，对资源进行的操作， 使用动词。</li>
</ul>
</li>
<li>
<p>基本使用同一个域名 <code v-pre>www.googleapis.com</code>，当然也有例外，比如 Gmail API 使用 <code v-pre>https://gmail.googleapis.com</code>。</p>
</li>
<li>
<p>使用名词表示资源，命名使用复数。</p>
</li>
<li>
<p>使用动词或者动词短语表示操作（action）。</p>
</li>
<li>
<p>对于多个单词的标识符使用驼峰命名。</p>
</li>
<li>
<p>YouTube API 和 Calendar API 对 resourceId 的传参处理不一样。YouTube API 是放在 URL query 或者 body中，而 Calendar API 是放在 URL path 中。（PS：我个人工作中更多的使用 Calendar API 的这种处理方式）</p>
</li>
</ol>
<h2 id="paypal" tabindex="-1">PayPal</h2>
<ul>
<li>API 文档地址：<a href="https://developer.paypal.com/docs/api/" target="_blank" rel="noopener noreferrer">PayPal API</a></li>
<li>API 前缀：<code v-pre>https://api.paypal.com</code></li>
</ul>
<p><strong>API 示例</strong></p>
<ul>
<li>
<p>查询授权：<code v-pre>GET /v2/payments/authorizations/{authorization_id}</code></p>
</li>
<li>
<p>创建订单：<code v-pre>POST /v2/checkout/orders</code></p>
</li>
<li>
<p>更新订单：<code v-pre>PATCH /v2/checkout/orders/{order_id}</code></p>
</li>
<li>
<p>查询订单：<code v-pre>GET /v2/checkout/orders/{order_id}</code></p>
</li>
<li>
<p>创建发票：<code v-pre>POST /v2/invoicing/invoices</code></p>
</li>
<li>
<p>发送发票：<code v-pre>POST /v2/invoicing/invoices/{invoice_id}/send</code></p>
</li>
<li>
<p>查询发票列表：<code v-pre>GET /v2/invoicing/invoices</code></p>
</li>
<li>
<p>查询发票：<code v-pre>GET /v2/invoicing/invoices/{invoice_id}</code></p>
</li>
<li>
<p>删除发票：<code v-pre>DELETE /v2/invoicing/invoices/{invoice_id}</code></p>
</li>
<li>
<p>删除外部支付：<code v-pre>DELETE /v2/invoicing/invoices/{invoice_id}/payments/{transaction_id}</code></p>
</li>
<li>
<p>生成二维码：<code v-pre>POST /v2/invoicing/invoices/{invoice_id}/generate-qr-code</code></p>
</li>
</ul>
<h3 id="观察结果-1" tabindex="-1">观察结果</h3>
<ul>
<li>域名： 生产 <code v-pre>https://api.paypal.com</code>；沙盒 <code v-pre>https://api-m.sandbox.paypal.com</code></li>
<li>结构：<code v-pre>/ version / namespace / resource / {resourceId} / action</code></li>
<li>PayPal API 的结构相对比较干净统一</li>
<li>资源命名使用复数</li>
<li>使用动词或者动词短语表示操作（action）</li>
<li>使用中划线 <code v-pre>-</code> 作为分隔符</li>
</ul>
<h2 id="aws" tabindex="-1">AWS</h2>
<ul>
<li>API 文档地址：<a href="https://docs.aws.amazon.com/" target="_blank" rel="noopener noreferrer">AWS API</a></li>
</ul>
<p>关于域名，AWS使用了一种完全不一样的方案。不同的产品线和不同的地区（region）会有不一样的域名。</p>
<p><strong>S3 域名</strong></p>
<p>参考文档：<a href="https://docs.aws.amazon.com/general/latest/gr/s3.html" target="_blank" rel="noopener noreferrer">S3 域名</a></p>
<ul>
<li>美国东部 (弗吉尼亚北部)：<code v-pre>s3.us-east-1.amazonaws.com</code></li>
<li>亚太区域 (香港)：<code v-pre>s3.ap-east-1.amazonaws.com</code></li>
<li>亚太区域 (东京)：<code v-pre>s3.ap-northeast-1.amazonaws.com</code></li>
</ul>
<p><strong>EC2 域名</strong></p>
<p>参考文档：<a href="https://docs.aws.amazon.com/general/latest/gr/ec2-service.html" target="_blank" rel="noopener noreferrer">EC2 域名</a></p>
<ul>
<li>美国东部 (弗吉尼亚北部)：<code v-pre>ec2.us-east-1.amazonaws.com</code></li>
<li>亚太区域 (香港)：<code v-pre>ec2.ap-east-1.amazonaws.com</code></li>
</ul>
<p>基本上来说，格式是：<code v-pre>product_name.regions_name.amazonaws.com/?Action=Function</code></p>
<p><strong>API 示例</strong></p>
<ul>
<li>查询实例：<code v-pre> /ec2.us-east-1.amazonaws.com/?Action=DescribeInstances</code></li>
<li>启动实例：<code v-pre>https://ec2.amazonaws.com/?Action=StartInstances</code></li>
<li>创建 VPC：<code v-pre> /ec2.us-east-1.amazonaws.com/?Action=CreateVpc</code></li>
<li>创建 Volume：<code v-pre> /ec2.us-east-1.amazonaws.com/?Action=CreateVolume</code></li>
</ul>
<h2 id="github" tabindex="-1">Github</h2>
<ul>
<li>API 文档地址：<a href="https://developer.github.com/v3/" target="_blank" rel="noopener noreferrer">Github API</a></li>
<li>API 域名：<code v-pre>https://api.github.com</code></li>
</ul>
<p><strong>API 示例</strong></p>
<ul>
<li>取所有 repo：<code v-pre>GET /orgs/{org}/repos</code></li>
<li>取特定用户名的repo：<code v-pre>/repos/{owner}/{repo}</code></li>
<li>取某个仓库所有的PR：<code v-pre>GET /repos/{owner}/{repo}/pulls</code></li>
<li>创建 PR：<code v-pre>POST /repos/{owner}/{repo}/pulls</code></li>
<li>查询 PR：<code v-pre>GET /repos/{owner}/{repo}/pulls/{pull_number}</code></li>
<li>更新 PR：<code v-pre>PATCH /repos/{owner}/{repo}/pulls/{pull_number}</code></li>
<li>Merge PR：<code v-pre>PUT /repos/{owner}/{repo}/pulls/{pull_number}/merge</code></li>
<li>取自己的issue：<code v-pre>GET /user/issues</code></li>
<li>取某个repo下的issue：<code v-pre>GET /repos/{owner}/{repo}/issues</code></li>
<li>取用户：<code v-pre>GET /users/{username}</code></li>
<li>取组织下的所有的项目：<code v-pre>GET /orgs/{org}/projects</code></li>
</ul>
<h3 id="观察结果-2" tabindex="-1">观察结果</h3>
<ol>
<li>结构：<code v-pre>/resource/ {id} / resource</code></li>
<li>Github的API没有版本号，也没有namespace，直接就是 resource 开头。</li>
<li>URL 就是在不同的 resource 下进行组合和 join。</li>
</ol>
<h2 id="dropbox" tabindex="-1">Dropbox</h2>
<ul>
<li>API 文档地址：<a href="https://www.dropbox.com/developers/documentation/http/overview" target="_blank" rel="noopener noreferrer">Dropbox API</a></li>
<li>API 域名：<code v-pre>https://api.dropboxapi.com</code></li>
</ul>
<p><strong>API 示例</strong></p>
<ul>
<li>
<p><code v-pre>POST /2/file_properties/templates/add_for_user</code></p>
</li>
<li>
<p><code v-pre>POST /2/file_properties/templates/get_for_user</code></p>
</li>
<li>
<p><code v-pre>POST /2/file_properties/templates/remove_for_user</code></p>
</li>
<li>
<p><code v-pre>POST /2/file_properties/templates/update_for_user</code></p>
</li>
<li>
<p><code v-pre>POST /2/file_requests/create</code></p>
</li>
<li>
<p><code v-pre>POST /2/files/create_folder_v2</code></p>
</li>
<li>
<p><code v-pre>POST /2/users/get_account_batch</code></p>
</li>
<li>
<p><code v-pre>POST /2/paper/docs/list</code></p>
</li>
</ul>
<h3 id="观察结果-3" tabindex="-1">观察结果</h3>
<ol>
<li>
<p>结构：<code v-pre>/version / resource / actions</code></p>
</li>
<li>
<p>Dropbox 的 API 是在resource 上建各种函数。除了有个总版本，函数上还可以有版本，比如 <code v-pre>/2/files/create_folder_v2</code>。</p>
</li>
<li>
<p><strong>请求方法 POST 一把梭！</strong></p>
</li>
<li>
<p>对于多个单词的 action，使用了下划线 <code v-pre>_</code> 作为分隔符。关于下划线，在最初的 RFC1738 中规定不合法，但是，RFC1738 被 RFC2396更新了，RFC 2396 允许使用下划线为“unreserved character”，而2015年的时候 RFC 3986（URI现代标准） 更新了 RFC 2396，继续将下划线归类为非保留字符，可以在以下组件中可以直接使用：</p>
</li>
</ol>
<ul>
<li>path</li>
<li>query</li>
<li>fragment</li>
</ul>
<p>以下是 <a href="https://datatracker.ietf.org/doc/html/rfc3986#section-2.3" target="_blank" rel="noopener noreferrer">RFC 3986</a> 中的相关描述：</p>
<blockquote>
<p>Characters that are allowed in a URI but do not have a reserved
purpose are called unreserved.  These include uppercase and lowercase
letters, decimal digits, hyphen, period, underscore, and tilde.</p>
<p>unreserved  = ALPHA / DIGIT / &quot;-&quot; / &quot;.&quot; / &quot;_&quot; / &quot;~&quot;</p>
</blockquote>
<h2 id="twitter" tabindex="-1">Twitter</h2>
<ul>
<li>API 文档地址：<a href="https://developer.twitter.com/en/docs/api-reference-index" target="_blank" rel="noopener noreferrer">Twitter API</a></li>
<li>API 域名：api.twitter.com/(普通api)  ads-api.twitter.com(广告用)</li>
</ul>
<p><strong>API 示例</strong></p>
<ul>
<li>
<p>获取粉丝列表：<code v-pre>GET /2/users/:id/followers</code></p>
</li>
<li>
<p>获取正在关注列表：<code v-pre>GET /2/users/:id/following</code></p>
</li>
<li>
<p>关注用户：<code v-pre>POST /2/users/:id/following</code></p>
</li>
<li>
<p>取消关注：<code v-pre>DELETE /2/users/:source_user_id/following/:target_user_id</code></p>
</li>
<li>
<p>获取用户列表：<code v-pre>GET /2/users/:id/list_memberships</code></p>
</li>
<li>
<p>更新列表：<code v-pre>PUT /2/lists/:id</code></p>
</li>
<li>
<p>创建列表：<code v-pre>POST /2/lists</code></p>
</li>
<li>
<p>删除列表：<code v-pre>DELETE /2/lists/:id</code></p>
</li>
</ul>
<h3 id="观察结果-4" tabindex="-1">观察结果</h3>
<ol>
<li>结构：<code v-pre>/version / resource /action</code>。</li>
<li>Twitter 的 API 结构也很标准，版本号放在最前面。</li>
<li>对于 resource 的命名用复数</li>
<li>使用下划线 <code v-pre>_</code> 作为分隔符</li>
</ol>
<h2 id="stripe" tabindex="-1">Stripe</h2>
<ul>
<li>API 文档地址：<a href="https://stripe.com/docs/api" target="_blank" rel="noopener noreferrer">Stripe API</a></li>
<li>API 域名：<code v-pre>https://api.stripe.com</code></li>
</ul>
<p><strong>API 示例</strong></p>
<ul>
<li>
<p>获取余额：<code v-pre>GET /v1/balance</code></p>
</li>
<li>
<p>获取余额交易列表：<code v-pre>GET /v1/balance_transactions</code></p>
</li>
<li>
<p>获取余额交易：<code v-pre>GET /v1/balance_transactions/:id</code></p>
</li>
<li>
<p>创建客户：<code v-pre>POST /v1/customers</code></p>
</li>
<li>
<p>获取客户列表：<code v-pre>GET /v1/customers</code></p>
</li>
<li>
<p>更新客户：<code v-pre>POST /v1/customers/:id</code></p>
</li>
<li>
<p>获取客户详情：<code v-pre>GET /v1/customers/:id</code></p>
</li>
<li>
<p>删除客户：<code v-pre>DELETE /v1/customers/:id</code></p>
</li>
<li>
<p>搜索客户：<code v-pre>GET /v1/customers/search</code></p>
</li>
<li>
<p>创建支付方式：<code v-pre>POST /v1/payment_methods</code></p>
</li>
<li>
<p>获取支付方式详情：<code v-pre>GET /v1/payment_methods/:id</code></p>
</li>
<li>
<p>获取客户支付方式：<code v-pre>GET /v1/customers/:id/payment_methods/:id</code></p>
</li>
<li>
<p>创建支付意图：<code v-pre>POST /v1/payment_intents</code></p>
</li>
<li>
<p>获取支付意图详情：<code v-pre>GET /v1/payment_intents/:id</code></p>
</li>
</ul>
<h3 id="观察结果-5" tabindex="-1">观察结果</h3>
<ul>
<li>结构：<code v-pre>/version/resource/id/action</code></li>
<li>其更新操作用了 <code v-pre>POST</code> 而不是 <code v-pre>PUT 方法</code></li>
<li>对于子资源的区分，使用下划线 <code v-pre>_</code> 作为分隔符。(PS：感觉使用 namespace + subresource 的形式区分子资源会更好一些，即 <code v-pre>GET /v1/payment/methods/:id</code>， <code v-pre>GET /v1/payment/intents</code> 这样。)</li>
<li>所有 POST 请求，通过 <code v-pre>Idempotency-Key</code> 请求头来实现幂等。</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">curl</span> https://api.stripe.com/v1/customers <span class="token punctuation">\</span></span>
<span class="line">  <span class="token parameter variable">-u</span> sk_test_Ou1w6LVt3zmVipDVJsvMeQsc: <span class="token punctuation">\</span></span>
<span class="line">  <span class="token parameter variable">-H</span> <span class="token string">"Idempotency-Key: KG5LxwFBepaKHyUD"</span> <span class="token punctuation">\</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="trello" tabindex="-1">Trello</h2>
<ul>
<li>API 文档地址：<a href="https://developer.atlassian.com/cloud/trello/rest/" target="_blank" rel="noopener noreferrer">Trello API</a></li>
<li>API 域名：<code v-pre>https://api.trello.com</code></li>
</ul>
<p><strong>API 示例</strong></p>
<ul>
<li>
<p>获取 Action详情：<code v-pre>GET /1/actions/{id}</code></p>
</li>
<li>
<p>获取 Action 卡片：<code v-pre>GET /1/actions/{id}/card</code></p>
</li>
<li>
<p>获取 Action 看板：<code v-pre>GET /1/actions/{id}/board</code></p>
</li>
<li>
<p>更新 Action 文本：<code v-pre>PUT /1/actions/{id}/text</code></p>
</li>
<li>
<p>创建 Action 的回应：<code v-pre>POST /1/actions/{idAction}/reactions</code></p>
</li>
<li>
<p>获取 Action 的回应：<code v-pre>GET /1/actions/{idAction}/reactions/{id}</code></p>
</li>
<li>
<p>删除 Action 的回应：<code v-pre>DELETE /1/actions/{idAction}/reactions/{id}</code></p>
</li>
<li>
<p>创建卡片：<code v-pre>POST /1/cards</code></p>
</li>
<li>
<p>获取卡片详情：<code v-pre>GET /1/cards/{id}</code></p>
</li>
<li>
<p>更新卡片：<code v-pre>PUT /1/cards/{id}</code></p>
</li>
<li>
<p>删除卡片：<code v-pre>DEL /1/cards/{id}</code></p>
</li>
<li>
<p>获取卡片特定属性：<code v-pre>GET /1/cards/{id}/{field}</code></p>
</li>
<li>
<p>获取卡片附件：<code v-pre>GET /1/cards/{id}/attachments</code></p>
</li>
<li>
<p>创建卡片附件：<code v-pre>POST /1/cards/{id}/attachments</code></p>
</li>
<li>
<p>获取卡片附件：<code v-pre>GET /1/cards/{id}/attachments/{idAttachment}</code></p>
</li>
<li>
<p>删除卡片附件：<code v-pre>DEL /1/cards/{id}/attachments/{idAttachment}</code></p>
</li>
</ul>
<h3 id="观察结果-6" tabindex="-1">观察结果</h3>
<ol>
<li>结构：<code v-pre>/version/resource/{id}/subResource/{subId}</code></li>
<li>非常标准的 Restful API 实现，中规中矩，<strong>I like it ！</strong></li>
</ol>
<h2 id="tencent" tabindex="-1">Tencent</h2>
<h3 id="微信公众号" tabindex="-1">微信公众号</h3>
<ul>
<li>API 文档地址：<a href="https://developers.weixin.qq.com/doc/offiaccount/Getting_Started/Overview.html" target="_blank" rel="noopener noreferrer">微信公众号 API</a></li>
<li>域名：
<ul>
<li>主域名：<code v-pre>api.weixin.qq.com</code></li>
<li>灾备域名：<code v-pre>api2.weixin.qq.com</code></li>
</ul>
</li>
<li>区域域名：<code v-pre>sh.api.weixin.qq.com</code>, <code v-pre>sz.api.weixin.qq.com</code>, <code v-pre>hk.api.weixin.qq.com</code></li>
</ul>
<p><strong>API 示例</strong></p>
<ul>
<li>
<p>获取用户列表：<code v-pre>GET /cgi-bin/user/get</code></p>
</li>
<li>
<p>获取用户信息：<code v-pre>GET /cgi-bin/user/info</code></p>
</li>
<li>
<p>设置用户备注：<code v-pre>POST /cgi-bin/user/info/updateremark</code></p>
</li>
<li>
<p>查询卡劵：<code v-pre>POST /cgi-bin/card/code/get</code></p>
</li>
<li>
<p>核销卡劵：<code v-pre>POST /cgi-bin/card/code/consume</code></p>
</li>
<li>
<p>新增永久素材：<code v-pre>POST /cgi-bin/material/add_material</code></p>
</li>
<li>
<p>获取永久素材：<code v-pre>POST /cgi-bin/material/get_material</code></p>
</li>
<li>
<p>删除永久素材：<code v-pre>POST /cgi-bin/material/del_material</code></p>
</li>
<li>
<p>获取素材总数：<code v-pre>GET /cgi-bin/material/get_materialcount</code></p>
</li>
<li>
<p>获取素材列表：<code v-pre>POST /cgi-bin/material/batchget_material</code></p>
</li>
</ul>
<h3 id="微信支付" tabindex="-1">微信支付</h3>
<ul>
<li>API 文档地址：<a href="https://pay.weixin.qq.com/docs/merchant/products/jsapi-payment/introduction.html" target="_blank" rel="noopener noreferrer">微信支付 API</a></li>
<li>域名：<code v-pre>api.mch.weixin.qq.com</code>，备域名：<code v-pre>api2.mch.weixin.qq.com</code></li>
</ul>
<p><strong>API 示例</strong></p>
<ul>
<li>
<p>app 下单：<code v-pre>POST /v3/pay/transactions/app</code></p>
</li>
<li>
<p>h5 下单：<code v-pre>POST /v3/pay/transactions/h5</code></p>
</li>
<li>
<p>小程序下单：<code v-pre>POST /v3/pay/transactions/jsapi</code></p>
</li>
<li>
<p>查询订单：<code v-pre>GET /v3/pay/transactions/out-trade-no/{out_trade_no}</code></p>
</li>
<li>
<p>关闭订单：<code v-pre>POST /v3/pay/transactions/out-trade-no/{out_trade_no}/close</code></p>
</li>
<li>
<p>申请退款：<code v-pre>POST /v3/refund/domestic/refunds</code></p>
</li>
<li>
<p>创建支付分订单：<code v-pre>POST /v3/payscore/serviceorder</code></p>
</li>
<li>
<p>查询支付分订单：<code v-pre>GET /v3/payscore/serviceorder/</code></p>
</li>
<li>
<p>取消支付分订单：<code v-pre>POST /v3/payscore/serviceorder/{out_order_no}/cancel</code></p>
</li>
<li>
<p>核销用户券：<code v-pre>POST /v3/marketing/busifavor/coupons/use</code></p>
</li>
</ul>
<h3 id="腾讯开放平台" tabindex="-1">腾讯开放平台</h3>
<ul>
<li>API 文档地址：<a href="https://open.tencent.com/" target="_blank" rel="noopener noreferrer">腾讯开放平台 API</a></li>
<li>域名：<code v-pre>graph.qq.com</code></li>
</ul>
<p><strong>API 示例</strong></p>
<ul>
<li>获取 QQ 用户信息：<code v-pre>GET /user/get_user_info</code></li>
</ul>
<h3 id="腾讯云" tabindex="-1">腾讯云</h3>
<ul>
<li>API 文档地址：<a href="https://cloud.tencent.com/document/api" target="_blank" rel="noopener noreferrer">腾讯云 API</a></li>
<li>域名：<code v-pre>cvm.tencentcloudapi.com</code></li>
</ul>
<p><strong>API 实例</strong></p>
<p>腾讯云的 API 文档没有 API 路径，所有操作都是通过请求 body 或者 params 里的  <code v-pre>Action</code> 来区分。</p>
<ul>
<li>启动实例：<code v-pre>GET https://cvm.tencentcloudapi.com/?Action=StartInstances</code></li>
<li>关闭实例：<code v-pre>GET https://cvm.tencentcloudapi.com/?Action=StopInstances</code></li>
</ul>
<h3 id="观察结果-7" tabindex="-1">观察结果</h3>
<ol>
<li>
<p>有多个域名，用于不同的产品线。</p>
</li>
<li>
<p>微信、QQ 的 API 风格差不多基本都是 /resource/action 的方式</p>
</li>
<li>
<p>腾讯云的 API 没有 URL，全部是直接请求域名即可。通过请求 body 或者 params 里的 <code v-pre>Action</code> 来区分。（PS：不清楚这样设计的目的是什么，个人觉得还是使用 URL 来区分比较好）</p>
</li>
</ol>
<h2 id="总结" tabindex="-1">总结</h2>
<ul>
<li>大部分都符合 Restful API 的设计，围绕 resource 和 action 来设计，增删改成使用对应的 HTTP 方法。</li>
<li>结构大部分使用 <code v-pre>/version/resource/{id}/action</code> 这种形式。</li>
<li>资源命名使用复数；用动词或者动词短语表示操作（action）。</li>
<li>对于多个单词的标识符使用中划线 <code v-pre>-</code> 或者下划线 <code v-pre>_</code> 作为分隔符，也有驼峰命名法。</li>
<li>AWS 和 腾讯云的 API 设计比较特殊，没有使用 URL 来区分不同的资源，而是使用 <strong>Action</strong> 字段区分。</li>
</ul>
<p>最后，个人更喜欢中划线 <code v-pre>-</code> 作为分隔符，无论在命令行还是浏览器里，更容易识别，然后我目前的 API 设计和 Trello 的 API 设计比较相似。</p>
</div></template>


