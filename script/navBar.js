const navHeaderBtnBurger = document.getElementById("navHeaderBtnBurger");
const navHeaderBtnBurgerIcon = document.getElementById("navHeaderBtnBurgerIcon");
const navDivMenu = document.getElementById("navDivMenu");

navHeaderBtnBurger.addEventListener("click", () => {

    navDivMenu.classList.toggle("active");

    if(navDivMenu.classList.contains("active")){
        navHeaderBtnBurgerIcon.src = "media/icons/cross.svg";
    }else{
        navHeaderBtnBurgerIcon.src = "media/icons/bars.svg";
    }

});