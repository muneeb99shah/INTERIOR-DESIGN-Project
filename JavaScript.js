


// document.querySelector('.cros').style.display="none"

// document.querySelector('.hamburger').addEventListener("click",()=>{

//     document.querySelector('.sideBar').classList.toggle('sideGo');

//     if(document.querySelector('.sideBar').classList.contains('sideGo')){
//         document.querySelector('.ham').style.display="inline"
//         document.querySelector('.cros').style.display="none"
//     }
//     else{
//         setTimeout(() => {
//             document.querySelector('.cros').style.display="inline"
//         }, 400);
//         document.querySelector('.ham').style.display="none"
//     }

// })


document.querySelector('.cros').style.display="none"


document.querySelector('.hamburger').addEventListener("click",()=>{

    document.querySelector('.sideBar').classList.toggle('sideGo');
    if(document.querySelector('.sideBar').classList.contains('sideGo')){
        document.querySelector('.ham').style.display="inline"
        document.querySelector('.cros').style.display="none"
    }
    else{
        setTimeout(() => {
            document.querySelector('.cros').style.display="inline"
        }, 400);
        document.querySelector('.ham').style.display="none"
    }
    
})


let sectioEl=document.getElementsByClassName("section1")
let ForwarBackwardEl=document.getElementsByClassName("forwar-backward")
const fordEL=document.getElementById("trans-forWard")
const backEL=document.getElementById("trans-backWard")



ForwarBackwardEl.addEventListener("click",()=>{
    
    section1.style.transitionProperty="width hight"
    fordEL.style.width="75vw"
    // if(sectioEl.classList.contains('section-hover')){
    //     fordEL.style.width="75vw"
    //     fordEL.style.height="100vw"
    // }

})

// document.querySelector('.forwar-backward').addEventListener("click",()=>{
//     document.querySelector('.section1').classList.toggle('section-hover');
//     if(document.querySelector('.section1').classList.contains('section-hover')){
//         document.querySelector('.trans-forWard').style.width="75vw";
//         // document.querySelector('.trans-backWard').style.display="none"
//     }
// })