/**
 * storages模块提供了保存简单数据、用户配置等的支持。保存的数据除非应用被卸载或者被主动删除，否则会一直保留。
storages支持number, boolean, string等数据类型以及把Object, Array用JSON.stringify序列化存取。

storages保存的数据在脚本之间是共享的，任何脚本只要知道storage名称便可以获取到相应的数据，因此它不能用于敏感数据的储存。 
storages无法像Web开发中LocalStorage一样提供根据域名独立的存储，因为脚本的路径随时可能改变。
 * 
 */

// 例如在一个脚本中，创建名称为ABC的存储并存入a=123:
// var storage = storages.create("ABC");
storage = storages.create("WXvideo_comments")

// storage.put("a", 123);       // 放入某个值

a = storage.get("a")            // 取出某个值

// a = storage.put('a',9)          // 修改某个值
// a = storage.get("counts")

// 移除该本地存储的所有数据。不返回任何值。
storage.clear()

a = storage.get("last_counts")
alert(a)








