


toast("脚本开始了.....")

auto.setMode("fast");

setScreenMetrics(device.width, device.height);

var act1 = "com.chaoxing.fanya.aphone.ui.course.StudentCourseActivity", // 章节页面活动
    act2 = "com.chaoxing.fanya.aphone.ui.chapter.detail.ui.ChapterDetailActivity",  //播放视频act
    task_li,
    state,
    isbottom = 0,
    stime,          // 视频开始的时间
    etime;          // 视频总时长


while(!isbottom) {

    waitForActivity(act1, 100)

    task_li = textMatches(/\d{1,2}\.\d{1,2}/).find()
    state = id("com.chaoxing.mobile:id/tv_icon").find()


    for (var i = 1; i < (task_li.size() - 1); i++)
    {

        // 确定视频 状态
        if (state[i].text() == 2) 
        {
            sleep(1000),
            log("正在刷%s的视频", task_li[i].text()),    // 日志记录
            Elementclick(state[i]);             // 进入视频播放页面
            sleep(1000);

            // 未完成时的播放按钮
            try{
                if(!id("ext-gen1047").findOne(2000).click()) log("点击未响应..."),i=i-1;
            }
            catch(e){
                log("点击未响应..."),i=i-1;
                continue;
            }

            stime = id("land_current_time").findOne().text();                   // 开始的视频时长
            etime = id("land_total_time").findOne().text().replace('/', '');    // 总时长

            // 等待视频加载(io阻塞)
            while (!(tsftime(etime) - tsftime(stime)) * 1000)
            {
                stime = id("land_current_time").findOne().text();
                etime = id("land_total_time").findOne().text().replace('/', '');

            }
            sleep(1000)
            log("需要%s秒", (tsftime(etime) - tsftime(stime) - 2))
            sleep((tsftime(etime) - tsftime(stime)-2) * 1000)
            // sleep(10)
            back();

            back();

        }
    }

    waitForActivity(act1,100)
    scrollp(device.height - 321 + 100 - 68)
    isbottom = textMatches(/已经到底啦......../).exists() ? 1 : 0;

}


// 指定元素进行 点击 
function Elementclick(ele) {
    var t1 = ele.bounds().centerX(),
        t2 = ele.bounds().centerY();

    press(t1, t2, 300)
}


// 指定像素 进行滑动 
function scrollp(pixel) {
    setScreenMetrics(device.width, device.height);
    var t1 = device.width / 2,
        // t2 = device.height / 2;
        t2 = device.height - 100

    // + 向下滑、 - 向上滑
    // 注意: 不能超出屏幕
    swipe(t1, t2, t1, t2 - pixel, 1500)
    // alert()

}


// 时间 转换函数,返回 整数 单位 秒
function tsftime(txt) {
    var t1 = txt.split(":"),
        t2;
    switch (t1.length) {
        case 2:
            t2 = Number(t1[0]) * 60 + Number(t1[1])
            break;
        case 3:
            t2 = Number(t1[0]) * 60 * 60 + Number(t1[1]) * 60 + Number(t1[2])
            break;

    }
    return t2;
}


// 输入字符串 并进行 坐标点击操作
function txtclick(txt) {

    try {
        var t1 = text(txt).findOne(),
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







