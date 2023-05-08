


//desc: tiktok 直播点赞 


auto();

toast("运行了........")
// console.show()

// 分辨率 1080、2340
// log(device.width,device.height)

setScreenMetrics(1080,2340)

console.time(1)

var li = clickable(true).find()
// li[].click()
log(li.length)
// press(241,544,100)


// 在进行点赞 需要考虑 人为 合理性
for(var i=0; i<15000; i++) 
{
    waitForActivity("com.ss.android.ugc.aweme.live.LivePlayActivity",20)

    press(241,544,10)   // press 持续 10ms(按住10ms)
    sleep(30)           // 需要 sleep(10) 模拟 人为 点击 情形
    press(290,660,22)
    sleep(25)
    press(300,990,2)
    sleep(35)

}

console.timeEnd(1)







