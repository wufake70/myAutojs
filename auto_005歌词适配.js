
/**
 * app  :   歌词适配
 * desc :   导入歌单并下载。
 * 
 * 
 * 
 */

 auto()
 setScreenMetrics(device.width,device.height)
 
 var appname     = "歌词适配",             
     SearUiAct   = "com.mylrc.mymusic.activity.tab",
     mysongs     = prompt("输入歌曲数组\n形式如: [....]。");
 
 
 if(mysongs==="")
 {
     toastLog("未输入任何内容!!!!")
     exit()
 }
 mysongs = eval(mysongs)
 
 
 // 进入app界面
 if(currentActivity()!==SearUiAct)
 {
     app.launchApp(appname)
     
     //等待 必要主要控件 加载
     id("com.mylrc.mymusic:id/eEditText1").waitFor()
     sleep(1000)
     if(text("公告").exists())
     {
         // toast("有公告")
         click("取消")
     }
 }
 
 // id("com.mylrc.mymusic:id/eEditText1").setText("hello world")
 
 
 // 主页面编辑框(输入框)     id=com.mylrc.mymusic:id/eEditText1
 // id("com.mylrc.mymusic:id/eEditText1").setText("hello world")
 
 // 搜索按钮  使用坐标点击
 // var a    = text("搜索").find()
 // var temp = a[0].bounds()         // 返回的是一个 rect(矩形) 对象
 // setClip(temp.left+"、"+temp.top+"、"+temp.right+"、"+temp.bottom)   
 // click(temp.left,temp.top) 
 // 对应值 831、70、871、98 
 
 
 // 模拟输入 并下载
 for(var i=0; i<mysongs.length; i++)
 {
     waitForActivity(SearUiAct,20)
     sleep(400)
     id("com.mylrc.mymusic:id/eEditText1").setText(mysongs[i])
     txtclick("搜索")
     
     // io阻塞 不确定时长，等待主件
     // sleep(100)  
     textStartsWith("正在").waitFor()
     // 该主键消失 即 载入完成
     while(textStartsWith("正在").exists())  {};
     toast("请自动选择合适的歌曲进行下载\n5秒后，默认第一首自动下载")
     sleep(1000)
 
     // 歌曲下载 操作
     if(textStartsWith("播放").exists())
     {
         waitForActivity(SearUiAct,20)
         // 手动选择
         download()
 
         sleep(100)  // 延迟 等待组件 加载
         textStartsWith("正在载入").waitFor()
         while(textStartsWith("正在载入").exists())  {};
         textStartsWith("正在下载").waitFor()
         while(textStartsWith("正在下载").exists()) {};  
 
 
 
 
     }
     else{
 
         waitForActivity(SearUiAct,20)
 
         // 自动选择
         // click(0+(450-0)/2,168+(274-168)/2)
         clickable(true).find()[6].click()
         
         download()
 
         sleep(100)
         textStartsWith("正在载入").waitFor()
         while(textStartsWith("正在载入").exists())  {};
         // sleep(400)
         textStartsWith("正在下载").waitFor()
         while(textStartsWith("正在下载").exists()) {}; 
     }
     log("这是第 %d 首歌曲",i+1)
 
 
 }
 
 
 
 // 输入字符串 并进行 坐标点击操作
 function txtclick(txt){
 
     try{
         var t1 = text(txt).findOnce(0).bounds(),
         t2 = t1.left,
         t3 = t1.top,
         t4 = t1.right,
         t5 = t1.bottom;
     // console.show()
     // log("%s、%s、%s、%s",t2,t3,t4,t5)
     }catch(e){
         // toast("未搜到该字符串")
         
         t1 = textStartsWith(txt).findOnce(0).bounds()
         t2 = t1.left,
         t3 = t1.top,
         t4 = t1.right,
         t5 = t1.bottom;
         
         
     }
     
     click(t2+(t4-t2)/2,t3+(t5-t3)/2);
     // click(t2,t3)
 
 }
 
 
 
 // 下载函数
 function download()
 {
 
     waitForActivity(SearUiAct,20)
     sleep(100)  // 延迟等待 组件 加载
     var w = textStartsWith("无损").exists()? 1:0,
         g = textStartsWith("高品").exists()? 1:0,
         b = textStartsWith("标准").exists()? 1:0; 
 
         switch(w+g+b)
         {
             case 0:
                     toast("没找到下载内容")
                     break;
             case 1:
                     txtclick("标准")
                     break;
             case 2:
                     txtclick("高品")
                     break;
             case 3:
                     txtclick("无损")
                     break;
         }
 }
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 

