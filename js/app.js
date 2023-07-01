const cartes = document.getElementsByClassName('carte-thematique');

function positionCercle(element, theta) {
    element.style.left = 32 + (42 * Math.cos(theta))+'%';
    element.style.top = 22 + (42 * Math.sin(theta))+'%';
}

for (let i=0; i< cartes.length; i++) {
    let angle = ((Math.PI * 2) / cartes.length)*i;
    positionCercle(cartes[i], angle);
}