var spil = 1;


function lyd() {
    var afspil = document.getElementById("pp");
    if (spil == 0) {
        start.pause();
        document.getElementById("pp").innerHTML = "&#9658";
        afspil.classList.add("spil")
        afspil.classList.remove("pause")
        spil += 1;
    } else if (spil == 1) {
        start.play();
        document.getElementById("pp").innerHTML = "&#10074" + "&#10074";
        afspil.classList.add("pause")
        afspil.classList.remove("spil")
        spil -= 1;
    }
}