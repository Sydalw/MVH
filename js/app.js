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
const sousmenu = document.getElementById("sous-menu");
let classes = sousmenu.classList;

deroulant.addEventListener("click", function () {
    sousmenu.classList.toggle("visible");
});


const appear = document.querySelector('#animated1'); 
const appear2 = document.querySelector('#animated2'); 
const appearForm = document.querySelector('#animatedForm'); 

const fadeinleft = function(entries){
    entries.forEach(entry => {
        if(entry.isIntersecting){
        entry.target.classList.add('fadeinleft');
        }else{
        entry.target.classList.remove('fadeinleft');
        }
    });
}

const fadeinform = function(entries){
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('fadeinform');
      }else{
        entry.target.classList.remove('fadeinform');
      }
    });
}

const io = new IntersectionObserver(fadeinleft);
const io2 = new IntersectionObserver(fadeinform);
io.observe(appear);
io.observe(appear2);
io2.observe(appearForm);
