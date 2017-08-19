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