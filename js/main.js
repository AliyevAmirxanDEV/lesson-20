let navBar = document.getElementById('header__nav__hamburger__btns');
let navList = document.getElementById('header__nav__list');
let bactop = document.getElementById('bactop');
let navShrink = document.getElementById('nav__sh')
let modeBtn = document.getElementById('mode__btn')


window.addEventListener('scroll' , function(){
    showBactop()
    showNavShrink()
})

navBar.addEventListener('click'  ,function(){
    navList.classList.toggle('show-header__nav__list')
})

modeBtn.addEventListener("click", function () {
    if (document.body.className != "light") {
        this.firstElementChild.src = "";
    } else {
        this.firstElementChild.src = "";
    }
    document.body.classList.toggle("light");
});

function showBactop(){
    if(scrollY > 200){
        bactop.classList.add('show-bactop')
    }
    else {
        bactop.classList.remove('show-bactop')
    }
}

function showNavShrink() {
    if (scrollY > 0) {
        navShrink.classList.add('show-shrink')
    }
    else {
        navShrink.classList.remove('show-shrink')
    }
}