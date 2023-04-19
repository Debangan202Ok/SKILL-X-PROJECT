document.getElementById('pop').addEventListener('click', this.openWin);
document.getElementById('tab').addEventListener('click', this.openTab);
function openWin() {
    console.log("open a popuop window");
    window.open('https://en.wikipedia.org/wiki/Data_structure', null, 'popup,width=1000,height=600,left=200,top=300');
}
function openTab() {
    window.open('page2.html',null);
}
