let bastUrl = "http://localhost/wampROOM1/twoproject/";

let username = document.querySelector("#username")
let password = document.querySelector("#pwd")
let btn = document.querySelector("#btn")
utils.on(btn, 'click', function(e) {
    // 取到用户名和密码发送后端
    // let user = username.value
    // let pwd = password.value
    // console.log(user)
    //     // 发请求
    //     // url: api/user/register.php
    //     // method: post
    //     // query: { username, pwd }
    //     // response: { code: 1, msg: '注册成功' }
    // var xhr = new XMLHttpRequest()
    //     // 2、通过open打开跟后端的链接
    //     // open有三个参数
    //     // 1. 请求的method（get/post）
    //     // 2. 请求的url
    //     // 3. 是否异步（Boolean），默认为true，一般不用传
    // xhr.open('get', 'http://localhost/wampROOM1/twoproject/project/interface/register.php')
    //     // 3、通过send来发送请求
    //     //   作为get请求send不需要任何参数
    // xhr.send(user, pwd)
    //     // 4、监听状态码的改变
    //     // 状态值：0~4五个值，代表请求的5个阶段，4代表完成
    //     // 状态码：200代表成功
    // xhr.onreadystatechange = function() {
    //     // 判断状态码和状态值是否正确
    //     if (xhr.readyState === 4) {
    //         if (xhr.status === 200) {
    //             console.log(xhr.responseText)
    //         }
    //     }
    // }
})