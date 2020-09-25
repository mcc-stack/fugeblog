(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{349:function(v,_,a){v.exports=a.p+"assets/img/image-20200302170404221.ffad1c71.png"},350:function(v,_,a){v.exports=a.p+"assets/img/image-20200302170828189.18d41f45.png"},421:function(v,_,a){"use strict";a.r(_);var l=a(42),t=Object(l.a)({},(function(){var v=this,_=v.$createElement,l=v._self._c||_;return l("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[l("h1",{attrs:{id:"jvm"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#jvm"}},[v._v("#")]),v._v(" JVM")]),v._v(" "),l("h2",{attrs:{id:"运行时数据区"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#运行时数据区"}},[v._v("#")]),v._v(" 运行时数据区")]),v._v(" "),l("ol",[l("li",[v._v("程序计数器")]),v._v(" "),l("li",[v._v("虚拟机栈")]),v._v(" "),l("li",[v._v("本地方发栈")]),v._v(" "),l("li",[v._v("堆")]),v._v(" "),l("li",[v._v("方法区")])]),v._v(" "),l("h3",{attrs:{id:"方法区存储内容"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#方法区存储内容"}},[v._v("#")]),v._v(" 方法区存储内容")]),v._v(" "),l("p",[v._v("类的所有字段和方法字节码，以及一些特殊方法如构造方法，接口代码也在此定义。也就是静态变量+常量+类信息（构造方法/接口定义）+运行时常量池都存在该方法区中。")]),v._v(" "),l("h3",{attrs:{id:"永久代和元空间"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#永久代和元空间"}},[v._v("#")]),v._v(" 永久代和元空间")]),v._v(" "),l("ul",[l("li",[v._v("永久代：永久代在 jdk1.7 之后就被元空间给取代了，永久代逻辑结构上属于堆，但是物理上不属于堆，会出现 OOM 异常。")]),v._v(" "),l("li",[v._v("元空间：元数据区取代了永久代，本质和永久代类似逻辑结构上属于堆，区别在于元数据区并不在虚拟机中，而是使用本地物理内存，永久代在虚拟机中，元数据区也有可能发生 OutOfMemory 异常。")])]),v._v(" "),l("p",[v._v("这样就可以不用在单独为方法区去做一个内存管理了。")]),v._v(" "),l("h2",{attrs:{id:"gc-root-的对象"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#gc-root-的对象"}},[v._v("#")]),v._v(" GC Root 的对象")]),v._v(" "),l("ol",[l("li",[v._v("虚拟机栈中引用的对象")]),v._v(" "),l("li",[v._v("方法区中静态属性引用的对象")]),v._v(" "),l("li",[v._v("方法区常量引用的对象")]),v._v(" "),l("li",[v._v("本地方法栈中引用的对象")])]),v._v(" "),l("h2",{attrs:{id:"常见的-oom"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#常见的-oom"}},[v._v("#")]),v._v(" 常见的 OOM")]),v._v(" "),l("ul",[l("li",[v._v("堆内存溢出，堆上对象分配空间不足，有 OutOfMemoryError。")]),v._v(" "),l("li",[v._v("栈内存溢出，有 StackOverflow 和 OutOfMemoryError 两类。")]),v._v(" "),l("li",[v._v("常量内存溢出")]),v._v(" "),l("li",[v._v("直接内存溢出")])]),v._v(" "),l("h2",{attrs:{id:"引用"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#引用"}},[v._v("#")]),v._v(" 引用")]),v._v(" "),l("p",[v._v("在 java 中主要有以下四种引用类型:强引用,软引用,弱引用,虚引用.不同的引用类型主要体现在 GC 上:")]),v._v(" "),l("ul",[l("li",[l("p",[v._v("强引用")]),v._v(" "),l("p",[v._v("如果一个对象具有强引用,它就不会被垃圾回收器回收.即使当前内存空间不足,JVM 也不会回收它.而是抛出 OutOfMemoryError 错误.使程序异常终止.如果想中断强引用和某个对象之间的关联.可以显式地将引用赋值为 null,这样一来的话.JVM 在合适的时间就会回收该对象。")])]),v._v(" "),l("li",[l("p",[v._v("软引用")]),v._v(" "),l("p",[v._v("在使用软引用时，如果内存的空间足够，软引用就能继续被使用而不会被垃圾回收器回收，只有在内存不足时，软引用才会被垃圾回收器回收。")])]),v._v(" "),l("li",[l("p",[v._v("弱引用")]),v._v(" "),l("p",[v._v("具有弱引用的对象拥有的生命周期更短暂，因为当 JVM 进行垃圾回收时，如果这个对象只被弱引用关联（没有任何强引用关联他），那么这个对象就会被回收，不过由于垃圾回收器是一个优先级较低的线程,所以并不一定能迅速发现弱引用对象。弱引用的作用是回收不再使用的键值对，不用弱引用只要桶活着，就不会被回收。")])]),v._v(" "),l("li",[l("p",[v._v("虚引用")]),v._v(" "),l("p",[v._v("如果一个对象仅持有虚引用，那么它相当于没有引用，在任何时候都可能被垃圾回收器回收。唯一的作用是能在这个对象被收集器回收时收到一个系统通知，以此判断垃圾回收器的频率。")])])]),v._v(" "),l("p",[v._v("之所以出现不同的引用是 Java 对垃圾回收不可控的妥协。")]),v._v(" "),l("h2",{attrs:{id:"堆内存分配策略"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#堆内存分配策略"}},[v._v("#")]),v._v(" 堆内存分配策略")]),v._v(" "),l("ul",[l("li",[v._v("对象优先分配在 Eden 区，如果 Eden 区没有足够的空间进行分配时，虚拟机执行一次 MinorGC。")]),v._v(" "),l("li",[v._v("大对象直接进入老年代（需要大量连续内存空间的对象）。这样做的目的是避免在 Eden 区和两个 Survivor 区之间发生大量的内存拷贝（新生代采用复制算法收集内存）。")]),v._v(" "),l("li",[v._v("长期存活的对象进入老年代。虚拟机为每个对象定义了一个年龄（Age Count）计数器，如果对象经过了 1 次 Minor GC 那么对象会进入 Survivor 区，之后每经过一次 Minor GC 那么对象的年龄加 1，直到达到阀值（默认 15 次），对象进入老年区。")]),v._v(" "),l("li",[v._v("动态判断对象的年龄。如果 Survivor 区中相同年龄的所有对象大小的总和大于 Survivor 空间的一半，年龄大于或等于该年龄的对象可以直接进入老年代。")]),v._v(" "),l("li",[v._v("空间分配担保。在 Minor GC 前，虚拟机会检查老年代最大可用连续空间是否大于新生代所有对象总空间，如果成立就执行 Minor GC；否则检查 HandlePromotionFailure 设置值是否允许担保失败，如果不允许，直接执行 Full GC；否则检查老年代最大可用的连续空间是否大于历次晋升到老年代对象的平均大小，如果大于的话尝试 Minor GC；否则改为 Full GC。")])]),v._v(" "),l("h2",{attrs:{id:"full-gc-触发条件"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#full-gc-触发条件"}},[v._v("#")]),v._v(" FULL GC 触发条件")]),v._v(" "),l("ol",[l("li",[v._v("新生代空间不足")]),v._v(" "),l("li",[v._v("永久代空间满了")]),v._v(" "),l("li",[v._v("CMS GC 时出现 promotion failed 和 concurrent mode failure")]),v._v(" "),l("li",[v._v("老年代最大可用的连续空间小于历次晋升到老年代对象的平均大小")])]),v._v(" "),l("h2",{attrs:{id:"判断对象是否存活"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#判断对象是否存活"}},[v._v("#")]),v._v(" 判断对象是否存活")]),v._v(" "),l("p",[v._v("会有两次检查。第一次扫描并标记不可达对象，并在其中进行筛选没有事先 finalize()或已经调用过 finalize()的对象，让其死亡。第二次检查，会判断该对象是否有必要执行 finalize()方法，稍后会由优先级较低的 Finalizer 线程执行，如果在执行前被重新引用，可以避免死亡。")]),v._v(" "),l("h2",{attrs:{id:"三色标记算法"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#三色标记算法"}},[v._v("#")]),v._v(" 三色标记算法")]),v._v(" "),l("p",[v._v("它是描述追踪式回收器的一种有效的方法，利用它可以推演回收器的正确性。")]),v._v(" "),l("p",[v._v("我们将对象分成三种类型：")]),v._v(" "),l("ol",[l("li",[v._v("黑色：根对象，或者该对象与它的子对象都被扫描过（对象被标记了，且它的所有 field 也被标记完了）。")]),v._v(" "),l("li",[v._v("灰色：对象本身被扫描，但还没扫描完该对象中的子对象（它的 field 还没有被标记或标记完）。")]),v._v(" "),l("li",[v._v("白色：未被扫描对象，扫描完成所有对象之后，最终为白色的为不可达对象，既垃圾对象（对象没有被标记到）。")])]),v._v(" "),l("h2",{attrs:{id:"垃圾回收算法"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#垃圾回收算法"}},[v._v("#")]),v._v(" 垃圾回收算法")]),v._v(" "),l("ul",[l("li",[l("p",[v._v("标记清除算法")]),v._v(" "),l("p",[v._v("缺点：标记和清除的两个动作效率都不高；清楚后会产生大量不连续的空间碎片。")])]),v._v(" "),l("li",[l("p",[v._v("复制算法")]),v._v(" "),l("p",[v._v("将可用内存按容量划分为大小相等的两块，每次只使用其中的一块，一块用完了，就将存活着的对象复制到另外一块上面。")]),v._v(" "),l("p",[v._v("优点：没有碎片问题。")]),v._v(" "),l("p",[v._v("缺点：成本太高，内存小了一半。")])]),v._v(" "),l("li",[l("p",[v._v("标记整理算法")]),v._v(" "),l("p",[v._v("根据老年代的特点，提出了此算法。标记过程仍然与“标记-清除”算法一样，但后续步骤不是直接对可回收对象进行清理，而是让所有存活的对象都向一端移动，最后直接清理掉端边界以外的内存。")])]),v._v(" "),l("li",[l("p",[v._v("分代收集算法")]),v._v(" "),l("p",[v._v("新生代使用复制算法；老年代使用标记清除/标记整理算法。")])])]),v._v(" "),l("h2",{attrs:{id:"垃圾回收器"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#垃圾回收器"}},[v._v("#")]),v._v(" 垃圾回收器")]),v._v(" "),l("ul",[l("li",[l("p",[v._v("Serial 收集器")]),v._v(" "),l("p",[v._v("新生代收集器，它是最基本、发展历史最悠久的收集器。是一个单线程收集器，在垃圾收集时，必须暂停其他所有的工作线程，直到收集结束。适合运行在 Client 模式下的虚拟机。")])]),v._v(" "),l("li",[l("p",[v._v("Serial Old 收集器")]),v._v(" "),l("p",[v._v("Serial 收集器的老年代版本，同样也是单线程收集器，使用“标记-整理”算法。")])]),v._v(" "),l("li",[l("p",[v._v("ParNew 收集器")]),v._v(" "),l("p",[v._v("新生代收集器，是 Serial 收集器的多线程版本，除了 Serial 收集器外，只有它能与 CMS 收集器配合工作。")])]),v._v(" "),l("li",[l("p",[v._v("Parallel Scavenge 收集器")]),v._v(" "),l("p",[v._v("新生代收集器，也是使用复制算法的收集器，又是并行的多线程收集器。它更关注于达到一个可控制的吞吐量。其中，吞吐量=运行用户代码时间/（运行用户代码时间+垃圾收集时间）。")]),v._v(" "),l("p",[v._v("除此之外，它还有自适应调节的特性，虚拟机根据当前系统的运行情况收集性能监控信息，动态调整这些参数以提供最合适的停顿时间或者最大的吞吐量，这被称为 GC 自适应的调节策略。它是与 ParNew 收集器的一个重要区别。")])]),v._v(" "),l("li",[l("p",[v._v("Parallel Old 收集器")]),v._v(" "),l("p",[v._v("是 Parallel Scavenge 收集器的老年代版本，使用多线程和“标记-整理”算法。")])]),v._v(" "),l("li",[l("p",[v._v("CMS 收集器")]),v._v(" "),l("p",[v._v("老年代收集器，CMS 收集器是一种以获取最短回收停顿时间为目标的收集器，使用“标记-清除”算法。回收过程如下：")]),v._v(" "),l("ul",[l("li",[v._v("初始标记：需要 Stop The World，标记能直接关联到的对象。")]),v._v(" "),l("li",[v._v("并发标记：可以与用户一起工作，进行 GC Roots Tracing 的过程。")]),v._v(" "),l("li",[v._v("重新标记：需要 Stop The World，为了修正并发标记期间因用户程序继续运作而导致标记产生的那一部分对象的标记记录，停顿时间比初始标记稍长一些，远短于并发标记时间。")]),v._v(" "),l("li",[v._v("并发清除：可以与用户一起工作。")])]),v._v(" "),l("p",[v._v("优点：并发收集，低停顿。")]),v._v(" "),l("p",[v._v("缺点：吞吐量问题，CMS 对 CPU 资源敏感，会因为占用一部分线程，导致应用程序变慢，使吞吐量降低；浮动垃圾问题，并发清除阶段产生的垃圾叫做浮动垃圾；碎片问题。")])]),v._v(" "),l("li",[l("p",[v._v("G1 收集器")]),v._v(" "),l("p",[v._v("在 1.7 时被认为达到足够的商用程度，是收集器技术发展的最前沿成果之一。它是一款面向服务端应用的垃圾收集器。")]),v._v(" "),l("p",[v._v("特点：")]),v._v(" "),l("ul",[l("li",[l("p",[v._v("并行与并发")]),v._v(" "),l("p",[v._v("可以使用多个 CPU 来缩短 Stop-The-World 时间。")])]),v._v(" "),l("li",[l("p",[v._v("分代收集")]),v._v(" "),l("p",[v._v("可以管理整个 GC 堆（G1 将内存划分为多个大小相等的区域，并维护一个优先列表，优先回收回收价值最大的 Region），对不同年龄对象采用不同策略。")])]),v._v(" "),l("li",[l("p",[v._v("空间整合")]),v._v(" "),l("p",[v._v("整体上采用“标记整理”，局部采用“复制”算法实现，所以不会产生碎片。")])]),v._v(" "),l("li",[l("p",[v._v("可预测的停顿")])])]),v._v(" "),l("p",[v._v("收集过程：")]),v._v(" "),l("ul",[l("li",[v._v("初始标记：需要停顿，标记 GC Roots 能直接关联到的对象。")]),v._v(" "),l("li",[v._v("并发标记：做可达性分析，找出存活的对象。")]),v._v(" "),l("li",[v._v("最终标记：需要停顿，但可以并行执行，为了修正在并发标记期间内用户程序继续运作而导致标记产生变动的那一部分标记记录。")]),v._v(" "),l("li",[v._v("筛选回收：需要停顿，对各个 Region 的回收价值和成本进行排序，根据用户所期望的 GC 停顿时间来制定回收计划。")])])])]),v._v(" "),l("h2",{attrs:{id:"创建对象的步骤"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#创建对象的步骤"}},[v._v("#")]),v._v(" 创建对象的步骤")]),v._v(" "),l("ul",[l("li",[l("p",[v._v("检查")]),v._v(" "),l("p",[v._v("检查指令的参数是否能在常量池中定位到一个类的符号引用；检查这个符号引用代表的类是否已经被加载、解析和初始化过，如果没有就执行类加载。")])]),v._v(" "),l("li",[l("p",[v._v("分配内存")]),v._v(" "),l("p",[v._v("在类加载后，对象所需的内存已经可以确定了。")]),v._v(" "),l("ul",[l("li",[l("p",[v._v("指针碰撞")]),v._v(" "),l("p",[v._v("指的是在堆中，空闲区和非空闲区界限分明，中间放着一个指针作为分界点的指示器，所分配的过程就只是将指针向空闲空间的那边挪动一段与对象大小相等的距离。适用于 Serial、ParNew 等带 Compact 过程的收集器。")])]),v._v(" "),l("li",[l("p",[v._v("空闲列表")]),v._v(" "),l("p",[v._v("指的是已使用内存和空闲区内存交错的情况下，没办法指针碰撞，而需要维护一个列表，记录内存的可用和不可用，分配时进行更新，适用于基于 Mark-Sweep 算法的 CMS 收集器。")])])]),v._v(" "),l("p",[v._v("对分配内存空间动作进行同步处理——虚拟机采用了 CAS 配上失败重试的方式保证更新的原子性。")])]),v._v(" "),l("li",[l("p",[v._v("初始化")]),v._v(" "),l("p",[v._v("将分配到的"),l("strong",[v._v("内存空间")]),v._v("都初始化为零值（不包括对象头），可提前至 TLAB（本地分配缓存区）分配前初始化。初始化保证了不赋初值就可直接使用，程序能访问到这些字段的数据类型所对应的零值。")])]),v._v(" "),l("li",[l("p",[v._v("设置")]),v._v(" "),l("p",[v._v("对对象进行必要的设置，例如这个对象是哪个类的实例、如何才能找到元数据信息、对象的哈希码、对象的 GC 分代年龄等信息。")])]),v._v(" "),l("li",[l("p",[v._v("执行 init")]),v._v(" "),l("p",[v._v("以上步骤来说，虚拟机已经产生了一个对象，但从 Java 程序视角来看，对象创建才刚开始，因为还没有执行 init，这一步将对象按照程序员的意愿进行初始化。")])])]),v._v(" "),l("h2",{attrs:{id:"类加载过程"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#类加载过程"}},[v._v("#")]),v._v(" 类加载过程")]),v._v(" "),l("ul",[l("li",[l("p",[v._v("加载")]),v._v(" "),l("p",[v._v("通过一个类的全限定名获取定义此类的二进制字节流，将这个字节流所代表的的静态存储结构转化为元空间的运行时数据结构，同时在内存中生成一个代表这个类的 java.lang.Class 对象，作为元空间这个类的各种数据的访问入口。")])]),v._v(" "),l("li",[l("p",[v._v("验证")]),v._v(" "),l("p",[v._v("确保 Class 文件的字节流中包含的信息符合当前虚拟机的要求，并不危害虚拟机自身的安全。")]),v._v(" "),l("ul",[l("li",[v._v("文件格式验证")]),v._v(" "),l("li",[v._v("元数据验证")]),v._v(" "),l("li",[v._v("字节码验证")]),v._v(" "),l("li",[v._v("符号引用验证")])])]),v._v(" "),l("li",[l("p",[v._v("准备")]),v._v(" "),l("p",[v._v("为类变量分配内存并设置初始值，内存都将在元空间中进行分配（被 static 修饰的变量，不包括实例变量），且分配的初始值是各个对象的类初始值。（final 修饰的 static 变量除外，其在此分配对应的值）")])]),v._v(" "),l("li",[l("p",[v._v("解析")]),v._v(" "),l("p",[v._v("将常量池内的符号引用替换为直接引用的过程。")]),v._v(" "),l("ul",[l("li",[v._v("类或接口的解析")]),v._v(" "),l("li",[v._v("字段解析")]),v._v(" "),l("li",[v._v("类方法解析")]),v._v(" "),l("li",[v._v("接口方法解析")])]),v._v(" "),l("blockquote",[l("p",[v._v("符号引用：")]),v._v(" "),l("p",[v._v("符号引用以一组符号来描述所引用的目标，可以是任何形式的字面量。")]),v._v(" "),l("p",[v._v("直接引用：")]),v._v(" "),l("p",[v._v("直接引用可以是直接指向目标的指针、相对偏移量或是一个能间接定位到目标的句柄。")])])]),v._v(" "),l("li",[l("p",[v._v("初始化")]),v._v(" "),l("p",[v._v("类加载过程的最后一步，真正开始执行类中定义的 Java 字节码。（执行<clinit>()方法的过程，为静态变量赋值）")])])]),v._v(" "),l("h2",{attrs:{id:"双亲委派机制"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#双亲委派机制"}},[v._v("#")]),v._v(" 双亲委派机制")]),v._v(" "),l("p",[l("img",{attrs:{src:a(349),alt:"image-20200302170404221"}})]),v._v(" "),l("h3",{attrs:{id:"工作过程"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#工作过程"}},[v._v("#")]),v._v(" 工作过程")]),v._v(" "),l("ol",[l("li",[v._v("收到类请求；")]),v._v(" "),l("li",[v._v("请求委派给父类；")]),v._v(" "),l("li",[v._v("到启动类时，如果找不到所需的类，就传递给子加载器。")])]),v._v(" "),l("h3",{attrs:{id:"使用双亲委派的好处"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#使用双亲委派的好处"}},[v._v("#")]),v._v(" 使用双亲委派的好处")]),v._v(" "),l("ol",[l("li",[v._v("保证稳定性，类随着类加载器具有统一优先级的层次关系；")]),v._v(" "),l("li",[v._v("虚拟机只有在两个类的类名相同且加载该类的加载器均相同的情况下才判定这是一个类。若不采用双亲委派机制，同一个类有可能被多个类加载器加载，这样该类会被识别为两个不同的类，相互赋值时会有问题。")])]),v._v(" "),l("h3",{attrs:{id:"破坏双亲委派机制的场景"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#破坏双亲委派机制的场景"}},[v._v("#")]),v._v(" 破坏双亲委派机制的场景")]),v._v(" "),l("ul",[l("li",[l("p",[v._v("基础类要调用用户的代码")]),v._v(" "),l("p",[v._v("一个典型的例子就是 JNDI 服务，JNDI 现在已经是 Java 的标准服务，它的代码由启动类加载器去加载，但 JNDI 的目的就是对资源进行集中管理和查找，它需要调用由独立厂商实现并部署在应用程序的 ClassPath 下的 JNDI 接口提供者的代码，但启动类加载器不可能“认识”这些代码。")]),v._v(" "),l("p",[v._v("为了解决这个问题，Java 团队引入了线程上下文类加载器(Thread Context ClassLoader)。有了线程上下文加载器，JNDI 服务就可以使用它去加载所需要的 SPI 代码，也就是"),l("strong",[v._v("父类加载器请求子类加载器")]),v._v("去完成类加载的动作，这种行为实际上就是打通了双亲委派模型层次结构来逆向使用类加载器，实际上已经违背了双亲委派模型的一般性原则，但这也是无可奈何的事情。Java 中所有涉及 SPI 的加载动作基本上都采用这种方式，例如 JNDI、JDBC、JCE、JAXB 和 JBI 等。")])]),v._v(" "),l("li",[l("p",[v._v("用户对程序动态性的追求")]),v._v(" "),l("p",[v._v("所谓的动态性是指代码热替换、模块热部署等，简答的说就是机器不用重启，只要部署上就能用。")]),v._v(" "),l("p",[v._v("OSGi 实现模块化热部署的关键则是它自定义的类加载器机制的实现。每一个程序模块(Bundle)都有一个自己的类加载器，当需要更换一个 Bundle 时，就把 Bundle 连同类加载器一起换掉以实现代码的热替换。在 OSGi 环境下，类加载器不再是双亲委派模型中的树状结构，而是进一步发展为更加复杂的网状结构。")])])]),v._v(" "),l("h3",{attrs:{id:"打破的方法"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#打破的方法"}},[v._v("#")]),v._v(" 打破的方法")]),v._v(" "),l("p",[v._v("重写 ClassLoader 类中的 "),l("strong",[v._v("loadClass()")]),v._v(" 方法即可打破，重写 findClass()是不会打破的，它的作用是加载无法被父类加载器加载的类。")]),v._v(" "),l("h2",{attrs:{id:"tomcat-的类加载器"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#tomcat-的类加载器"}},[v._v("#")]),v._v(" Tomcat 的类加载器")]),v._v(" "),l("p",[l("img",{attrs:{src:a(350),alt:"image-20200302170828189"}})]),v._v(" "),l("ul",[l("li",[v._v("CommonLoader：Tomcat 最基本的类加载器，加载路径中的 class 可以被 Tomcat 容器本身以及各个 Webapp 访问；")]),v._v(" "),l("li",[v._v("CatalinaLoader：Tomcat 容器私有的类加载器，加载路径中的 class 对于 Webapp 不可见；")]),v._v(" "),l("li",[v._v("SharedLoader：各个 Webapp 共享的类加载器，加载路径中的 class 对于所有 Webapp 可见，但是对于 Tomcat 容器不可见；")]),v._v(" "),l("li",[v._v("WebappClassLoader：各个 Webapp 私有的类加载器，加载路径中的 class 只对当前 Webapp 可见。")])]),v._v(" "),l("blockquote",[l("ul",[l("li",[l("p",[v._v("CommonClassLoader 能加载的类都可以被 Catalina ClassLoader 和 SharedClassLoader 使用，从而实现了公有类库的共用，而 CatalinaClassLoader 和 Shared ClassLoader 自己能加载的类则与对方相互隔离。")])]),v._v(" "),l("li",[l("p",[v._v("WebAppClassLoader 可以使用 SharedClassLoader 加载到的类，但各个 WebAppClassLoader 实例之间相互隔离。")])]),v._v(" "),l("li",[l("p",[v._v("JasperLoader 的加载范围仅仅是这个 JSP 文件所编译出来的那一个.Class 文件，它出现的目的就是为了被丢弃：当 Web 容器检测到 JSP 文件被修改时，会替换掉目前的 JasperLoader 的实例，并通过再建立一个新的 Jsp 类加载器来实现 JSP 文件的 HotSwap 功能。")])])])]),v._v(" "),l("p",[v._v("双亲委派模型要求除了顶层的启动类加载器之外，其余的类加载器都应当由自己的父类加载器加载。很显然 Tomcat 已经"),l("strong",[v._v("打破了双亲委派模型")]),v._v("，为了实现隔离性，每个 webappClassLoader 加载自己的目录下的 class 文件，不会传递给父类加载器。如果 tomcat 的 Common ClassLoade 想加载 WebApp ClassLoader 中的类，可以使用线程上下文加载器实现。")]),v._v(" "),l("h2",{attrs:{id:"jvm-性能调优"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#jvm-性能调优"}},[v._v("#")]),v._v(" JVM 性能调优")]),v._v(" "),l("h3",{attrs:{id:"常用命令"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[v._v("#")]),v._v(" 常用命令")]),v._v(" "),l("ul",[l("li",[l("p",[v._v("jps")]),v._v(" "),l("p",[v._v("显示系统内所有的 HotSpot 虚拟机进程。")])]),v._v(" "),l("li",[l("p",[v._v("jstat")]),v._v(" "),l("p",[v._v("虚拟机统计信息监视工具。")])]),v._v(" "),l("li",[l("p",[v._v("jinfo")]),v._v(" "),l("p",[v._v("Java 配置信息工具。")])]),v._v(" "),l("li",[l("p",[v._v("jmap")]),v._v(" "),l("p",[v._v("Java 内存映像工具。")])]),v._v(" "),l("li",[l("p",[v._v("jhat")]),v._v(" "),l("p",[v._v("虚拟机堆转储快照分析工具。")])]),v._v(" "),l("li",[l("p",[v._v("jstack")]),v._v(" "),l("p",[v._v("Java 堆栈跟踪工具。")])]),v._v(" "),l("li",[l("p",[v._v("HSDIS")]),v._v(" "),l("p",[v._v("JIT 生成代码反汇编。")])])]),v._v(" "),l("h3",{attrs:{id:"常用工具"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#常用工具"}},[v._v("#")]),v._v(" 常用工具")]),v._v(" "),l("ul",[l("li",[l("p",[v._v("JConsole")]),v._v(" "),l("p",[v._v("Java 监视与管理控制台。")])]),v._v(" "),l("li",[l("p",[v._v("VsualVM")]),v._v(" "),l("p",[v._v("多合一故障处理工具。")])])]),v._v(" "),l("h3",{attrs:{id:"常用参数"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#常用参数"}},[v._v("#")]),v._v(" 常用参数")]),v._v(" "),l("p",[l("strong",[v._v("参数说明")])]),v._v(" "),l("ul",[l("li",[l("p",[v._v("标准参数（-），所有的 JVM 实现都必须实现这些参数的功能，而且向后兼容；")])]),v._v(" "),l("li",[l("p",[v._v("非标准参数（-X），默认 jvm 实现这些参数的功能，但是并不保证所有 jvm 实现都满足，且不保证向后兼容；")])]),v._v(" "),l("li",[l("p",[v._v("非 Stable 参数（-XX），此类参数各个 jvm 实现会有所不同，将来可能会随时取消，需要慎重使用。")])])]),v._v(" "),l("p",[v._v("在选项名前用 “+” 或 “-” 表示开启或关闭特定的选项，例：")]),v._v(" "),l("p",[v._v("-XX:+UseCompressedOops：表示开启 压缩指针")]),v._v(" "),l("p",[v._v("-XX:-UseCompressedOops：表示关闭 压缩指针")]),v._v(" "),l("p",[l("strong",[v._v("常见参数设置")])]),v._v(" "),l("ul",[l("li",[v._v("-Xms：初始堆大小")]),v._v(" "),l("li",[v._v("-Xmx：最大堆大小")]),v._v(" "),l("li",[v._v("-Xmn：新生代大小")]),v._v(" "),l("li",[v._v("-Xss：每个线程的虚拟机栈大小")]),v._v(" "),l("li",[v._v("-XX:NewSize：新生代初始大小")]),v._v(" "),l("li",[v._v("-XX:NewSize：新生代最大值")]),v._v(" "),l("li",[v._v("-XX:MetaspaceSize：设置元数据空间初始大小（取代-XX:PermSize）")]),v._v(" "),l("li",[v._v("-XX:MaxMetaspaceSize：设置元数据空间最大值（取代之前-XX:MaxPermSize）")]),v._v(" "),l("li",[v._v("-XX:+PrintGCDetails：打印 GC 信息")])])])}),[],!1,null,null,null);_.default=t.exports}}]);