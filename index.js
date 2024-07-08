const form = document.querySelector(".form");
const inputName = document.querySelector(".form__input_name");
const inputLink = document.querySelector(".form__input_url");
const elementsArea = document.querySelector(".section__contain-elements");
const templateNode = document.querySelector("#plantilla");
const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const nameValue = inputName.value;
  const linkValue = inputLink.value;
  const newNode = templateNode.content.querySelector(".card").cloneNode(true);
  newNode.querySelector(".card__image").src = linkValue;
  newNode.querySelector(".card__title").textContent = nameValue;
  elementsArea.append(newNode);
  form.reset();
});

initialCards.forEach(function (item) {
  const newNode = templateNode.content.querySelector(".card").cloneNode(true);
  newNode.querySelector(".card__image").src = item.link;
  newNode.querySelector(".card__title").textContent = item.name;
  elementsArea.prepend(newNode);
});

//template manual

//   const titleNode = document.createElement("p");
//   titleNode.textContent = value;
//   const newNode = document.createElement("div");
//   const imgNode = document.createElement("img");
//   imgNode.src = "https://picsum.photos/200/300?r=" + Math.random();
//   newNode.append(titleNode);
//   newNode.append(imgNode);
//   elementsArea.append(newNode);
//   form.reset();

//template auto

//funcion normal
function createCard(name, link) {}
