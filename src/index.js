import './js/config';
import styles from './scss/main.scss';
import tplAbout from './html/about.tpl.html';
import tplAdmin from './html/admin.tpl.html';
import tplContact from './html/contact.tpl.html';
import tplHome from './html/home.tpl.html';
import toggleNav from './js/toggle_nav';

const d = document,
    main = d.getElementById("main"),
    footerYear = d.getElementById("footerYear");

footerYear.textContent = new Date().getFullYear();
toggleNav();

addEventListener('DOMContentLoaded', e => {
    main.innerHTML = tplHome;
})

d.addEventListener('click', e => {
    if(e.target.matches('a[href="#"]')) {
        e.preventDefault();
        header.classList.remove("is-active");
        headerBtn.classList.remove("is-active");
        main.classList.remove("is-active");  
    } 

    if(e.target.matches('#home')) main.innerHTML = tplHome;
    if(e.target.matches('#about')) main.innerHTML = tplAbout;
    if(e.target.matches('#contact')) main.innerHTML = tplContact;
    if(e.target.matches('#admin')) main.innerHTML = tplAdmin;     

})




