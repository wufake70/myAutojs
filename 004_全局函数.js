

auto()      // 确保无障碍模式已经开启


// sleep 休眠函数

console.show()
//currentPackage()、currentActivity()
log("当前运行的应用包:\n%s",currentPackage())
log("当前的activity:\n%s",currentActivity())


//setClip() 设置剪贴板内容
// setClip("hello auto.js")
//getClip() 获取剪贴板内容
// const clip = getClip()
// log('剪贴板的内容是:\n\t%s',clip)


toast("异步的弹出内容")     // 不会阻塞程序
toastLog("相当于 toast + log")


//waitForActivity()     等待指定的活动(阻塞状态),参数 轮询的时间间隔
// console.time("阻塞 ")
// waitForActivity("com.chaoxing.mobile.main.ui.MainTabActivity",200)
// console.timeEnd("阻塞 ")

//waitForPackage(package[, period = 200])同上



//exit()   退出脚本
// exit()   原理 抛出异常 结束程序
// log('9999')


// try{}catch{}     捕获异常
// try{
//     exit()
// }catch(e){

//     log(e)
//     log("9999")
// }


// random() 返回一个随机数，
// toast(random(1,3))      // 左闭右开
// toast(random())         // 默认 [0,1)






















































