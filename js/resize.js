const div = document.querySelector("#pages");
function handleResize() {
    if (window.innerWidth < 600) {
        div.style.display = "none";
    } else {
        div.style.display = "flex";
    }
}
window.addEventListener("resize", handleResize);