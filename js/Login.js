function checkAccount() {
    if(document.getElementById("account").value == ""){
        document.getElementById("account").style.borderColor = "red";
    }
}
function checkAccount1() {
    document.getElementById("account").style.border = "";
}
function checkPassword() {
    if(document.getElementById("password").value == ""){
        document.getElementById("password").style.borderColor = "red";
    }
}
function checkPassword1() {
    document.getElementById("password").style.border = "";
}
function check() {
    if (document.getElementById("account").value == ""){
        //alert("请输入账号");
        document.getElementById("account").focus();

        return false;
    }
    if (document.getElementById("password").value == ""){
        //alert("请输入密码");
        document.getElementById("password").focus();
        return false;
    }
    return true;
}