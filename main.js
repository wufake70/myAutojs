toast("开始了....")

console.show()
// while(1){
//     alert(9999)
//     exit()
// }
Init = {
    "act":"com.tencent.mm.ui.LauncherUI",
    "counts":0,
    "time": [1,5],
}

// console.log(toast(engines.myEngine().cwd()));
a = engines.myEngine().getSource();

alert(a)
// engines.execScript("hello world", "toast('hello world')");
// engines.execScriptFile(a);

engines.execScriptFile(engines.myEngine().getSource())
            exit();








