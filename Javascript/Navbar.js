var prevScrollpos = window.pageYOffset;
var cookie = 0;
window.onscroll = function() {
    if (window.pageYOffset > 50) {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbar").style.top = "0px";
        } else {
            document.getElementById("navbar").style.top = "-60px";
        }
        prevScrollpos = currentScrollPos;
    }


    var scrollPos = window.pageYOffset;
    if (scrollPos > 1100 && scrollPos < 1750) {
        vid.play();
    } else {
        vid.pause();
    };

    var scrollCookie = window.pageYOffset

    if (scrollCookie > 4750 && scrollCookie < 5400) {
        if (cookie != 1) {
            document.getElementById("cookies").style.bottom = "40px";
            cookie = 1;
        }
    } else {
        document.getElementById("cookies").style.bottom = "-100px";
        cookie = 0;
    };
};