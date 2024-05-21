// Fonction pour vérifier le défilement et ajuster la classe de la barre de navigation
function checkScroll() {

    let navbar = document.querySelector('.navbar');
    let hautDePage = document.getElementById('haut_de_page');
    if (window.scrollY > 40) {
        navbar.classList.add('fixed-top', 'navbarshadow');
        hautDePage.classList.remove('disabled');
    } else {
        navbar.classList.remove('fixed-top', 'navbarshadow');
        hautDePage.classList.add('disabled');
    }

}


// Appel de la fonction pour vérifier le défilement au chargement de la page
window.addEventListener('load', checkScroll);

// Ajoute un écouteur d'événement pour détecter le défilement
window.addEventListener('scroll', checkScroll);



let typeEffectTarget1 = document.querySelector(".typping_effect_h1");
let typeEffectTarget2 = document.querySelector(".typping_effect_h2");
let typeMyName = "BEMBA Eufray";
let typeMyJob = "Développeur Web et Web Mobile débutant";


function textTyppingEffect(element, text, i = 0) {
    element.textContent += text[i];

    if (i === text.length - 1) {
        // Si c'est la fin du texte, appeler textTyppingEffect pour le prochain texte
        if (element === typeEffectTarget1) {
            textTyppingEffect(typeEffectTarget2, typeMyJob);
        }
        return;
    }

    setTimeout(() => textTyppingEffect(element, text, i + 1), 50);
}

// Appel de la fonction pour "écrire" le texte on Load
window.addEventListener('load', function() {
    textTyppingEffect(typeEffectTarget1, typeMyName);
});


