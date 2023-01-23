const code = document.getElementById("code");
const text = ["Java", "Python", "C", "JavaScript", "HTML", "CSS"];
let i = 0;
let j = 0;

function type() {
    if (i < text[j].length) {
        code.innerHTML += text[j].charAt(i);
        i++;
        setTimeout(type, 50);
    } else {
        i = 0;
        j++;
        setTimeout(startTyping, 2000);

    }
}

function startTyping() {
    if(j < text.length) {
        code.innerHTML = "";
        setTimeout(type, 50);
    } else {
        j = 0;
        code.innerHTML = "";
        setTimeout(type, 50);
    }

}

startTyping();
