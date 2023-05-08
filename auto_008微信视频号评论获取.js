console.show()
/**
 * 再循环中 重复声明变量 性能或下降
 * 在全局中声明
*/
var 更多 = null,
    展开 = null,
    t1 = null,
    t2 = null,
    li = null,
    comments = null,
    path = null,
    format = null,
    bds1 = null,
    bds2 = null,
    a = null,
    b = null,
    storage = storages.create("WXvideo_comments");       // 将一些数据 存入本地

if (!storage.get("last_counts")) {    // 如果是 0，则为 新的内容

    var name1 = prompt("文件命名为:")
    storage.put("filename", name1)
} else {
    name1 = storage.get("filename", name1)
}

Init = {
    "act": "com.tencent.mm.plugin.finder.ui.FinderHomeAffinityUI",
    "counts": storage.get("last_counts") ? storage.get("last_counts") : 0,
    "curr_counts": 0,               // 当前计数器
    "contains": [],                 // 数据容器
    "path": "/sdcard/脚本/log/" + name1 + "log.txt"

}
while (1) {
    try {
        main();
        //break
    } catch (e) {
        if (Init.contains.length == 0) {
            log("空列表")
            break
        }

        toast("出现异常，自动保存......")
        Init.contains.forEach((ii) => {
            //log("%s\n%s\n%s\n%s\n%s\n%s\n",ii[2],ii[1],ii[2],ii[3],ii[4],ii[5])
            writer(++Init.counts + "  " + ii[0] + "  " + ii[1] + "  " + ii[2] + "  " + ii[3])
            writer(ii[4] + "  " + ii[5] + "\n")

            log("写入成功, 第%s....", Init.counts)
            storage.put("last_counts", Init.counts)
            ++Init.curr_counts
        })
        Init.contains = []

        // 超过2000 重新运行 脚本
        if (Init.curr_counts >= 1000) {
            console.hide()
            engines.execScriptFile(engines.myEngine().getSource())
            try {
                exit();
            } catch (e) {
            }
        }


    }

}



//log(Init.act)

