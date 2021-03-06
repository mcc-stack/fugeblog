(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{358:function(t,s,a){t.exports=a.p+"assets/img/image-20200303203914508.6a1bc540.png"},359:function(t,s,a){t.exports=a.p+"assets/img/image-20200303204101087.63192902.png"},360:function(t,s,a){t.exports=a.p+"assets/img/image-20200103204756701.652d96ff.png"},361:function(t,s,a){t.exports=a.p+"assets/img/image-20200303222700955.562cd364.png"},362:function(t,s,a){t.exports=a.p+"assets/img/image-20200303223144575.a5dcb3ef.png"},423:function(t,s,a){"use strict";a.r(s);var v=a(42),_=Object(v.a)({},(function(){var t=this,s=t.$createElement,v=t._self._c||s;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"redis"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#redis"}},[t._v("#")]),t._v(" Redis")]),t._v(" "),v("h2",{attrs:{id:"使用场景"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#使用场景"}},[t._v("#")]),t._v(" 使用场景")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("数据（热点）⾼并发的读写")])]),t._v(" "),v("li",[v("p",[t._v("海量数据的读写")])]),t._v(" "),v("li",[v("p",[t._v("对扩展性要求⾼的数据")])])]),t._v(" "),v("h2",{attrs:{id:"分布式缓存和本地缓存的区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#分布式缓存和本地缓存的区别"}},[t._v("#")]),t._v(" 分布式缓存和本地缓存的区别")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th"),t._v(" "),v("th",[t._v("分布式缓存")]),t._v(" "),v("th",[t._v("本地缓存")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("缓存一致性")]),t._v(" "),v("td",[t._v("较好")]),t._v(" "),v("td",[t._v("较弱，每个实例都有自己的缓存")])]),t._v(" "),v("tr",[v("td",[t._v("堆内存占用")]),t._v(" "),v("td",[t._v("不占用")]),t._v(" "),v("td",[t._v("占用，影响垃圾回收")])]),t._v(" "),v("tr",[v("td",[t._v("速度")]),t._v(" "),v("td",[t._v("较慢，因为需要网络传输和序列化")]),t._v(" "),v("td",[t._v("较快")])]),t._v(" "),v("tr",[v("td",[t._v("使用场景")]),t._v(" "),v("td",[t._v("要求数据一致性，访问量大的场景")]),t._v(" "),v("td",[t._v("对数据一致性没有特别高的要求，且访问次数多的场景")])])])]),t._v(" "),v("p",[t._v("本地缓存的实现：")]),t._v(" "),v("ul",[v("li",[t._v("使用特定数据结构，比如 ConcurrentHashMap")]),t._v(" "),v("li",[t._v("使⽤开源的缓存框架 Ehcache，Ehcache 封装了对于内存操作的功能")]),t._v(" "),v("li",[t._v("Guava Cache 是 Google 开源的⼯具集， 提供了缓存的边界操作⼯具")])]),t._v(" "),v("h2",{attrs:{id:"redis-通信协议"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#redis-通信协议"}},[t._v("#")]),t._v(" Redis 通信协议")]),t._v(" "),v("p",[t._v("Redis 的通信协议是 Redis Serialization Protocol，简称 RESP。")]),t._v(" "),v("p",[t._v("特征如下：")]),t._v(" "),v("ol",[v("li",[t._v("二进制安全")]),t._v(" "),v("li",[t._v("在 TCP 层")]),t._v(" "),v("li",[t._v("基于请求-响应的模式")])]),t._v(" "),v("h2",{attrs:{id:"redis-和-memcache-的区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#redis-和-memcache-的区别"}},[t._v("#")]),t._v(" Redis 和 Memcache 的区别")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th"),t._v(" "),v("th",[t._v("Redis")]),t._v(" "),v("th",[t._v("Memcache")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("存储方式")]),t._v(" "),v("td",[t._v("持久化")]),t._v(" "),v("td",[t._v("断电丢失")])]),t._v(" "),v("tr",[v("td",[t._v("支持数据类型不同")]),t._v(" "),v("td",[t._v("String,hash,list,set,zset")]),t._v(" "),v("td",[t._v("只支持 key-value")])]),t._v(" "),v("tr",[v("td",[t._v("速度")]),t._v(" "),v("td",[t._v("快")]),t._v(" "),v("td",[t._v("慢")])])])]),t._v(" "),v("h2",{attrs:{id:"常用数据结构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#常用数据结构"}},[t._v("#")]),t._v(" 常用数据结构")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("String（字符串）")]),t._v(" "),v("p",[t._v("最大容量为 512M")])]),t._v(" "),v("li",[v("p",[t._v("list（列表）")]),t._v(" "),v("p",[t._v("list 是字符串列表，按照插⼊顺序排序。元素可以在列表的头部（左边）或者尾部（右边）进⾏添加。最大容量为 2^32-1 个。可以做消息队列。")])]),t._v(" "),v("li",[v("p",[t._v("hash（哈希）")]),t._v(" "),v("p",[t._v("Redis hash 是⼀个键值对（key-value）集合。Redis hash 是⼀个 String 类型的 field 和 value 的映射表，hash 特别适合⽤于存储对象。最大容量为 2^32-1 个。")])]),t._v(" "),v("li",[v("p",[t._v("set（集合）")]),t._v(" "),v("p",[t._v("Redis 的 set 是 String 类型的⽆序集合。最大容量为 2^32-1 个。")])]),t._v(" "),v("li",[v("p",[t._v("zset（sorted set：有序集合）")]),t._v(" "),v("p",[t._v("Redis zset 和 set ⼀样也是 String 类型元素的集合，且 不允许重复的成员。不同的 zset 是每个元素都会关联⼀个 double 类型的分数。zset 通过这个分数来为集合中所有元素进⾏从⼩到⼤的排序。zset 的成员是唯⼀的，但分数（score）却可以重复。最大容量为 2^32-1 个。适合做排行榜。")])])]),t._v(" "),v("h2",{attrs:{id:"zset-底层实现"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#zset-底层实现"}},[t._v("#")]),t._v(" zset 底层实现")]),t._v(" "),v("p",[t._v("zset 有两种实现，分别是 ziplist 或 skiplist。")]),t._v(" "),v("p",[t._v("只有当保存的元素数量小于 128，并且保存的所有元素长度都小于 64 字节才会使用压缩列表，否则使用跳跃表。")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("ziplist")]),t._v(" "),v("p",[t._v("ziplist 所有元素使用两个紧挨在一起的压缩列表节点来保存，第一个节点保存元素的成员，第二个保存分值。并且集合元素按照分值从小到大顺序排列，小的靠近表头，大的放置在表尾。")])]),t._v(" "),v("li",[v("p",[t._v("skiplist")]),t._v(" "),v("p",[t._v("一个结构同时会包含一个字典和一个跳跃表，字典的键保存元素的值，字典的值保存元素的分值；跳跃表节点的 object 属性保存元素的成员，score 属性保存元素的分值。")]),t._v(" "),v("p",[t._v("跳表具有如下性质：")]),t._v(" "),v("ol",[v("li",[t._v("由很多层结构组成")]),t._v(" "),v("li",[t._v("每一层都是一个有序的链表")]),t._v(" "),v("li",[t._v("最底层(Level 1)的链表包含所有元素")]),t._v(" "),v("li",[t._v("如果一个元素出现在 Level i 的链表中，则它在 Level i 之下的链表也都会出现。")]),t._v(" "),v("li",[t._v("每个节点包含两个指针，一个指向同一链表中的下一个元素，一个指向下面一层的元素。")])]),t._v(" "),v("p",[v("img",{attrs:{src:a(358),alt:"image-20200303203914508"}})])])]),t._v(" "),v("h3",{attrs:{id:"跳跃表的搜索"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#跳跃表的搜索"}},[t._v("#")]),t._v(" 跳跃表的搜索")]),t._v(" "),v("p",[v("img",{attrs:{src:a(359),alt:"image-20200303204101087"}})]),t._v(" "),v("p",[t._v("例子：查找元素 117")]),t._v(" "),v("ol",[v("li",[t._v("比较 21， 比 21 大，往后面找")]),t._v(" "),v("li",[t._v("比较 37, 比 37 大，比链表最大值小，从 37 的下面一层开始找")]),t._v(" "),v("li",[t._v("比较 71, 比 71 大，比链表最大值小，从 71 的下面一层开始找")]),t._v(" "),v("li",[t._v("比较 85， 比 85 大，从后面找")]),t._v(" "),v("li",[t._v("比较 117， 等于 117， 找到了节点。")])]),t._v(" "),v("p",[t._v("先从最顶层开始往右找，大于最大值后就往下找。")]),t._v(" "),v("h3",{attrs:{id:"跳跃表的插入"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#跳跃表的插入"}},[t._v("#")]),t._v(" 跳跃表的插入")]),t._v(" "),v("p",[t._v("先确定元素需要占据的层数 K，由抛硬币决定，是正面就继续抛；然后在 1-K 层都插入这个元素；如果 K 大于当前层数最大值，则添加新的层。")]),t._v(" "),v("h3",{attrs:{id:"跳跃表的删除"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#跳跃表的删除"}},[t._v("#")]),t._v(" 跳跃表的删除")]),t._v(" "),v("p",[t._v("各个层中找到包含 x 的节点，使用 delete from list 方法删除节点。")]),t._v(" "),v("h2",{attrs:{id:"过期删除策略"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#过期删除策略"}},[t._v("#")]),t._v(" 过期删除策略")]),t._v(" "),v("p",[t._v("常见的删除策略：")]),t._v(" "),v("ul",[v("li",[t._v("定时删除：设置过期时间的同时，创建一个 timer，过期时间一到就主动删除")]),t._v(" "),v("li",[t._v("惰性删除：放任不管，每次获取时，才判断是否过期，过期就删除，属于被动删除")]),t._v(" "),v("li",[t._v("定期删除：每隔一段时间就对数据库进行一次删除过期键的操作")])]),t._v(" "),v("p",[t._v("Redis 采用惰性删除+定期删除的方式管理键。既减小 cpu 压力的同时，也保证了数据的准确性。")]),t._v(" "),v("h2",{attrs:{id:"内存淘汰机制"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#内存淘汰机制"}},[t._v("#")]),t._v(" 内存淘汰机制")]),t._v(" "),v("p",[t._v("由于可能发生，既没有被惰性删除也没有被定期删除，但内存很快满了的情况出现，所以需要一定的内存淘汰机制。有 6 中淘汰策略：")]),t._v(" "),v("ul",[v("li",[t._v("no-eviction：不会继续服务"),v("strong",[t._v("写请求")]),t._v("，"),v("strong",[t._v("读请求")]),t._v("可以继续进行。这样可以保证不会丢失数据，但是会让线上的业务不能持续进行。这是默认的淘汰策略。")]),t._v(" "),v("li",[t._v("volatile-lru：尝试"),v("strong",[t._v("淘汰设置了过期时间")]),t._v("的 key，最少使用的 key 优先被淘汰。没有设置过期时间的 key 不会被淘汰，这样可以保证需要持久化的数据不会突然丢失。（这个是使用最多的）")]),t._v(" "),v("li",[t._v("volatile-ttl：跟上面一样，除了淘汰的策略不是 LRU，而是 key 的剩余寿命 ttl 的值，ttl 越小越优先被淘汰,即"),v("strong",[t._v("淘汰将要过期的数据")]),t._v("。")]),t._v(" "),v("li",[t._v("volatile-random：从已设置过期时间的数据集（server.db[i].expires）中"),v("strong",[t._v("随机")]),t._v("选择数据淘汰。")]),t._v(" "),v("li",[t._v("allkeys-lru：区别于 volatile-lru，这个策略要淘汰的 key 对象是全体的 key 集合，而不只是过期的 key 集合。这意味着没有设置过期时间的 key 也会被淘汰。")]),t._v(" "),v("li",[t._v("allkeys-random：从全体的 key 集合（server.db[i].dict）中任意选择数据淘汰。")])]),t._v(" "),v("h2",{attrs:{id:"持久化机制"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#持久化机制"}},[t._v("#")]),t._v(" 持久化机制")]),t._v(" "),v("ul",[v("li",[t._v("RDB：将 Redis 在内存中的数据库记录定时 dump 到磁盘上的 RDB 持久化。")]),t._v(" "),v("li",[t._v("AOF：将 Redis 的操作日志以追加的方式写入文件。")])]),t._v(" "),v("h3",{attrs:{id:"rdb"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#rdb"}},[t._v("#")]),t._v(" RDB")]),t._v(" "),v("p",[t._v("RDB 持久化是指在指定的时间间隔内将内存中的数据集快照写⼊磁盘，实际操作过程是 fork ⼀个⼦进程，先将数据集写⼊临时⽂件，写⼊成功后，再替换之前的⽂件，⽤⼆进制压缩存储。")]),t._v(" "),v("p",[t._v("优点：")]),t._v(" "),v("ol",[v("li",[v("p",[t._v("RDB 是紧凑的⼆进制⽂件，⽐较适合备份，全量复制等场景")])]),t._v(" "),v("li",[v("p",[t._v("RDB 恢复数据远快于 AOF")])])]),t._v(" "),v("p",[t._v("缺点：")]),t._v(" "),v("ol",[v("li",[t._v("无法实现实时或者秒级持久化")]),t._v(" "),v("li",[t._v("新老版本无法兼容 RDB")])]),t._v(" "),v("h3",{attrs:{id:"aof"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#aof"}},[t._v("#")]),t._v(" AOF")]),t._v(" "),v("p",[t._v("AOF 持久化以⽇志的形式记录服务器所处理的每⼀个写、删除操作，查询操作不会记录，以⽂本的⽅式记录，可以打开⽂件看到详细的操作记录。")]),t._v(" "),v("p",[t._v("优点：")]),t._v(" "),v("ol",[v("li",[t._v("更好地保护数据不丢失")]),t._v(" "),v("li",[t._v("append-only 模式写入性能比较高")]),t._v(" "),v("li",[t._v("适合做灾难性的误删除紧急恢复")])]),t._v(" "),v("p",[t._v("缺点：")]),t._v(" "),v("ol",[v("li",[t._v("对于同一份文件，AOF 文件要比 RDB 快照大")]),t._v(" "),v("li",[t._v("会对 QPS 有所影响")]),t._v(" "),v("li",[t._v("数据库恢复慢，不适合做冷备")])]),t._v(" "),v("h2",{attrs:{id:"redis-事务"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#redis-事务"}},[t._v("#")]),t._v(" Redis 事务")]),t._v(" "),v("p",[t._v("Redis 中的事务是⼀组命令的集合，是 Redis 的最⼩执⾏单位，⼀个事务要么都执⾏，要么都不执⾏；Reids 事务保证⼀个事务内的命令依次执⾏，⽽不会被其他命令插⼊；Redis 事务的原理是先将属于⼀个事务的命令发送给 Redis，然后依次执⾏这些命令。")]),t._v(" "),v("h3",{attrs:{id:"相关命令"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#相关命令"}},[t._v("#")]),t._v(" 相关命令")]),t._v(" "),v("ol",[v("li",[v("p",[t._v("discard 命令：取消事务，丢弃事务中所有命令。")])]),t._v(" "),v("li",[v("p",[t._v("exec 命令：执⾏所有事务内的命令。")])]),t._v(" "),v("li",[v("p",[t._v("multi 命令：标记⼀个事务开始。")])]),t._v(" "),v("li",[v("p",[t._v("unwatch 命令：取消 watch 命令对所有 key 的监视。")])]),t._v(" "),v("li",[v("p",[t._v("watch 命令：监视⼀个（或多个）key，如果在执⾏事务之前这个（这些）key 被其他命令所改动，事务将被打断。")])])]),t._v(" "),v("h3",{attrs:{id:"注意点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#注意点"}},[t._v("#")]),t._v(" 注意点")]),t._v(" "),v("ol",[v("li",[v("p",[t._v("不⽀持回滚，如果事务中有错误的操作，⽆法回滚到处理前的状态，需要开发者处理。")])]),t._v(" "),v("li",[v("p",[t._v("在执⾏完当前事务内所有指令前，不会同时执⾏其他客户端的请求。")])])]),t._v(" "),v("h2",{attrs:{id:"redis-pipeline"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#redis-pipeline"}},[t._v("#")]),t._v(" Redis Pipeline")]),t._v(" "),v("p",[t._v("Redis 客户端与服务端通信模型使⽤的 TCP 协议进⾏连接， 那么在单个指令的执⾏过程中，都 会存在“交互往返”的时间。 Redis 本身提供了一些批量命令，如 mget、mset，但不满足大部分命令，因此出现了 Pipeline。")]),t._v(" "),v("p",[t._v("Pipeline 将一组 Redis 命令进行组装，一次性传输给 Redis，在讲这些命令执行结果，按照顺序返回客户端。")]),t._v(" "),v("h3",{attrs:{id:"使用场景-2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#使用场景-2"}},[t._v("#")]),t._v(" 使用场景")]),t._v(" "),v("p",[t._v("有批量的数据写入 Reedis，并且允许一定比例的写入失败。")]),t._v(" "),v("h3",{attrs:{id:"与批量命令的区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#与批量命令的区别"}},[t._v("#")]),t._v(" 与批量命令的区别")]),t._v(" "),v("ol",[v("li",[t._v("批量命令保证原子性，而 Pipeline 非原子。")]),t._v(" "),v("li",[t._v("批量命令是一个命令对应多个 key，而 Pipeline 支持多个命令。")]),t._v(" "),v("li",[t._v("批量命令是 Redis 服务端实现，Pipeline 需要服务端和客户端共同实现。")])]),t._v(" "),v("h2",{attrs:{id:"三大缓存问题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#三大缓存问题"}},[t._v("#")]),t._v(" 三大缓存问题")]),t._v(" "),v("h3",{attrs:{id:"缓存穿透"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#缓存穿透"}},[t._v("#")]),t._v(" 缓存穿透")]),t._v(" "),v("p",[t._v("查询缓存中没有，数据库也没有的数据会导致缓存穿透。")]),t._v(" "),v("p",[t._v("解决方法：")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("布隆过滤")]),t._v(" "),v("p",[t._v("将所有查询的参数都存储到一个 bitmap 中，查询之前先去 bitmap 里面验证，如果存在就进行底层缓存的数据查询；如果不存在就进行拦截。")]),t._v(" "),v("p",[t._v("可以用于实现数据字典，进行数据的判重，集合求交集。")])]),t._v(" "),v("li",[v("p",[t._v("缓存空对象")]),t._v(" "),v("p",[t._v("直接缓存一个空对象，但是会有两个问题：")]),t._v(" "),v("ol",[v("li",[t._v("缓存将存储更多的键值对，可能会遭到恶意攻击，至于内存空间的浪费；可以通过设置过期时间来控制。")]),t._v(" "),v("li",[t._v("DB 与缓存数据不一致，可以通过异步消息来进行数据更新的通知。")])])])]),t._v(" "),v("h3",{attrs:{id:"缓存雪崩"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#缓存雪崩"}},[t._v("#")]),t._v(" 缓存雪崩")]),t._v(" "),v("p",[t._v("一段时间内，大量的缓存失效，导致数据库压力突然增大，导致缓存雪崩。")]),t._v(" "),v("p",[t._v("解决方法：")]),t._v(" "),v("ul",[v("li",[t._v("分散失效时间")]),t._v(" "),v("li",[t._v("DB 访问限制，进行限流")]),t._v(" "),v("li",[t._v("多级缓存设计")])]),t._v(" "),v("h3",{attrs:{id:"缓存击穿"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#缓存击穿"}},[t._v("#")]),t._v(" 缓存击穿")]),t._v(" "),v("p",[t._v("缓存中没有，但是数据库中油的数据，这时由于并发用户多，就会造成数据库压力瞬间增大。")]),t._v(" "),v("p",[t._v("解决方法：")]),t._v(" "),v("ol",[v("li",[v("p",[t._v("设置热点数据永不过期")])]),t._v(" "),v("li",[v("p",[t._v("加互斥锁，使写数据的只有一个线程执行：")]),t._v(" "),v("div",{staticClass:"language-java extra-class"},[v("pre",{pre:!0,attrs:{class:"language-java"}},[v("code",[v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Lock")]),t._v(" reenLock "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ReentrantLock")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),v("span",{pre:!0,attrs:{class:"token generics"}},[v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),v("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("getData04")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InterruptedException")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),v("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),v("span",{pre:!0,attrs:{class:"token generics"}},[v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),v("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" result "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ArrayList")]),v("span",{pre:!0,attrs:{class:"token generics"}},[v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),v("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 从缓存读取数据")]),t._v("\n    result "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("getDataFromCache")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("isEmpty")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("reenLock"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("tryLock")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),v("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),v("span",{pre:!0,attrs:{class:"token string"}},[t._v('"我拿到锁了,从DB获取数据库后写入缓存"')]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 从数据库查询数据")]),t._v("\n                result "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("getDataFromDB")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将查询到的数据写入缓存")]),t._v("\n                "),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("setDataToCache")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("finally")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                reenLock"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("unlock")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 释放锁")]),t._v("\n            "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            result "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("getDataFromCache")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 先查一下缓存")]),t._v("\n            "),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("isEmpty")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),v("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),v("span",{pre:!0,attrs:{class:"token string"}},[t._v('"我没拿到锁,缓存也没数据,先小憩一下"')]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),v("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Thread")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("sleep")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 小憩一会儿")]),t._v("\n                "),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("getData04")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 重试")]),t._v("\n            "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" result"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])]),t._v(" "),v("h2",{attrs:{id:"缓存更新策略"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#缓存更新策略"}},[t._v("#")]),t._v(" 缓存更新策略")]),t._v(" "),v("h3",{attrs:{id:"先更新数据库-再更新缓存"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#先更新数据库-再更新缓存"}},[t._v("#")]),t._v(" 先更新数据库，再更新缓存")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("会导致线程安全问题")]),t._v(" "),v("p",[t._v("两个线程一起更新数据，就会造成脏数据的问题。")])]),t._v(" "),v("li",[v("p",[t._v("更新缓存的复杂度相对较高")]),t._v(" "),v("p",[t._v("因为一般存入缓存的数据都要经过一系列的计算。")])])]),t._v(" "),v("h3",{attrs:{id:"先删除缓存-再更新数据库"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#先删除缓存-再更新数据库"}},[t._v("#")]),t._v(" 先删除缓存，再更新数据库")]),t._v(" "),v("p",[t._v("可能会导致数据不一致的问题，比如，刚删掉缓存，另一个线程马上读取请求，缓存还是旧的。")]),t._v(" "),v("p",[t._v("解决方法只能是写数据成功后，再更新一次缓存。")]),t._v(" "),v("h3",{attrs:{id:"先更新数据库-再删除缓存"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#先更新数据库-再删除缓存"}},[t._v("#")]),t._v(" 先更新数据库，再删除缓存")]),t._v(" "),v("p",[t._v("可能会造成短暂的数据不一致，在更新数据库成功后和删除缓存之前，会有一定的数据不一致现象，不过可以接受。")]),t._v(" "),v("h2",{attrs:{id:"redis-为什么快"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#redis-为什么快"}},[t._v("#")]),t._v(" Redis 为什么快")]),t._v(" "),v("ul",[v("li",[t._v("数据都存放到了内存中")]),t._v(" "),v("li",[t._v("Redis 是单线程的，也就意味着避免了不必要的上下文切换和竞争")]),t._v(" "),v("li",[t._v("非阻塞 IO，内部采用 epoll，利用了 IO 多路复用的特性。")])]),t._v(" "),v("h3",{attrs:{id:"五种-io-模型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#五种-io-模型"}},[t._v("#")]),t._v(" 五种 IO 模型")]),t._v(" "),v("p",[t._v("阻塞 I/O 模型、非阻塞 I/O 模型、I/O 复用模型、信号驱动 I/O 模型、异步 I/O 模型。")]),t._v(" "),v("h3",{attrs:{id:"redis-的-io-多路复用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#redis-的-io-多路复用"}},[t._v("#")]),t._v(" Redis 的 IO 多路复用")]),t._v(" "),v("p",[t._v("IO 多路复用是指一个线程处理多个 IO 请求，redis 的网络事件处理器为文件事件处理器，它使用 IO 多路复用来同时监听多个套接字，并根据套接字目前执行的任务来为套接字关联不同的事件处理器。")]),t._v(" "),v("p",[t._v("当上一个套接字产生的事件被处理完毕之后（该套接字为事件所关联的事件处理器执行完毕）， I/O 多路复用程序才会继续向文件事件分派器传送下一个套接字。")]),t._v(" "),v("p",[v("img",{attrs:{src:a(360),alt:"image-20200103204756701"}})]),t._v(" "),v("ul",[v("li",[t._v("如果是客户端要连接 redis，那么会为 socket 关联连接"),v("strong",[t._v("应答")]),t._v("处理器")]),t._v(" "),v("li",[t._v("如果是客户端要写入数据到 redis，那么会为 scoket 关联命令"),v("strong",[t._v("请求")]),t._v("处理器")]),t._v(" "),v("li",[t._v("如果是客户端要从 redis 读数据，那么会为 socket 关联命令"),v("strong",[t._v("回复")]),t._v("处理器")])]),t._v(" "),v("h2",{attrs:{id:"热点-key-问题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#热点-key-问题"}},[t._v("#")]),t._v(" 热点 key 问题")]),t._v(" "),v("p",[t._v("产生原因：")]),t._v(" "),v("ol",[v("li",[t._v("用户消费的数据远大于生产的数据，比如双十一的热门商品的促销")]),t._v(" "),v("li",[t._v("请求分片集中，超过单 Server 的性能极限")])]),t._v(" "),v("p",[t._v("导致危害：")]),t._v(" "),v("ol",[v("li",[t._v("流量集中，达到物理网卡上限")]),t._v(" "),v("li",[t._v("请求过多，缓存分片服务被打垮")]),t._v(" "),v("li",[t._v("DB 击穿，引起业务雪崩")])]),t._v(" "),v("p",[t._v("解决方案：")]),t._v(" "),v("ol",[v("li",[v("p",[t._v("使用 Memcache+Redis")])]),t._v(" "),v("li",[v("p",[t._v("使用本地缓存")])]),t._v(" "),v("li",[v("p",[t._v("读写分离")])])]),t._v(" "),v("h2",{attrs:{id:"redis-数据分布"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#redis-数据分布"}},[t._v("#")]),t._v(" Redis 数据分布")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("节点取余分区")]),t._v(" "),v("p",[t._v("使用特定的数据，如 Redis 的键或用户的 ID，再根据公式：hash(key)%N，计算出 hash 值，用来决定数据落到那个节点。")]),t._v(" "),v("p",[t._v("优点：简单，常用于分库分表。")]),t._v(" "),v("p",[t._v("缺点：节点数量发生改变，映射关系需要重新计算。")])]),t._v(" "),v("li",[v("p",[t._v("一致性 Hash 分区")]),t._v(" "),v("p",[t._v("一致性 Hash 算法也是使用取模的方法，节点取余分区是对"),v("strong",[t._v("服务器的数量")]),t._v("进行取模，而一致性 Hash 算法是对"),v("strong",[t._v("2^32")]),t._v("取模。")]),t._v(" "),v("p",[t._v("简单来说，一致性 Hash 算法将整个哈希值空间组织成一个虚拟的圆环，如假设某哈希函数 H 的值空间为 0-2^32-1（即哈希值是一个 32 位无符号整形），整个哈希环如下：整个空间按顺时针方向组织，圆环的正上方的点代表 0，0 点右侧的第一个点代表 1，以此类推，2、3、4、5、6……直到 2^32-1，也就是说 0 点左侧的第一个点代表 2^32-1， 0 和 2^32-1 在零点中方向重合，我们把这个由 2^32 个点组成的圆环称为 Hash 环。")]),t._v(" "),v("p",[t._v("下一步将各个服务器使用 Hash 进行一个哈希，具体可以选择服务器的 IP 或主机名作为关键字进行哈希，这样每台机器就能确定其在哈希环上的位置。")]),t._v(" "),v("p",[v("img",{attrs:{src:a(361),alt:"image-20200303222700955"}})]),t._v(" "),v("p",[t._v("优点：")]),t._v(" "),v("p",[t._v("加入和删除节点只影响哈希环中相邻的节点，对其他节点没有影响。")]),t._v(" "),v("p",[t._v("缺点：")]),t._v(" "),v("ol",[v("li",[t._v("需要手动处理因为节点改变而影响的数据，因此常用于缓存场景。")]),t._v(" "),v("li",[t._v("不适合少量节点，因为它会影响大范围的节点映射。")]),t._v(" "),v("li",[t._v("普通的一致性哈希分区在增减节点时需要增加一倍或减少一半节点才能保证数据和负载均衡。")])])]),t._v(" "),v("li",[v("p",[t._v("虚拟槽分区")]),t._v(" "),v("p",[t._v("虚拟槽分区巧妙地使用了哈希空间，使用分散度良好的哈希函数把所有数据映射到一个固定范围的整数集合中，整数定义为槽（slot）。")]),t._v(" "),v("p",[t._v("Redis Cluster 采用虚拟槽分区，所有的键根据哈希函数映射到 0-16383 整数槽内。")]),t._v(" "),v("p",[t._v("计算公式：slot = CRC16(key)&16383，每一个节点负责维护一部分槽以及槽所映射的键值数据，如图所示：")]),t._v(" "),v("p",[v("img",{attrs:{src:a(362),alt:"image-20200303223144575"}})]),t._v(" "),v("p",[t._v("优点：")]),t._v(" "),v("ol",[v("li",[t._v("解耦数据和节点的关系，"),v("strong",[t._v("简化扩容和收缩难度")]),t._v("。")]),t._v(" "),v("li",[t._v("节点自身维护槽的映射关系，不需要客户端或者代理服务维护槽分区元数据。")]),t._v(" "),v("li",[t._v("支持节点、槽、键之间的映射查询，用于数据路由、在线伸缩等场景。")])])])]),t._v(" "),v("h2",{attrs:{id:"redis-集群结构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#redis-集群结构"}},[t._v("#")]),t._v(" Redis 集群结构")]),t._v(" "),v("ul",[v("li",[t._v("单节点单机器")]),t._v(" "),v("li",[t._v("主从节点")]),t._v(" "),v("li",[t._v("哨兵模式")]),t._v(" "),v("li",[t._v("集群模式")])]),t._v(" "),v("p",[t._v("Redis 集群最多可以有 16384 个节点。")]),t._v(" "),v("h3",{attrs:{id:"主从复制"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#主从复制"}},[t._v("#")]),t._v(" 主从复制")]),t._v(" "),v("p",[t._v("Redis 中的主从复制，也就是 Master-Slave 模型，多个 Redis 实例间的数据同步以及 Redis 集群中数据同步会使⽤主从复制。")]),t._v(" "),v("p",[t._v("主从复制主要是数据同步， 数据同步分为全量同步和增量同步。")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("全量同步")]),t._v(" "),v("p",[t._v("一般发生在 Slave 初始化阶段，Slave 需要将 Master 所有数据都进行同步复制。")])]),t._v(" "),v("li",[v("p",[t._v("增量同步")]),t._v(" "),v("p",[t._v("Slave 正常工作时，Master 节点进行的写操作都会同步到 Slave 节点上。")])])]),t._v(" "),v("p",[t._v("优点：可靠性提高了，实现读写分离可以提高读写效率。")]),t._v(" "),v("p",[t._v("缺点：主节点存在单点问题，而且需要手动设置故障转移。")]),t._v(" "),v("h3",{attrs:{id:"哨兵模式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#哨兵模式"}},[t._v("#")]),t._v(" 哨兵模式")]),t._v(" "),v("p",[t._v("哨兵模式主要可以解决故障自动转移，不用人为干预。部署哨兵模式必须要有三个节点才能最大化其价值。")]),t._v(" "),v("p",[t._v("三个定时任务：")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("每 10 秒每个 sentinel 对 master 和 slave 执行 info")]),t._v(" "),v("p",[t._v("主要用来发现 slave 节点和确认主从关系。")])]),t._v(" "),v("li",[v("p",[t._v("每 2 秒每个 sentinel 通过 master 结点的 channel 交换信息(pub/sub)")]),t._v(" "),v("p",[t._v("可以交互对节点的看法和自身信息。")])]),t._v(" "),v("li",[v("p",[t._v("每 1 秒每个 sentinel 对其他 sentinel 和 redis 执行 ping")]),t._v(" "),v("p",[t._v("用来检测故障。")])])]),t._v(" "),v("p",[t._v("优点：保证高可用，各个节点自动故障转移。")]),t._v(" "),v("p",[t._v("缺点：主从模式，依旧存在单点问题。")]),t._v(" "),v("h3",{attrs:{id:"redis-cluster"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#redis-cluster"}},[t._v("#")]),t._v(" Redis Cluster")]),t._v(" "),v("p",[t._v("在上文介绍过，RedisCluster 使用虚拟槽分配节点，即 CRC16(key)&16383（一共有 16384 个），一般结构为三主三从。")]),t._v(" "),v("p",[t._v("集群自动故障转移过程分为故障发现和节点恢复。节点下线分为主观下线和客观下线，当超过半数主节点认为故障节点为主观下线时标记它为客观下线状态。从节点负责对客观下线的主节点触发故障恢复流程，保证集群的可用性。")]),t._v(" "),v("p",[t._v("优点：")]),t._v(" "),v("p",[t._v("避免了单点故障，实现高可用。")]),t._v(" "),v("p",[t._v("缺点：")]),t._v(" "),v("ul",[v("li",[t._v("使整个缓存更加复杂")]),t._v(" "),v("li",[t._v("key 批量操作支持有限：例如 mget、mset 必须在一个 slot。")]),t._v(" "),v("li",[t._v("key 事务和 Lua 支持有限：操作的 key 必须在一个节点。")]),t._v(" "),v("li",[t._v("key 是数据分区的最小粒度：不支持 bigkey 分区。")]),t._v(" "),v("li",[t._v("不支持多个数据库：集群模式下只有一个 db 0。")]),t._v(" "),v("li",[t._v("复制只支持一层：不支持树形复制结构。")])]),t._v(" "),v("p",[t._v("实际上大多数情况下，Redis Sentinel 已经能够胜任，满足业务需求。")])])}),[],!1,null,null,null);s.default=_.exports}}]);