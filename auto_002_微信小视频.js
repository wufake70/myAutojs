
toast("开始运行了......")




for (var i=0; i<1000; i++)
{
    sleep(2000)

    if(!id("k07")) 
    {
        scrollable(true).scrollForward();
        continue;
    }
    
    //点赞
    id("k07").click()


    // 点亮爱心
    id("a2s").click()

    // 评论
    id("bjq").click()
    sleep(60)
    className("android.widget.EditText").setText("你好")
    text("回复").click()

    // 退出评论
    id("be_").click()

    // 下一个视频    
    var a = scrollable(true)
    a.scrollForward()
    // toast(a.scrollable())

}










