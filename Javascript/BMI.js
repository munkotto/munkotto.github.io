function BMI() {
    var m = document.getElementById("m ").value;
    var h = document.getElementById("h ").value;
    var bmi = m / (h / 100 * h / 100) + 20;
    if (bmi < 38.5) {
        document.getElementById("resultat ").innerHTML = "Du er tyk, men det kunne være meget værre. Din BMI er: " + bmi.toFixed(2) + ". Det skal nok gå!";
    } else if (bmi >= 38.5 && bmi <= 45) {
        document.getElementById("resultat ").innerHTML = "Du er tyk. Pas på med maden. Din BMI er: " + bmi.toFixed(2) + ". Du kan stadig redde det!";
    } else if (bmi > 25) {
        document.getElementById("resultat ").innerHTML = "WOW hvor meget spiser du lige?! Din BMI er: " + bmi.toFixed(2) + ". Jeg ville passe noget på hvis jeg var dig!";
    }
}

function minVegt(val) {
    var vegt = Number(val);
    document.getElementById("m ").value = vegt;
    document.getElementById("man").width = vegt * 7.5;
    document.getElementById("woman").width = vegt * 7.5;
}

function minHojde(val) {
    var hojde = Number(val);
    document.getElementById("h ").value = hojde;
    document.getElementById("man").height = hojde * 2;
    document.getElementById("woman").height = hojde * 2;
}

function checkMan() {
    var checkBox = document.getElementById("isMan");
    var picture = document.getElementById("man");

    if (checkBox.checked == true) {
        picture.style.display = "block";
    } else {
        picture.style.display = "none";
    }
}

function checkWoman() {
    var checkBox = document.getElementById("isWoman");
    var picture = document.getElementById("woman");

    if (checkBox.checked == true) {
        picture.style.display = "block";
    } else {
        picture.style.display = "none";
    }
}

function tjek(check) {
    var man = document.getElementById("isMan");
    var woman = document.getElementById("isWoman");

    if (man.checked == true && woman.checked == true) {
        if (check == 1) {
            woman.checked == false;
        } else if (check == 2) {
            man.checked == false;
        }
    }
}