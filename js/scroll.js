window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.querySelector("#nav").style.backgroundColor = "rgba(0,0,0,.7)"
    } else {
        document.querySelector("#nav").style.backgroundColor = "#2d323d"
    }
}