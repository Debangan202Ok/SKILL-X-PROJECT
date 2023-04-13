window.addEventListener('scroll', reveal);

function reveal() {
    var rev = document.querySelectorAll('.reveal');

    for(var i =0; i<rev.length; i++) {
        var winheight = window.innerHeight;
        var revtop = rev[i].getBoundingClientRect().top;
        var revpoint = 150;
        if (revtop < winheight - revpoint) {
            rev[i].classList.add('active')
        }
        else {
            rev[i].classList.remove('active')
        }
    }
}