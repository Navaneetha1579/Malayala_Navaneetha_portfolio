const text = "Python Developer | Web Developer";
let index = 0;

function typeText(){

    if(index < text.length){

        document.getElementById("typing").textContent += text.charAt(index);

        index++;

        setTimeout(typeText,100);
    }
}

typeText();

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 300){
        topBtn.style.display="block";
    }
    else{
        topBtn.style.display="none";
    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});