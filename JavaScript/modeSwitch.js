let mode = document.getElementById('mode');
mode.addEventListener('click', this.Dark);
function Dark() {
    document.getElementById('mode1').style.display="block";
    mode.style.display="none";
    document.querySelector("body").style.background= "#212529";
    let nav = document.getElementById("nav");
    nav.style.background="#15191d";
    nav.style.color="#FFFFFF";
    let boxes = document.querySelectorAll(".fronText");
    boxes.forEach(fronText => {
        fronText.style.color="#FFFFFF";
    })
    document.getElementById("bar").style.background="#15191d";
    console.log("Dark mode enable")
}
function Light() {
    document.getElementById('mode1').style.display="none";
    mode.style.display="block";
    document.querySelector("body").style.background= "#FFFFFF";
    let nav = document.getElementById("nav");
    nav.style.background="#ebecf0";
    nav.style.color="#087ea4";
    let boxes = document.querySelectorAll(".fronText");
    boxes.forEach(fronText => {
        fronText.style.color="#212529";
    })
    document.getElementById("bar").style.background="#ebecf0";
    console.log("Light mode enable")
}