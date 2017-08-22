function amountMinus1() {
    var amount = document.getElementById("amount1");
    if (amount.value >= 1)
        amount.value--;
    var totalPrice = document.getElementById("totalPrice1");
    var price = document.getElementById("price1");
    totalPrice.innerText = parseInt(price.innerText) * parseInt(amount.value);
}
function amountAdd1() {
    var amount = document.getElementById("amount1");
    amount.value++;
    var totalPrice = document.getElementById("totalPrice1");
    var price = document.getElementById("price1");
    totalPrice.innerText = parseInt(price.innerText) * parseInt(amount.value);
}

function amountMinus2() {
    var amount = document.getElementById("amount2");
    if (amount.value >= 1)
        amount.value--;
    var totalPrice = document.getElementById("totalPrice2");
    var price = document.getElementById("price2");
    totalPrice.innerText = parseInt(price.innerText) * parseInt(amount.value);
}
function amountAdd2() {
    var amount = document.getElementById("amount2");
    amount.value++;
    var totalPrice = document.getElementById("totalPrice2");
    var price = document.getElementById("price2");
    totalPrice.innerText = parseInt(price.innerText) * parseInt(amount.value);
}
function amountMinus3() {
    var amount = document.getElementById("amount3");
    if (amount.value >= 1)
        amount.value--;
    var totalPrice = document.getElementById("totalPrice3");
    var price = document.getElementById("price3");
    totalPrice.innerText = parseInt(price.innerText) * parseInt(amount.value);
}
function amountAdd3() {
    var amount = document.getElementById("amount3");
    amount.value++;
    var totalPrice = document.getElementById("totalPrice3");
    var price = document.getElementById("price3");
    totalPrice.innerText = parseInt(price.innerText) * parseInt(amount.value);
}
function amountMinus4() {
    var amount = document.getElementById("amount4");
    if (amount.value >= 1)
        amount.value--;
    var totalPrice = document.getElementById("totalPrice4");
    var price = document.getElementById("price4");
    totalPrice.innerText = parseInt(price.innerText) * parseInt(amount.value);
}
function amountAdd4() {
    var amount = document.getElementById("amount4");
    amount.value++;
    var totalPrice = document.getElementById("totalPrice4");
    var price = document.getElementById("price4");
    totalPrice.innerText = parseInt(price.innerText) * parseInt(amount.value);
}
function totalprice() {
    var totalPrice = document.getElementById("totalPrice1");
    var price = document.getElementById("price1");
    var amount = document.getElementById("amount1");
    totalPrice.innerText = parseInt(price.innerText) * parseInt(amount.value);
    amount = document.getElementById("amount2");
    var totalPrice = document.getElementById("totalPrice2");
    var price = document.getElementById("price2");
    totalPrice.innerText = parseInt(price.innerText) * parseInt(amount.value);
    amount = document.getElementById("amount3");
    var totalPrice = document.getElementById("totalPrice3");
    var price = document.getElementById("price3");
    totalPrice.innerText = parseInt(price.innerText) * parseInt(amount.value);
    amount = document.getElementById("amount4");
    var totalPrice = document.getElementById("totalPrice4");
    var price = document.getElementById("price4");
    totalPrice.innerText = parseInt(price.innerText) * parseInt(amount.value);
}