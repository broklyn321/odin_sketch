document.addEventListener("DOMContentLoaded",function(){
    
    const container= document.querySelector(".container");
    container.style.gridTemplateColumns = "repeat(256,1fr)";
    container.style.gridTemplateRows = "repeat(128,1fr)";

    const ndivs = 128*256;
   
    

    for(let i=0;i<ndivs;i++)
    {
        let div = document.createElement("div");
        
        div.addEventListener("mouseover",function(){
            div.style.backgroundColor= "black";
        })
        
        container.insertAdjacentElement("beforeend",div);
    }
})
function resetc(){
    let divs = document.querySelectorAll("div")
    divs.forEach((div) => div.style.backgroundColor ="white");
    

}