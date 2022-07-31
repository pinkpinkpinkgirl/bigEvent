$(function(){
    $.ajax({
        type: "get",
        url: "/my/userinfo",
        success: function (response) {
            if(response.status==1){return alert("获取数据失败")}
            console.log(response)
            renderAvatar(response.data)
           
        },

    });
    function renderAvatar(object){
        $(".avatar")[0].innerHTML=object.username.slice(0,1).toUpperCase()
        $(".wel")[0].innerHTML="欢迎："+object.username
    }
  
   

})