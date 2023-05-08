
toast("脚本运行......")

auto("fast");

var appname = "微信",
    pkgname = "com.tencent.mm",
    act1    = "com.tencent.mm.ui.LauncherUI",
    act2    = "com.tencent.mm.plugin.fts.ui.FTSMainUI";

// 启动
if(currentPackage()!==act1)
{
    launchApp(appname);
}

// desc 搜索;id gsl
desc("搜索").findOne().click()
// sleep(2000)
setClip("兰州交通大学天佑青年")
editable(true).findOne()
press(740,130,1000)         // 长按弹出 粘贴
sleep(500)
press(160,260,100)          // 点击粘贴
click(210,2300)            // 点击返回键, 退出阻塞状态 

text("公众号").findOne()    // io 阻塞
txtclick("公众号",0)
txtclick("大学习",0)
txtclick("青年大学习",0)

// 报名
sleep(2500)
click(257,1100)
sleep(700)
click(810,850)     // 直属高校团委
sleep(700)
click(850,1100)      // 直属高校团委
sleep(700)
click(750,1100)     // 学院
sleep(700)
click(780,1970)     // 学院
sleep(700)

// 姓名
// 无法分析布局 只能使用 虚拟键盘的 复制粘贴
setClip('0000')
press(710,1500,1000)
click(170,1300)
sleep(200)
click(600,1700)         // 点击报名
sleep(500)

// 
click(600,980)
sleep(200)
for(var i=0; i<7; i++) scrollp(500);
sleep(500)
click(550,1790)
sleep(200)
click(560,1090)
sleep(200)
click(490,380)
sleep(200)
click(540,1420)

// 开始学习
sleep(3000)
click(540,1600)
toast("开始视频......")





















function scrollp(pixel) 
{
    setScreenMetrics(device.width, device.height);
    var t1 = device.width / 2,
        t2 = device.height / 2;

    // + 向下滑、 - 向上滑
    // 注意: 不能超出屏幕
    swipe(t1, t2, t1, t2 - pixel, 500)


}



// 输入字符串 并进行 坐标点击操作
function txtclick(txt,i) {

    try {
        var t1 = text(txt).findOnce(i),
            t2 = t1.bounds().centerX(),
            t3 = t1.bounds().centerY();
        t2 = (0 <= t2) && (t2 <= device.width) ? t2 : false;
        t3 = (0 <= t3) && (t3 <= device.height) ? t3 : false;

    } catch (e) {


        t1 = textStartsWith(txt).findOne()
        t2 = t1.bounds().centerX(),
            t3 = t1.bounds().centerY();

        t2 = (0 <= t2) && (t2 <= device.width) ? t2 : false;
        t3 = (0 <= t3) && (t3 <= device.height) ? t3 : false;


    }

    if (t2 && t3) {

        click(t2 + 60, t3)
        return true;    // 点击成功
    }
    else {
        log('已出界，无法点击....')
        return false;   // 点击失败
    }

}






























