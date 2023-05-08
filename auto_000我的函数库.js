






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


// 指定像素 进行滑动 
function scrollp(pixel) {
    setScreenMetrics(device.width, device.height);
    var t1 = device.width / 2,
        t2 = device.height / 2;

    // + 向下滑、 - 向上滑
    // 注意: 不能超出屏幕
    swipe(t1, t2, t1, t2 - pixel, 500)


}




//返回一个范围的 随机数
function random(t1, t2)
{
    t1 = Math.ceil(t1);
    t2 = Math.floor(t2);
    return Math.floor(Math.random() * (t2 - t1 + 1)) + t1;

}


// 判断keyboard open or close
function keyboardShow(){

    var a = shell("dumpsys input_method | grep mInputShown",true),
        b = a["result"].split(" ").slice(-1)[0];

        return b.search("true") != -1;
     
}
// sleep(2000)
// alert(keyboardShow())

























