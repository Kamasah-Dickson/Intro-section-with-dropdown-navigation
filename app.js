const openMenu = document.querySelector('.open-menu');
const closeMenu = document.querySelector('.close-menu');
const mobileNav = document.querySelector('.nav-wrapper');
const arrow1 = document.querySelector('.arrows1');
const arrow2 = document.querySelector('.arrows2');
const parent1 = document.getElementById('parent1');
const parent2 = document.getElementById('parent2');
const subMenu1 = document.getElementById('sub-menu1');
const subMenu2 = document.getElementById('sub-menu2');
const main = document.querySelector('main');
console.log(main);



parent1.addEventListener('click', () => {
    subMenu1.classList.toggle('sub-menu-toggle');
    if(subMenu1.classList.contains('sub-menu-toggle')){
        arrow1.style.transform ="rotate(180deg)";
    }else{
        arrow1.style.transform ="rotate(0deg)";

    }
    
});


parent2.addEventListener('click', () => {
    subMenu2.classList.toggle('sub-menu-toggle');
    if(subMenu2.classList.contains('sub-menu-toggle')){
        subMenu2.style.height = "150px";
        arrow2.style.transform ="rotate(180deg)";
    }else{
        subMenu2.style.height = "0px";
        arrow2.style.transform ="rotate(0deg)";

    }
    
});



openMenu.addEventListener('click', () => {
    mobileNav.classList.add('show-nav');
    main.classList.add('body-overlay');
    console.log("clicked");
    
});

closeMenu.addEventListener('click', () => {
    mobileNav.classList.remove('show-nav');
    main.classList.remove('body-overlay');
    
});