
function openNav() {
    let x = document.getElementById("pages");
    let y = document.getElementById("nav");
    if (x.style.display === "flex") {
        document.querySelector("#pages").style.display = "none";
        document.querySelector("#nav").style.height = "75px";
        document.querySelector("#nav").style.backgroundColor = "#2d323d"
    }else {
        document.querySelector("#pages").style.display = "flex";
        document.querySelector("#nav").style.height = "auto";
        document.querySelector("#nav").style.backgroundColor = "rgba(0,0,0,.7)"
    }

}




