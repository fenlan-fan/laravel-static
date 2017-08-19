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
    return confirm("确认提交？");
}
