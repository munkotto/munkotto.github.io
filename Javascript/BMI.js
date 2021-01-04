function BMI() {
    var m = document.getElementById("m").value;
    var h = document.getElementById("h").value;
    h = h.replace(/,/g, '.');
    if (h < 10) {
        h *= 100;
    }
    var bmi = m / (h / 100 * h / 100);
    if (bmi < 18.5) {
        document.getElementById("resultat").innerHTML = "Du er undervægtig :O. Din BMI er: " + bmi.toFixed(2) + ". Spis noget mad. Det skulle være sundt!";
    } else if (bmi >= 18.5 && bmi <= 25) {
        document.getElementById("resultat").innerHTML = "Du er gennemsnitligt. Din BMI er: " + bmi.toFixed(2) + ". Godt klaret!";
    } else if (bmi > 25) {
        document.getElementById("resultat").innerHTML = "WOW hvor meget spiser du lige?! Din BMI er: " + bmi.toFixed(2) + ". Jeg ville passe noget på hvis jeg var dig!";
    }

}

function minVegt(val) {
    var vegt = Number(val);
    document.getElementById("m").value = vegt;
    document.getElementById("man").width = vegt * 7.5;
    document.getElementById("woman").width = vegt * 7.5;
}

function minHojde(val) {
    var hojde = Number(val);
    document.getElementById("h").value = hojde;
    if (hojde < 10) {
        hojde *= 100;
    }
    document.getElementById("man").height = hojde * 2;
    document.getElementById("woman").height = hojde * 2;
}

function checkMan() {
    var checkBox = document.getElementById("isMan");
    var picture = document.getElementById("man");
    var woman = document.getElementById("isWoman")
    var wamen = 0;

    if (checkBox.checked == true) {
        picture.style.display = "block";
    } else {
        picture.style.display = "none";
    }

    if (checkBox.checked == true && woman.checked == true) {
        wamen = 1;
    }

    if (wamen == 1) {
        woman.checked = false;
        checkWoman();
        wamen = 0;
    }
}

function checkWoman() {
    var checkBox = document.getElementById("isWoman");
    var man = document.getElementById("isMan")
    var picture = document.getElementById("woman");
    var men = 0;

    if (checkBox.checked == true) {
        picture.style.display = "block";
    } else {
        picture.style.display = "none";
    }

    if (checkBox.checked == true && man.checked == true) {
        men = 1;
    }

    if (men == 1) {
        men.checked = false;
        checkMan();
        men = 0;
    }
}