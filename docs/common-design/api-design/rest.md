# REST API 设计最佳实践

什么是REST API？

REST 是 Representational State Transfer 的缩写，是一种设计 Web 服务的方式。REST 是一种架构风格，而不是一种标准。REST 的核心思想是将资源（Resource）作为中心，通过 HTTP 方法（如 GET、POST、PUT、DELETE）来操作资源。

### REST API 设计原则

- 资源（Resource）：REST API 的核心是资源。资源是 API 操作的对象，可以是任何可以被识别和操作的对象，如用户、订单、商品等。
- 统一接口（Uniform Interface）：REST API 使用统一的接口来操作资源。接口包括 HTTP 方法、URI、请求头、请求体等。
- 无状态（Stateless）：REST API 是无状态的。客户端和服务器之间不需要维护会话状态。
- 可缓存（Cacheable）：REST API 支持缓存。客户端和服务器之间可以通过缓存来提高性能。
- 分层系统（Layered System）：REST API 可以由分层系统来实现。分层系统包括客户端、代理、服务器等。
- 按需编码（Code on Demand）：REST API 支持按需编码。服务器可以根据客户端的需求来动态生成数据。
- 客户端-服务器（Client-Server）：REST API 是客户端-服务器架构。客户端和服务器之间是松耦合的。


### REST 成熟度模型


实际开发工作中，REST 通常就是用来指导 API 设计，RESTful Web APIS 作者提出了 REST 成熟度模型，将其分为了 4 级。下面是例子


第 0 级：完全不 REST。

下面是 RPC 面向过程风格的 api 设计，围绕操作过程设计：

查询预约服务
POST /appointmentService?action=query HTTP/1.1

{date: "2020-03-04", doctor: "mjones"}


确认预约

POST /appointmentService?action=confirm HTTP/1.1

{    
appointment: {date: "2020-03-04", start:"14:00", doctor: "mjones"},              patient: {name: icyfenix, age: 30, ......}
}



像登录服务的 login 接口，其实就是这种风格，严格按照 Rest 风格设计的话，应该是对 session 资源的操作。

第 1 级：开始引入了资源概念

这里引入资源，资源有 ID，意味着对服务端的访问都是围绕资源，通过资源 ID 进行。

查询预约：以医生为资源，通过 ID查询

POST /doctors/mjones HTTP/1.1

{date: "2020-03-04"}


提交预约，以档期为资源，通过 ID 预约

POST /schedules/1234 HTTP/1.1

{name: icyfenix, age: 30, ......}


引入资源后，可以围绕资源与服务端交互，但依然存在如下问题：

接口不足，一旦需要调整、取消预约等操作，需要提供新的接口。
错误响应处理：每个服务可能都要自行设计错误码和错误罅隙。
没有认证授权机制

第 2 级：引入统一接口，映射到 HTTP 方法

第二级的思想就是通过引入统一接口并结合 HTTP 解决第 1 级中的问题。

HTTP协议的七个标准方法是经过精心设计的，只要架构师的抽象能力够用，它们几乎能涵盖资源可能遇到的所有操作场景。

将不同的业务操作抽象为对资源的 CRUD
使用过 HTTP 协议的 status code 解决操作异常
使用 HTTP Header 携带的额外认证、授权信息解决的第三个问题

查询档期

GET /doctors/mjones/schedule?date=2020-03-04&status=open HTTP/1.


创建预约

POST /schedules/1234 HTTP/1.1



第2级是目前绝大多数系统所到达的REST级别。

第 3 级：状态转移完全由后端驱动

大部分系统都是达到了第 2 级，然后部分操作由客户端实现。比如查询某个实例详情，后端返回了实例列表，此时前端知道通过实例 ID 去访问详情信息。

但 REST 第 3 级表示除了第一个请求外，其他请求都要描述清楚自己后续的状态转移操作，由超文本自身驱动。

这代表服务端需要返回后续操作的相关信息。




实际操作中没有遇到过这种情况，无论是服务端还是客户端，都要做很多额外工作，在实际工程收益上有点得不偿失。
