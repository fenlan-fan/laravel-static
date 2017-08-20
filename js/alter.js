function start() {
    var bookName = document.getElementById("bookName").value;
    var price = document.getElementById("price").value;

    var surplus = document.getElementById("surplusAmount").value;
    var authorInfo = document.getElementById("authorInfo").value;
    var bookInfo = document.getElementById("bookInfo").value;
    function cancel() {
        if(confirm("取消修改？")){
            document.getElementById("bookName").value = bookName;
            document.getElementById("price").value = price;
            document.getElementById("surplusAmount").value = surplus;
            document.getElementById("authorInfo").value = authorInfo;
            document.getElementById("bookInfo").value = bookInfo;
            document.getElementById("Books").checked = true;
            document.getElementById("Art").checked = false;
            document.getElementById("Goods").checked = false;
            var date = new Date();
            var year = date.getFullYear();
            var month = date.getMonth() + 1;
            var day = date.getDate();
            var time = year.toString() + "-" + month.toString() + "-" + day.toString();
            document.getElementById("lastTime").value = time;
        }
    }
    globalVar = cancel;
}

function  cancel() {
    globalVar();
}
function submit() {
    var a = true;
    if(confirm("确认提交")){
        document.getElementById("bookInfo").style.borderColor = "";
        document.getElementById("authorInfo").style.borderColor = "";
        document.getElementById("surplusAmount").style.borderColor = "";
        document.getElementById("price").style.borderColor = "";
        document.getElementById("bookName").style.borderColor = "";
        if (document.getElementById("bookInfo").value == ""){
            document.getElementById("bookInfo").focus();
            document.getElementById("bookInfo").style.borderColor = "red";
            a = false;
        }
        if (document.getElementById("authorInfo").value == ""){
            document.getElementById("authorInfo").focus();
            document.getElementById("authorInfo").style.borderColor = "red";
            a = false;
        }
        if (document.getElementById("surplusAmount").value == ""){
            document.getElementById("surplusAmount").focus();
            document.getElementById("surplusAmount").style.borderColor = "red";
            a = false;
        }
        if (document.getElementById("price").value == ""){
            document.getElementById("price").focus();
            document.getElementById("price").style.borderColor = "red";
            a = false;
        }
        if (document.getElementById("bookName").value == ""){
            document.getElementById("bookName").focus();
            document.getElementById("bookName").style.borderColor = "red";
            a = false;
        }
    }else {
        return false;
    }
    return a;
}