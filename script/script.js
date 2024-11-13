

const section = document.querySelector("section");
const playerLivesCount = document.querySelector("span");
const playerLives = 6;

playerLivesCount.textContent = playerLives;

// generate data

const getData = () => [
    { imgSrc: "./images/bow.png", name:"a bow"},
    { imgSrc: "./images/coat.png", name:"coat"},
    { imgSrc: "./images/glasses.png", name:"glasses"},
    { imgSrc: "./images/hat.png", name:"hat"},
    { imgSrc: "./images/heels.png", name:"heels"},
    { imgSrc: "./images/klocka.png", name:"klocka"},
    { imgSrc: "./images/perfym.png", name:"perfym"},
    { imgSrc: "./images/shoes.png", name:"shoes"},
    { imgSrc: "./images/bow.png", name:"a bow"},
    { imgSrc: "./images/coat.png", name:"coat"},
    { imgSrc: "./images/glasses.png", name:"glasses"},
    { imgSrc: "./images/hat.png", name:"hat"},
    { imgSrc: "./images/heels.png", name:"heels"},
    { imgSrc: "./images/klocka.png", name:"klocka"},
    { imgSrc: "./images/perfym.png", name:"perfym"},
    { imgSrc: "./images/shoes.png", name:"shoes"},
];

const randomaize = () => {
    const cardData = getData();
    cardData.sort( () => Math.random() - 0.5);
   return cardData;
};

const cardGenerator = () => {
    const cardData = randomaize(); 
 
    cardData.forEach((item) => {
    const card = document.createElement("div");
    const face = document.createElement("img");
    const back = document.createElement("div");
    card.classList = "card";
    face.classList = "face";
    back.classList = "back";

    face.src = item.imgSrc;

    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);

    });
    
   
};

cardGenerator ();
