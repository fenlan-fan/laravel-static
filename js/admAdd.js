function cancel() {
    if(confirm("取消修改？"))
    {
        document.getElementById("bookName").value = "";
        document.getElementById("author").value = "";
        document.getElementById("price").value = "";
        document.getElementById("Books").checked = true;
        document.getElementById("Art").checked = false;
        document.getElementById("Goods").checked = false;
        document.getElementById("aboutAuthor").value = "";
        document.getElementById("aboutBook").value = "";
    }
}
function submit() {
    if(!confirm("确认提交？")) return false;
    document.getElementById("bookName").style.borderColor = "";
    document.getElementById("author").style.borderColor = "";
    document.getElementById("price").style.borderColor = "";
    document.getElementById("aboutAuthor").style.borderColor = "";
    document.getElementById("aboutBook").style.borderColor = "";
    var a = true;
    if (document.getElementById("aboutBook").value == ""){
        document.getElementById("aboutBook").focus();
        document.getElementById("aboutBook").style.borderColor = "red";
        a = false;
    }
    if (document.getElementById("aboutAuthor").value == ""){
        document.getElementById("aboutAuthor").focus();
        document.getElementById("aboutAuthor").style.borderColor = "red";
        a = false;
    }
    if (document.getElementById("price").value == ""){
        document.getElementById("price").focus();
        document.getElementById("price").style.borderColor = "red";
        a = false;
    }
    if (document.getElementById("author").value == ""){
        document.getElementById("author").focus();
        document.getElementById("author").style.borderColor = "red";
        a = false;
    }
    if (document.getElementById("bookName").value == ""){
        document.getElementById("bookName").focus();
        document.getElementById("bookName").style.borderColor = "red";
        a = false;
    }
    if (document.getElementById("bookImg").value == ""){
        document.getElementById("bookImg").focus();
        document.getElementById("bookImg").style.borderColor = "red";
        a = false;
    }

    return a;
}
function size(img) {
    //限制大小为100k
    alert("?");
    prompt("sure?");
    /*
    this.ImgFileSize = Math.round(this.ImgObj.fileSize/1024*100)/100;
    alert(this.ImgFileSize);
    */
}