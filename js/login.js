$(function(){
    //登录切换
    $("#goRegister").on('click',function(e){
        e.preventDefault()
        $("#login").hide();
        $("#register").show();
    })
    $("#goLogin").on('click',function(e){
        e.preventDefault()
        $("#register").hide();
        $("#login").show();
    })

    //表单验证
    var form = layui.form
    form.verify({
      pass:[/^[\S]{6,12}$/,'密码必须6到12位,且不能出现空格'],
      pasw:function(value){
        if($("#rePassword").val()!==value)
        {return "两次输入的密码不对，请重新输入"}
        
      }
    })
    //登录请求
    function kuaiji(value){
        $("#alert").css("display","block")
        $("#alert")[0].innerHTML=value
        setTimeout(function(){
            $("#alert").css("display","none")
        },2000)
    }
    $("#buttonLogin").on('click',function(e){
        e.preventDefault()
        var data=$("#login").serialize()
        console.log(data)
            $.ajax({
            type: "post",
            url: "/api/login",
            data:data,
            success: function (response) {
                if(response.status==1){
                  return kuaiji(response.message)
                }
                kuaiji(response.message)
                localStorage.setItem('token',response.token)
                location.href='./index.html'
                
            }
        });
 
    })
    $("#buttonRegister").on("click",function(e){
        e.preventDefault()
        var data=$("#register").serialize()
        console.log(data)
        $.post("/api/reguser",data,function(res){
            if(res.status==1){
                console.log(res)
                return kuaiji(res.message)
              }
              kuaiji(res.message)
              $("#goLogin").click()
              
        })

    })





})
