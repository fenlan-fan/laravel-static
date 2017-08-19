function start() {
    var account=document.getElementById('account');//获得提示文字的引用
    var notice=document.getElementsByClassName('notice');//账号控件获得焦点的时候触发事件
    notice[1].style.display="none";//一开始不显示

    account.onfocus=function () {
        notice[0].style.display="block";//获得焦点时，提示文字变为显示状态
    }
    account.onblur=function () {
        //失去焦点时，提示文字变为隐藏状态
        notice[0].style.display="none"
    }

    var password=document.getElementById('password2');
    password2.onfocus=function () {
        notice[1].style.display="block";
    }
    password2.onblur=function () {
        notice[1].style.display="none";
    }
}
function submit() {
    if (document.getElementById("account").value == ""){
        document.getElementById("account").focus();
        return false;
    }else if (document.getElementById("password").value == ""){
        document.getElementById("password").focus();
        return false;
    }else if(document.getElementById("password2").value == "" || document.getElementById("password2").value != document.getElementById("password").value){
        document.getElementById("password2").focus();
        alert("密码不匹配");
        return false;
    } else if (document.getElementById("name").value == ""){
        document.getElementById("name").focus();
        return false;
    }else if (document.getElementById("age").value == ""){
        document.getElementById("age").focus();
        return false;
    }else if (document.getElementById("date").value == ""){
        document.getElementById("date").focus();
        return false;
    }else if (document.getElementById("tel").value == ""){
        document.getElementById("tel").focus();
        return false;
    }else if (document.getElementById("email").value == ""){
        document.getElementById("email").focus();
        return false;
    }
    return true;
}