const tab = document.querySelector(".container")
    
const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");

hamburger_menu.addEventListener("click", () => {
container.classList.toggle("active");
container.style.animation = "hue 2s ease-in  infinite" ;
})
tab.addEventListener("dblclick",()=>{

    container.classList.toggle("active");

});
const sections = document.querySelectorAll('section');
const navLi = document.querySelector(".links li a");

window.addEventListener('scroll',() =>{
    let current = '';
    console.log(pageYOffset);

sections.forEach( section =>{
    const sectionTop = section.offsetTop;
    const Height = section.clientHeight;
    // console.log(Height);
    if(pageYOffset > sectionTop){
        current = section.getAttribute('id');
    }
console.log(current);
})
})


var typed = new Typed(".typing",
{
    strings:["Freelancer","Web Developer","UI Designer"],
    typeSpeed :100,
    backSpeed:60,
    loop : true,
}

)