document.getElementById("media").innerHTML = "Media Query!";
document.getElementById("media").style.color="#105c9e";
document.getElementById("media").style.fontSize="24px";

function mediaQuery(x){
    if(x.matches){
        document.body.style.backgroundColor ='#21c1c1';
        document.body.style.color ='#fff';
        document.body.style.fontSize ='20px';
        document.body.style.textAlign ='Center';
        document.body.style.marginTop ='300px';
        document.body.style.fontFamily ='cursive';      
    
    }else{
        document.body.style.backgroundColor ='#c97edb';
        document.body.style.color ='#fff';
        document.body.style.fontSize ='20px';
        document.body.style.textAlign ='Center';
        document.body.style.marginTop ='300px';
        document.body.style.fontFamily ='cursive';       
    }
}

var x = window.matchMedia("(max-width:700px)")
mediaQuery(x)
x.addListener(mediaQuery);
