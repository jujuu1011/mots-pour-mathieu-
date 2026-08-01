alert("Le script fonctionne !");
```javascript
const envelope = document.getElementById("envelope");
const button = document.getElementById("openButton");
const messageBox = document.getElementById("messageBox");
const nickname = document.getElementById("nickname");
const dateText = document.getElementById("date");
const message = document.getElementById("message");
const waiting = document.getElementById("waiting");

let currentLetter = null;
let isOpening = false;


// Détermine quelle lettre est disponible
function getAvailableLetter() {
    const now = new Date();
    const year = now.getFullYear();

    // 1er août à midi
    const startDate = new Date(year, 7, 1, 12, 0, 0);

    // Avant le début
    if (now < startDate) {
        return null;
    }

    const day = now.getDate();

    // Lettre du 1er août
    if (day === 1) {
        return messages[0];
    }

    // Lettres du 2 au 20 août à partir de 8h
    if (day >= 2 && day <= 20) {
        const availableTime = new Date(year, 7, day, 8, 0, 0);

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


// Ouvre l'enveloppe
function openEnvelope() {

    // Empêche plusieurs clics pendant l'animation
    if (isOpening) {
        return;
    }

    isOpening = true;

    currentLetter = getAvailableLetter();
    
    // Aucune lettre disponible
    if (!currentLetter) {
        waiting.classList.remove("hidden");

        waiting.innerHTML =
            "💌 La prochaine lettre sera bientôt disponible.<br>" +
            "Reviens un peu plus tard ❤️";

        isOpening = false;
        return;
    }

    // Animation de l'enveloppe
    envelope.classList.add("open");

    // Affiche la lettre après l'ouverture
    setTimeout(() => {

        messageBox.classList.remove("hidden");

        nickname.textContent = currentLetter.surnom;
        dateText.textContent = currentLetter.date;

        message.innerHTML =
            currentLetter.texte.replace(/\n/g, "<br>");

        button.style.display = "none";

    }, 900);
}


// Clic sur le bouton
button.addEventListener("click", openEnvelope);


// Clic directement sur l'enveloppe
envelope.addEventListener("click", openEnvelope);


// Petite animation de cœurs
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
```
