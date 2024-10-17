const textarea=document.querySelector("#textarea");
const button=document.querySelector("#count");
const output=document.querySelector("#output");

button.addEventListener("click",()=>{
    if(textarea.value===""){
        output.innerHTML="Please enter "
    }
})