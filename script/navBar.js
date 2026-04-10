const navHeaderBtnBurger = document.getElementById("navHeaderBtnBurger");
const navHeaderBtnBurgerIcon = document.getElementById("navHeaderBtnBurgerIcon");
const navDivMenu = document.getElementById("navDivMenu");

const aboutBtn = document.getElementById("aboutBtn");
const contactBtn = document.getElementById("contactBtn");

const test = document.getElementById("navHeader");

navHeaderBtnBurger.addEventListener("click", toggleNavBar);
aboutBtn.addEventListener("click", toggleNavBar);
contactBtn.addEventListener("click", toggleNavBar);

function toggleNavBar (){

    if(typeof banner != "undefined"){
        banner.classList.add("none");
    }

    navDivMenu.classList.toggle("active");

    if(navDivMenu.classList.contains("active")){
        navHeaderBtnBurgerIcon.src = "media/icons/cross.svg";
        test.style.position = "fixed";
    }else{
        navHeaderBtnBurgerIcon.src = "media/icons/bars.svg";
        test.style.position = "relative";
    }
};