let themeButton = document.getElementById("theme-button");

const toggleDarkMode = () => {
  document.body.classList.toggle("dark-mode");
}

themeButton.addEventListener("click", toggleDarkMode);

const signNowButton = document.querySelector('#sign-now-button');
//should let be const?
let count = 3;

const addSignature = (person) => {
  let name = person.name;
  let town = person.name;
  let email = person.name;

  let sign = document.querySelector('.signatures');
  var counter = document.getElementById('counter');

  let newP = document.createElement('p');
  //unit 7 and 9 step 3
 // const newSignature = () => {
    //let newSignature = document.getElementbyId('.signatures');
    newP.textContent = `🖊️ ${person.name} supports this cause.`;
 // }
  //Unit 9 step 1
  //newP.innerText = '🖊️ ' + name + ' from ' + town + ' supports this!';

  sign.appendChild(newP);
  counter.remove();
  count++;

  let newCount = document.createElement('p');
  newCount.id = 'counter';
  newCount.innerText = '🖊️ ' + count + ' people have signed this petition and support this cause.';
  sign.appendChild(newCount);
}

//validation form
const validateForm = () => {
  let containsErrors = false;
  let petitionInputs = document.getElementById("sign-petition").elements;

  //unit 9 step 1
  let person = {
    name: petitionInputs[0].value,
    hometown: petitionInputs[1].value,
    email: petitionInputs[2].value,
  }

  for (let i = 0; i < petitionInputs.length; i++) {
    if (petitionInputs[i].value.length < 2) {
      petitionInputs[i].classList.add('error');
      containsErrors = true;
    }
    else {
      petitionInputs[i].classList.remove('error');
    }
  }


  const email = document.getElementById('email');
  if (!email.value.endsWith('.com') && !email.value.endsWith('.edu')) {
    containsErrors = true;
    email.classList.add('error');
  }
  else {
    email.classList.remove('error');
  }
  if (containsErrors == false) {
    addSignature(person);
    toggleModal(person);
  }
  for (let i = 0; i < petitionInputs.length; i++) {
    petitionInputs[i].value = "";
    containsErrors = false;
  }

  //addSignature(person);
}
signNowButton.addEventListener('click', validateForm);

//unit 8 
let animation = {
  revealDistance: 150,
  initialOpacity: 0,
  transitionDelay: 0,
  transitionDuration: '2s',
  transitionProperty: 'all',
  transitionTimingFunction: 'ease'
}

//unit 9
var revealableContainers = document.getElementsByClassName("revealable");

//the name called should be consistant
//******create reveal function 
const reveal = () => {
  //unit 8 step 2 work
  for (var i = 0; i < revealableContainers.length; i++) {
    let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;
    if (topOfRevealableContainer < window.screen.height - animation.revealDistance) {
      /* add the active class to the revealableContainer's classlist */
      revealableContainers[i].classList.add("active");
    } else {
      /* remove the active class to the revealableContainer's classlist */
      revealableContainers[i].classList.remove("active");
    }
  }
}

//unit 9 step 3
function toggleModal(person) {
  const modal = document.querySelector('#thanks-modal');
  const modalContent = document.querySelector('#thanks-modal-content');
  //unit 9 step 3
  modal.style.display = 'flex';
  modalContent.textContent = 'Thank you ' + person.name + ' for supporting this';
  const intervalId = setInterval(scaleImage,500);
  setTimeout(() => {
    clearInterval(intervalId);
    modal.style.display = "none";
 }, 4000)
  
}

//unit 9 step 4
let scaleFactor = 1;
const modal = document.getElementById('thanks-modal-image');
function scaleImage(){
  if (scaleFactor === 1) {
  scaleFactor = 0.8;
} else {
  scaleFactor = 1;
}
  modal.style.transform = `scale(${scaleFactor})`;
 
  
}


//const person = addSignature();
//toggleModal(person);

//unit 8 part 2
window.addEventListener('scroll', reveal);
