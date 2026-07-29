const envelope = document.getElementById("envelope");
const button = document.getElementById("openButton");
const messageBox = document.getElementById("messageBox");
const nickname = document.getElementById("nickname");
const dateText = document.getElementById("date");
const message = document.getElementById("message");
const waiting = document.getElementById("waiting");

let currentLetter = null;


// Détermine quelle lettre est disponible
function getAvailableLetter() {

    const now = new Date();

    // Mois août = 7 en JavaScript
    const year = now.getFullYear();

    let startDate = new Date(year, 7, 1, 12, 0, 0);

    // Avant le début
    if (now < startDate) {
        return null;
    }


    let day = now.getDate();

    // Jour 1 après midi
    if (day === 1 && now >= startDate) {
        return messages[0];
    }


    // Du 2 au 20 août à partir de 8h
    if (day >= 2 && day <= 20) {

        let availableTime = new Date(year, 7, day, 8, 0, 0);

        if (now >= availableTime) {
            return messages[day - 1];
        }
    }


    // Après le 20 août
    if (day > 20) {
        return messages[19];
    }


    return null;
}


// Quand on clique sur l'enveloppe
button.addEventListener("click", () => {

    currentLetter = getAvailableLetter();


    if (!currentLetter) {

        waiting.classList.remove("hidden");
        waiting.innerHTML =
        "💌 La prochaine lettre sera bientôt disponible. Reviens un peu plus tard ❤️";

        return;
    }


    envelope.classList.add("open");

    setTimeout(() => {

        messageBox.classList.remove("hidden");

        nickname.textContent = currentLetter.surnom;

        dateText.textContent = currentLetter.date;

        message.innerHTML =
        currentLetter.texte.replace(/\n/g, "<br>");

        button.style.display = "none";

    }, 900);

});


// Petite animation de coeurs
function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-20px";
    heart.style.fontSize = "20px";
    heart.style.animation = "float 4s linear";

    document.body.appendChild(heart);


    setTimeout(() => {
        heart.remove();
    }, 4000);
}


setInterval(createHeart, 800);
