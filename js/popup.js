let catalog = document.querySelector(".catalog");
let main = document.querySelector(".main-catalog");
let link = document.querySelector(".catalog-link");
let loupe = document.querySelector(".loupe");
let search = document.querySelector(".search");
let loupeButton = document.querySelector(".loupe-button");
let enterButton = document.querySelector(".enter-button");
let modalEnter = document.querySelector(".modal-enter");
let enter = document.querySelector(".enter");
let searchInput = search.querySelector(".search-input");
let email = modalEnter.querySelector("[name=e-mail]");
let buttonAll = document.querySelectorAll(".fond-radio");
let fond = document.querySelectorAll(".fond");
let background = document.querySelector(".background");
let feedbackButton = document.querySelector(".feedback-button");
let feedback = document.querySelector(".background-modal");
let close = document.querySelector(".cross-big");
let yourname = feedback.querySelector(".your-name");
let product = document.querySelectorAll(".products");
let cards = document.querySelectorAll(".card-product")

if(feedbackButton){
    feedbackButton.addEventListener("click", function (evt){
        evt.preventDefault();
        feedback.classList.add("background-modal-on");
        yourname.focus();
    });
}    

if(close){
    close.addEventListener("click", function(evt) {
        evt.preventDefault();
        feedback.classList.remove("background-modal-on");
    });
}
   
if(catalog){
    catalog.addEventListener("mouseover", function(evt) {
        evt.preventDefault();
        main.classList.add("main-catalog-on");
        link.classList.add("catalog-link-on");
    });

    catalog.addEventListener("mouseout", function(evt) {
        evt.preventDefault();
        main.classList.remove("main-catalog-on");
        link.classList.remove("catalog-link-on");
    });
}

if(loupe){
    loupe.addEventListener("mouseover", function(evt) {
        evt.preventDefault();
        search.classList.add("search-on");
        loupeButton.classList.add("loupe-on");
        searchInput.focus();
    });
    
    loupe.addEventListener("mouseout", function(evt) {
        evt.preventDefault();
        search.classList.remove("search-on");
        loupeButton.classList.remove("loupe-on");
    });
}

if(enterButton){
    enterButton.addEventListener("mouseover", function(evt) {
        evt.preventDefault();
        modalEnter.classList.add("modal-enter-on");
        enter.classList.add("enter-on");
        email.focus();
    });

    enterButton.addEventListener("mouseout", function(evt) {
        evt.preventDefault();
        modalEnter.classList.remove("modal-enter-on");
        enter.classList.remove("enter-on");

    });
}

if(buttonAll){
    buttonAll.forEach((button, index) => {
        button.addEventListener("click", function(evt){
            evt.preventDefault();
            buttonAll.forEach((item) => {item.classList.remove("fond-radio-active")});
            button.classList.add("fond-radio-active");

            fond.forEach((items) => {items.classList.remove("fond-on")});
            fond[index].classList.add("fond-on");
            background.className = '';
            background.classList.add("background");
            background.classList.add("background-" + index);
            
        })
    });
}
