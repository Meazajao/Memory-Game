const section = document.querySelector("section");
const playerLivesCount = document.querySelector("span");
let playerLives = 6;
playerLivesCount.textContent = playerLives;

const getData = () => [
    { imgSrc: "./images/bow.png", name: "bow" },
    { imgSrc: "./images/coat.png", name: "coat" },
    { imgSrc: "./images/glasses.png", name: "glasses" },
    { imgSrc: "./images/hat.png", name: "hat" },
    { imgSrc: "./images/heels.png", name: "heels" },
    { imgSrc: "./images/klocka.png", name: "klocka" },
    { imgSrc: "./images/perfym.png", name: "perfym" },
    { imgSrc: "./images/shoes.png", name: "shoes" },
    { imgSrc: "./images/bow.png", name: "bow" },
    { imgSrc: "./images/coat.png", name: "coat" },
    { imgSrc: "./images/glasses.png", name: "glasses" },
    { imgSrc: "./images/hat.png", name: "hat" },
    { imgSrc: "./images/heels.png", name: "heels" },
    { imgSrc: "./images/klocka.png", name: "klocka" },
    { imgSrc: "./images/perfym.png", name: "perfym" },
    { imgSrc: "./images/shoes.png", name: "shoes" }
];

const randomize = () => {
    const cardData = getData();
    cardData.sort(() => Math.random() - 0.5);
    return cardData;
};

const cardGenerator = () => {
    const cardData = randomize();

    cardData.forEach((item) => {
        const card = document.createElement("div");
        const face = document.createElement("img");
        const back = document.createElement("div");

        card.classList = "card";
        face.classList = "face";
        back.classList = "back";
        face.src = item.imgSrc;
        card.setAttribute("name", item.name);

        section.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);

        card.addEventListener("click", (e) => {
            card.classList.toggle("rotateCard");
            checkCard(e);
        });
    });
};

const checkCard = (e) => {
    const clickedCard = e.target;
    clickedCard.classList.add("flipped");
    const flippedCards = document.querySelectorAll(".flipped");
    const rotateCard = document.querySelectorAll(".rotateCard");

    if (flippedCards.length === 2) {
        const [card1, card2] = flippedCards;

        if (card1.getAttribute("name") === card2.getAttribute("name")) {
            flippedCards.forEach((card) => {
                card.classList.remove("flipped");
                card.style.pointerEvents = "none";
            });
        } else {
            setTimeout(() => {
                flippedCards.forEach((card) => {
                    card.classList.remove("flipped");
                    card.classList.remove("rotateCard");
                });
            }, 1000);

            playerLives--;
            playerLivesCount.textContent = playerLives;

            if (playerLives === 0) restart("Try again");
        }
    }

    if (rotateCard.length === 16) restart("You won!");
};

const restart = (text) => {
    const cardData = randomize();
    const faces = document.querySelectorAll(".face");
    const cards = document.querySelectorAll(".card");

    section.style.pointerEvents = "none";
    cardData.forEach((item, index) => {
        cards[index].classList.remove("rotateCard");

        setTimeout(() => {
            cards[index].style.pointerEvents = "all";
            faces[index].src = item.imgSrc;
            cards[index].setAttribute("name", item.name);
            section.style.pointerEvents = "all";
        }, 1000);
    });

    playerLives = 6;
    playerLivesCount.textContent = playerLives;
    setTimeout(() => window.alert(text), 100);
};

cardGenerator();
