
const hamburger = document.querySelector('.header .nav-bar-list .nav-list .hamburger');
const mobile_menu =document.querySelector('.header .nav-bar-list .nav-list ul');
const header = document.querySelector('.header .container');

hamburger.addEventListener('click',() => {
        hamburger.addEventListener('click', ()=>{
                hamburger.classList.toggle('active');
                mobile_menu.classList.toggle('active');
            })
        });
document .addEventListener('scroll',()=>{
        var scroll_position = window.scroll;
        if(scroll_position > 250){
                header.style.backgroundcolor = "#29323c";
        }
})
