function getStr() {
    let fetch = document.getElementById('inpt-Box').value;
    let redo = document.getElementById('redo');
    let reset = document.getElementById('reset');
    let undo = document.getElementById('undo');
    let arr = fetch.split('');
    let size = arr.length;
    undo.addEventListener("click",function popE() {
        if (size>1) {
            arr[size--];
            console.log(arr);
    }
});
}