function main() {
    if (currentActivity() === Init.act) {
        //log(111)

        //评论区
        id("bjq").findOne(200).click()

        if (textStartsWith("正在加载").findOne(300)) {
            return
        }

        if (textStartsWith("展开更多").findOne(300)) {
            //var 更多 = textStartsWith("展开更多").findOne(300)
            更多 = textStartsWith("展开更多").findOne(300)
            if (更多.bounds().bottom <= 2050) {
                click(更多.bounds().centerX(), 更多.bounds().centerY())
                if (keyboardShow()) back();
                sleep(4000)
            }

        }

        //var 展开 = id("fn2").findOne(500)
        展开 = id("fn2").findOne(500)
        if (展开) {
            if (展开.bounds().bottom <= 2050) {
                展开.click()
                if (keyboardShow()) back();
                sleep(3000)
            }
        }
        展开 = id("jk3").findOne(500)
        //log(展开)
        if (展开) {
            if (展开.bounds().bottom <= 2050) {
                展开.click()
                if (keyboardShow()) back();
                sleep(3000)
            }
        }

        // var li = className("androidx.recyclerview.widget.RecyclerView").scrollable(true).depth(6).findOne(1000)
        li = className("androidx.recyclerview.widget.RecyclerView").scrollable(true).depth(6).findOne(500)

        if (!li) {
            toast("li为null")
            return
        }
        li = li.children()

        // comments = id("bga").find(200)
        comments = id("bj4").find(200)
        if (!comments) {
            toast("comments为null")
            return;
        }

        comments.forEach((i, i1) => {
            if (i1 == comments.size() - 2) return;
            //log("%s",i.text())
            // var t1 = []
            t1 = []
            i.parent().children().forEach((ii) => {
                /*处理1 ，微信界面的 两种布局 切换
                t1.push(ii.text() == "" ? "无" : ii.text())
                */

                // 处理2
                if (ii.children) {
                    for (var ii1 = 0; ii1 < 6; ii1++) {
                        if (ii.children().size() == 0) return;
                        if (ii.children()[ii1]) {
                            ii.children()[ii1].text() == "" ? t1.push("无") : t1.push(ii.children()[ii1].text())
                        }

                    }
                } else {
                    t1.push(ii.text() == "" ? "无" : ii.text())
                }

            })

            /*
            writer(t1[0] + "  " + t1[1] + "  " + t1[2] + "  " + t1[3])
            writer(t1[4] + "  " + t1[5] + "\n")
            log("写入成功, 第%s....",++Init.counts)
            */


            // 去重
            if (Init.contains.length == 0) {
                Init.contains.push(t1)

            } else {
                // 将容器后面的进行数据进行 对比
                if (Init.contains.length > 15) {
                    //var t2 = Init.contains.slice(Init.contains.length-15)
                    t2 = Init.contains.slice(Init.contains.length - 15)
                } else {
                    t2 = Init.contains
                }

                for (var ii = 0; ii < t2.length; ii++) {
                    if ((t1[3] === t2[ii][3]) && (t1[4] === t2[ii][4]) && (t1[5] === t2[ii][5])) {
                        break
                    } else if (ii == (t2.length - 1)) {
                        Init.contains.push(t1)
                        return
                    }
                }

            }
        })

        // 大于 xx 就写入并清空容器
        if (Init.contains.length > 500) {
            Init.contains.forEach((ii) => {
                //log("%s\n%s\n%s\n%s\n%s\n%s\n",ii[2],ii[1],ii[2],ii[3],ii[4],ii[5])
                writer(++Init.counts + "  " + ii[0] + "  " + ii[1] + "  " + ii[2] + "  " + ii[3])
                writer(ii[4] + "  " + ii[5] + "\n")

                log("写入成功, 第%s....", Init.counts)
                storage.put("last_counts", Init.counts)
                ++Init.curr_counts
            })
            Init.contains = []

            // 超过2000 重新运行 脚本
            if (Init.curr_counts >= 1000) {
                console.hide()
                engines.execScriptFile(engines.myEngine().getSource())
                try {
                    exit();
                } catch (e) {
                }
            }

        }

        ObjScroll(li[li.size() - 2], li[0], 500)

    } else {
        // log(111)

        if (Init.contains.length == 0) { return; }
        toast("自动保存......")
        Init.contains.forEach((ii) => {
            //log("%s\n%s\n%s\n%s\n%s\n%s\n",ii[2],ii[1],ii[2],ii[3],ii[4],ii[5])
            writer(++Init.counts + "  " + ii[0] + "  " + ii[1] + "  " + ii[2] + "  " + ii[3])
            writer(ii[4] + "  " + ii[5] + "\n")

            log("写入成功, 第%s....", Init.counts)
            storage.put("last_counts", Init.counts)
            ++Init.curr_counts
        })
        Init.contains = []

        // 切换到桌面，退出程序 删除 storage内的数据
        if (eval(prompt("要退出吗,\n将会删除相关的本地数据\n(0/1)"))) {
            try {
                storage.clear()
                exit()

            } catch (e) {
                console.trace(e)
            }

        }

        // 超过2000 重新运行 脚本
        if (Init.curr_counts >= 1000) {
            console.hide()
            engines.execScriptFile(engines.myEngine().getSource())
            try {
                exit();
            } catch (e) {
            }
        }
    }

}






function ObjScroll(a, b, t) {

    bds1 = a.bounds()
    bds2 = b.bounds()
    swipe(bds1.centerX(), bds1.top, bds1.centerX(), bds2.top, t)
    if (keyboardShow()) {

        sleep(200)
        back()
        sleep(220)
        swipe(bds1.centerX(), bds1.top + 100, bds1.centerX(), bds2.top, t)
    };

}


function writer(text) {
    // var path = Init.path;
    path = Init.path
    d = new Date(),
        y = d.getFullYear(),
        M = (d.getMonth() + 1 + "").length == 2 ? d.getMonth() + 1 : "0" + (d.getMonth() + 1),
        d2 = (d.getDate() + "").length == 2 ? d.getDate() : "0" + d.getDate(),
        h = (d.getHours() + "").length == 2 ? d.getHours() : "0" + d.getHours(),
        m = (d.getMinutes() + "").length == 2 ? d.getMinutes() : "0" + d.getMinutes(),
        s = (d.getSeconds() + "").length == 2 ? d.getSeconds() : "0" + d.getSeconds();

    if (files.exists(path)) {
        // var format = y + "-" + M + "-" + d2 + " " + h + ":" + m + ":" + s + ":\t" + text + "\n";
        format = y + "-" + M + "-" + d2 + " " + h + ":" + m + ":" + s + ":\t" + text + "\n";
        //log(format)
        files.append(path, format)
    } else {
        files.create(path)
        format = y + "-" + M + "-" + d2 + " " + h + ":" + m + ":" + s + ":\t" + text + "\n";
        //log(format)
        files.append(path, format)


    }
}

function keyboardShow() {

    // var a = shell("dumpsys input_method | grep mInputShown",true);
    a = shell("dumpsys input_method | grep mInputShown", true);
    b = a["result"].split(" ").slice(-1)[0];

    return b.search("true") != -1;

}


