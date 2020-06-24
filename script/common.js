//main.js

//load
window.addEventListener("load",function(){
    //console.log("loaded");
    
    //#top-logo.play
    //interval
    setInterval(function(){
        //console.log("play")
        var top_logo = document.querySelector("#top-logo");
        top_logo.classList.remove("play");
        setTimeout(function(){
            top_logo.classList.add("play");
        },10);
    },7000);
});