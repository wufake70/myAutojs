// qq/微信 窗口 自动输入内容 并发送

for(var i=0;i<500;i++)
{
    //sleep(100)

    // qq
    //通过类名 查找输入框控件 并输入文本    ,widget 小装置
    //className("android.widget.EditText").setText('你干嘛！！！')

    //发送 小视频评论
    //text("说点什么...").click()
    //id("text_input").setText("nb!!")

    //微信
    className("android.widget.EditText").setText("nb!!")

    //通过文本属性 查找 发送控件 并点击
    text('发送').click()


}