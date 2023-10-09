let navlist = document.getElementById("navlist");
let hamburger = document.getElementById("hamburger")
function hide()
{
    hamburger.classList.toggle("cross");
    if (navlist.style.display=='none') {
        navlist.style.display ='block'
    } else {
        navlist.style.display ='none'
    }
    // if (hamburger.class) {
        
    // }
}
// const myNav = document.getElementById('mynav');
// window.onscroll = function () { 
//     if (document.body.scrollTop >= 50 ) {
//         // myNav.classList.add("nav-colored");
//         // myNav.classList.remove("nav-transparent");
//         myNav.style.backgroundColor = "rgb(255,255,255,1)"
//     } 
//     // else {
//     //     // myNav.classList.add("nav-transparent");
//     //     // myNav.classList.remove("nav-colored");
//     // }
// };
// $(document).ready(function(){
//     $(window).scroll(function(){
//         var scroll = $(window).scrollTop();
//         if (scroll > 1) {
//           $(".nav").css("background" , "white");
//         }
  
//         else{
//             $(".nav").css("background" , "#333");  	
//         }
//     })
// })