function clickButton(){
    alert("Hi");
}

function viewCv() {
    let pdf = document.getElementById("cv-pdf");

    if(pdf.style.display == "none"){
        pdf.style.display = "block";
    } else {
        pdf.style.display = "none";
    }
}

function download() {
    let downloadButton = document.getElementById("download-button");
    downloadButton.addEventListener("click", function() {
        var link = document.createElement("a");
        link.href = "path/to/your-pdf.pdf";
        link.download = "your-pdf.pdf";
        link.target = "_blank";
        link.click();
    });
}

function openNav() {
    let x = document.getElementById("pages");
    let y = document.getElementById("nav");
    if (x.style.display === "flex") {
        document.querySelector("#pages").style.display = "none";
        document.querySelector("#nav").style.height = "50px";
    }else {
        document.querySelector("#pages").style.display = "flex";
        document.querySelector("#nav").style.height = "auto";
    }

}


let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}
