let text=document.getElementById("text");
let author=document.getElementById("author");
let quoteBtn=document.getElementById("quoteBtn");

quoteBtn.addEventListener("click",function(){
    quoteBtn.classList.add("loading");
    fetch("http://api.quotable.io/random").then(res=>res.json()).then(result=>{
        console.log(result);
        text.innerHTML=result.content;
        author.innerHTML=result.author;
        
    })
})