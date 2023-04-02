var x="resources/videos/Multimedia/Videos/muelles.mp4";

function setVideo(n){
    x=n;
}
function getVideo(){
    var source = document.getElementById("get");
    source.setAttribute('src', x);
}

// 43.4687° N y 3.9777° O