

// 控制台 展现出来，可用来 查看报错
console.show()  

/*
toastLog(app.versionCode)           //版本号
toastLog(app.versionName)           //版本名称
toastLog(app.autojs.versionCode)
toastLog(app.autojs.versionName)
*/

// 通过app的名称 启动一个app
// app.launchApp("抖音")

//通过 app的包名 打开app
// alert(app.getPackageName("学习通"))
//app.launchApp(app.getPackageName("抖音"))

//打开某个app的 setting 页面
//app.openAppSetting(app.getPackageName("Auto.js"))

//打开某个网址
// app.openUrl("https://www.baidu.com")


// 打开文件
// app.editFile("/storage/emulated/0/autojs/000.txt")

// 发送邮件

// app.sendEmail({
//     email   : "3239579817@qq.com",// 接收人
//     subject : "hello world",    // 标题
//     text    : "hello world"     // 正文

// })


























