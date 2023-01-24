
function openNav() {
    let x = document.getElementById("pages");
    let y = document.getElementById("nav");
    x.classList.toggle("after-click");
    y.classList.toggle("nav-after-click");
}

function ValidationForm() {
    let fname = document.forms["contact-form"]["fname"];
    let lname = document.forms["contact-form"]["lname"];
    let message = document.forms["contact-form"]["message"];
    let form = document.getElementById("contact-form");
    if(fname.value == "") {
        alert("Please enter your first name.");
        fname.focus();
        return false;
    }
    if(lname.value == "") {
        alert("Please enter your last name.");
        lname.focus();
        return false;
    }
    form.action=("mailto:david.dusi@post.runi.co.il?subject=Contact Message&body=" + message.value + " " + fname.value + " " + lname.value);
    return true;
}




