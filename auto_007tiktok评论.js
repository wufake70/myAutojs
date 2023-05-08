
toast("开始运行了......");
auto();

setScreenMetrics(device.width, device.height);

var w = device.width,
    h = device.height,
    act1 = "com.ss.android.ugc.aweme.detail.ui.DetailActivity",
    ft = open("/sdcard/脚本/rnm.txt", "r", "utf-8"),      // 文件读取
    rnm = eval(ft.read());


for (var i = 0; i <= 100; i++) {

    sleep(random(5,9)*1000);

    if (currentActivity() === act1) {
        // 点开评论区
        id("anl").findOne().click();
        sleep(1500);    // 等待全部评论加载完成 
        editable(true).findOne().setText(rnm[i]);
        id("aom").findOne().click();
        //id("d5l").findOne().click();  // 点红心
        click(w * 0.8, h * 0.2);  // 890,450
        sleep(200);
        swipe(w / 2, h / 2 + 600, w / 2, h / 2 - 500, 500);
        log("第%d个视频",i+1);
    }
}

























