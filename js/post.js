// 1.创建一个FormData对象，直接把我们的表单传进去


$('.tm-btn-subscribe').click(function() {
    var t = $('form').serializeArray();
    console.log(t[0].value);
    if(t[0].value=='admin'&&t[1].value=='admin')
    {
        console.log("2")
        var formData = new FormData(document.forms.namedItem("login_form"));
        console.log(formData);
        // 2.通过jquery发送出去
        $.ajax({
            url: "",
            type: "POST",
            data: formData,
            processData: false,  // 告诉jQuery不要去处理发送的数据
            contentType: false   // 告诉jQuery不要去设置Content-Type请求头
        }).done(function(resp) {
            // alert('success!');
        }).fail(function(err) {
            // alert('fail!')
        })
        console.log("sb")
        window.location.href="https://superfly12138.github.io/Demo/"
        return false;

        // window.open("https://www.baidu.com")

    }
    else
        alert("用户名或密码错误");
    window.location.href="https://superfly12138.github.io/login/"
    return false;
})





