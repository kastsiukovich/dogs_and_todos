//https://dog.ceo/dog-api/

const newDog = document.querySelector('#new-dog');
const DOG_URL = 'https://dog.ceo/api/breeds/image/random'

let cardDogs = document.querySelector('#dogs');

const getFotoDogs = () => {
   fetch(`${DOG_URL}`).then(
      response => {
         return response.json();
      }
   )
      .then(
         data => {

            cardDogs.innerHTML = '';
            cardDogs.innerHTML = `<div class="card blue-grey darken-1">
            <div class="card-content white-text">
            <img src=${data.message} alt="dog">  
            <span class="card-title">Good boy or good girl!</span>
            </div>
            </div>`
         }
      )
}
getFotoDogs();

const newFotoDogs = () => {
   fetch(`${DOG_URL}`).then(
      response => {
         return response.json();
      }
   )
      .then(
         data => {
            cardDogs.innerHTML += `<div class="card blue-grey darken-1">
            <div class="card-content white-text">
            <img src=${data.message} alt="dog">  
            <span class="card-title">Good boy or good girl!</span>
            </div>
            </div>`
         }
      );
}
newFotoDogs();
newFotoDogs();

newDog.addEventListener('click', newFotoDogs)

const moreDog = document.querySelector('#more-dog');
moreDog.addEventListener('click', function () {
   newFotoDogs();
   newFotoDogs();
   newFotoDogs();
})

function checkPosition() {
   const height = document.body.offsetHeight;
   const screenHeight = window.innerHeight;
   const scrolled = window.scrollY;
   const threshold = height - screenHeight / 100;
   const position = scrolled + screenHeight;
   if (position >= threshold) {
      newFotoDogs();
   }
}
const scroll = () => {
   window.addEventListener("scroll", checkPosition);
}
scroll()

