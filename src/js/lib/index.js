// 验证cookie是否存在
var loginDL = document.querySelector(".loginDL")
var loginZC = document.querySelector(".loginZC")
var loginHY = document.querySelector(".loginHY")
var loginTC = document.querySelector(".loginTC")
var user = document.querySelector("#user")
var cook = document.cookie;
if (cook) {
    // 已登录
    loginDL.classList.add('nologin')
    loginZC.classList.add('nologin')
    loginHY.classList.remove('nologin')
    loginTC.classList.remove('nologin')
    loginHY.classList.add('islogin')
    loginTC.classList.add('islogin')
        // user.classList.add('islogin')
        // b.innerHTML = username
}
loginTC.onclick = function() {
    function fn() {
        alert("退出成功,即将跳转登陆页面")
            // utils.setCookie('username', '', { expires: -1, path: '/' })
            // user.classList.remove('islogin')
            // 删除cookie， 切换样式
        utils.setCookie('username', '', { expires: -1, path: '/' })
        location.href = '../html/login.html'
        loginDL.classList.add('islogin')
        loginZC.classList.add('islogin')
        loginHY.classList.remove('islogin')
        loginTC.classList.remove('islogin')
        loginHY.classList.add('nologin')
        loginTC.classList.add('nologin')
    }
    fn()
}