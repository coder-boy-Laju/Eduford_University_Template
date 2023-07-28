const menus=document.querySelector(".menus");
const closeBtn=document.querySelector(".close");
const hedaderLink=document.querySelector(".hedader_link")

menus.addEventListener("click",()=>{
    hedaderLink.style.cssText="display:block"
    menus.style.cssText=`
    display:none; 
    `
})

closeBtn.addEventListener("click",()=>{
    hedaderLink.style.cssText=`
    display:none; 
    `
    menus.style.cssText=`
    display:block; 
    `
})