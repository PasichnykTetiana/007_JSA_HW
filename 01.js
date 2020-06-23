let price = document.querySelectorAll("b"),
    check = document.getElementsByName("c"),
    s = document.getElementById("s"),
    m = document.getElementById("m"),
    l = document.getElementById("l"),
    arr = [bacon = 3,
        cheese = 2,
        tomato = 1,
        olives = 2],
    sum = document.getElementById("sum"),
    total = 0;
for (let i=0; i<price.length; i++){
    price[i].innerHTML = " " + arr[i];
}
let t=0,
    pizza=3;
s.onclick = function () {
    pizza=3;
    total=0;
    for (let i=0; i<price.length; i++){
        price[i].innerHTML = " " + arr[i];
        check[i].value = arr[i];
        if (check[i].checked){
            total+=Number(check[i].value);

        }
        console.log(total)
    }
    sum.innerHTML =3+total;
};
m.onclick = function () {
    pizza=4;
    total=0;
    for (let i=0; i<price.length; i++){
        price[i].innerHTML = " " + arr[i]*2;
        check[i].value = arr[i]*2;
        if (check[i].checked){
            total+=Number(check[i].value);
        }
        console.log(total)
    }
    sum.innerHTML = pizza+total;
};
l.onclick = function () {
    pizza = 5;
    total=0;
    for (let i=0; i<price.length; i++){
        price[i].innerHTML = " " + arr[i]*4;
        check[i].value = arr[i]*4;
        if (check[i].checked){
            total+=Number(check[i].value);
        }
        console.log(total)
    }
    sum.innerHTML = pizza + total;
};

for (let i=0; i<check.length; i++){
    check[i].onchange = OBH;
}
function OBH(){
    let x = this.innerHTML;
    if (this.checked) {
        t=this.value;
        console.log(t)
    }
    else {
        t=-this.value;

        console.log(t)
    }
    total+=Number(t);
    sum.innerHTML = pizza + total;
    console.log(total);
}
// регистрация события загрузки документа.
if (window.addEventListener) window.addEventListener("load", init, false);

function init() {
    form1.userName.onchange = nameOnChange;
    form1.email.onchange = emailOnChange;
    form1.city.onchange = cityOnChange;
    form1.street.onchange = streetOnChange;
    form1.apartment.onchange = apartmentOnChange;
    form1.onsubmit = onsubmiHandler;
}
function validate(elem, pattern) {
    let res = elem.value.search(pattern);
    if (res == -1) elem.className = "invalid"; // установка CSS класса
    else elem.className = "valid";
}

function nameOnChange() {
    let pattern = /\S/;
    validate(this, pattern); // отправит в валидейт то собітие
}

function emailOnChange() {
    let pattern =  /\d{9}/;
    validate(this, pattern);
}

function cityOnChange() {
    let pattern = /\S/;
    validate(this, pattern);
}
function streetOnChange() {
    let pattern = /\S/;
    validate(this, pattern);
}
function apartmentOnChange() {
    let pattern = /^\d+$/;
    validate(this, pattern);
}
function onsubmiHandler() {
    let invalid = false;
    for (let i = 0; i < form1.elements.length; ++i) {
        let e = form1.elements[i];
        console.dir(e);
        if (e.type == "text" && e.onchange) {
            e.onchange();
            if (e.className == "invalid") invalid = true;
        }
    }

    if (invalid) {
        alert("Допущены ошибки при заполнении формы.");
        return false;
    }

}