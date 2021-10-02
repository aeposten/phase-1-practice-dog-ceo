const findId = (id) => document.getElementById(id);
const imgUrl = `https://dog.ceo/api/breeds/image/random/4`;
const breedUrl = `https://dog.ceo/api/breeds/list/all`;
const dogImageContainer = findId(`dog-image-container`);
const breedListDestination = findId(`dog-breeds`);
function fetchDogPics() {
  fetch(imgUrl)
    .then((response) => response.json())
    .then((json) => postDogPics(json));
}

function fetchDogBreeds() {
  fetch(breedUrl)
    .then((response) => response.json())
    .then((json) => renderBreedList(json));
}

function postDogPics(pic) {
  pic.message.forEach((url) => {
    let dogPic = document.createElement(`img`);
    dogPic.src = url;
    dogPic.width = 200;
    dogPic.height = 200;
    dogImageContainer.appendChild(dogPic);
  });
}

function renderBreedList(breeds) {
  for (let breedKey in breeds.message) {
    const li = document.createElement("li");
    li.innerText = breedKey;

    breedListDestination.appendChild(li);
  }
}

breedListDestination.addEventListener(`click`, (e) => {
  e.target.style.color = "blue";
});

fetchDogPics();
fetchDogBreeds();
