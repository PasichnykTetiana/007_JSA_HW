let input = document.getElementsByName("login")[0];
document.addEventListener("click", function (event) {
    let Click = input.contains(event.target);
    if(!Click){
        input.setAttribute("placeholder", "Введите свой логин");

    }else {
        input.setAttribute("placeholder", " ");
    }
})
