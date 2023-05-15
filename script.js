alert("     Hello! , Welcome ");

//for dark mode 
// function mode(){
//     document.querySelector(`.body`).classList.toggle("darkmode");
//     document.querySelector("button").classList.replace("btn-light","btn-warning");     
//     document.querySelector(".navbar-brand").classList.toggle("brnddarkmode");
// }

function signUp(){
    document.querySelector("#loginform").style.visibility="hidden";
    document.querySelector("#signupdiv").style.visibility="visible";
}



// //for toggling count me in invisible form
// function success(){
//     document.querySelector("#invisible").style.visibility="visible";
//     document.querySelector("#contain").style.opacity= 0;
//     document.querySelector(".butn1").classList.add("ok");
//     document.querySelector(".butn1").innerHTML= "Let's Start";  
// }
// //for closing of invisible form
// function closecount(){
//     document.querySelector("#invisible").style.visibility="hidden";
//     document.querySelector("#contain").style.opacity= 1;
// }
// // for scroll down button
// function arrow(){
//     document.querySelector("#arrow").scrollIntoView();
// }
// // dynamic timestamp for copyright
// setInterval(mytime,1000);
//     function mytime(){
//         var day = Date();
//         const year= day.slice(3,25);
//         document.querySelector("#year").innerText = year;
//     }
