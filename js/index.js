const navSlide = ()=>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
 
//Toggle Nav
    burger.addEventListener('click', () => {
 
        nav.classList.toggle('nav-active');
        //burger animation
burger.classList.toggle('burger-active');
    });
 
 
}
 
navSlide();