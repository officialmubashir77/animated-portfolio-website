const menu_icon = document.querySelector("#menu-icon");
const bg = document.querySelector("#bg");
const moving_circle = document.querySelector("#moving-circle");


window.addEventListener("mousemove", (details) => {
    let xVal = details.pageX ;
    let yVal = details.pageY;

    setTimeout(() => {
        moving_circle.style.top = `${yVal}px` ;
        moving_circle.style.left = `${xVal}px` ;
    }, 250);
    
})


menu_icon.addEventListener("click" , () => {
    bg.style.transform = "scale(0.8)" ;
    bg.style.borderRadius = "10px" ;
    bg.style.boxShadow = "0px 150px 45px -100px rgba(0 ,  0, 0 , 0.2 )" ; 
})


const tl = gsap.timeline() ;

gsap.from(".navitems" , {
    stagger : .3 ,
    duration : 2 ,
    y : 20 ,
    delay : 8, 
    ease : "Expo.easeInOut" ,
    opacity : 0

})
gsap.from("#sm-line" , {
    width : 0 ,
    duration : 1 ,
    ease : "Expo.easeInOut" ,
}, '-=2')
gsap.from(".left-item" , {
    stagger : .3 ,
    duration : 2 ,
    y : 20 ,
    ease : "Expo.easeInOut" ,
    opacity : 0
    
}, '-=2')
gsap.from("#right img" , {
    duration : 2 ,
    scale : 1.05 ,
    ease : "Expo.easeInOut" ,
    opacity : 0

}, '-=2')
