var username = $('#username')
var password = $('#pwd')

$("#btn").on("click", function() {
    // console.log(username.val())
    // console.log(password.val())
    $.post("http://localhost/wampROOM1/twoproject/project/interface/login.php", {
        user: username.val(),
        pwd: password.val()
    }, function(data) {
        console.log(data);
        if (data.flag) {
            alert("登录成功");
            location.href = '../html/index.html';
            document.cookie = "username=" + username.val();
        } else {
            alert("登录失败")
            location.href = '../html/login.html'
        }
    }, "json");
});