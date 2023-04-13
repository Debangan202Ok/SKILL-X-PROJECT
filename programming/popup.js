document.getElementById('pop').addEventListener('click', this.openWin);

function openWin(ev) {
    console.log("open a popuop window");
    let win = window.open('https://en.wikipedia.org/wiki/Data_structure', null, 'popup,width=1000,height=600,left=200,top=300');
}