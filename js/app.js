const cartes = document.getElementsByClassName('carte-thematique');

function positionCercle(element, theta) {
    element.style.left = 37 + (40 * Math.cos(theta))+'%';
    element.style.top = 22 + (42 * Math.sin(theta))+'%';
}

for (let i=0; i< cartes.length; i++) {
    let angle = ((Math.PI * 2) / cartes.length)*i;
    positionCercle(cartes[i], angle);
}


const deroulant = document.getElementById("deroulant");
console.log(deroulant);
const sousmenu = document.getElementById("sous-menu");
console.log(sousmenu);

let classes = sousmenu.classList;
console.log(classes);

deroulant.addEventListener("click", function () {
    sousmenu.classList.toggle("visible");
    console.log("clic reussi");
});