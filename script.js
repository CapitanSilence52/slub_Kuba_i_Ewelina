// DATA ŚLUBU
const weddingDate = new Date("2027-06-05T15:00:00+02:00").getTime();

// ODLICZANIE
function updateCountdown(){

    const now = new Date().getTime();
    const distance = weddingDate - now;

    if(distance < 0){

        document.getElementById('mainContent').style.display = 'none';
        document.getElementById('afterWedding').style.display = 'flex';

        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) /
    (1000 * 60 * 60)
    );

    const minutes = Math.floor(
    (distance % (1000 * 60 * 60)) /
    (1000 * 60)
    );

    const seconds = Math.floor(
    (distance % (1000 * 60)) / 1000
    );

    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = String(hours).padStart(2,'0');
    document.getElementById('minutes').innerText = String(minutes).padStart(2,'0');
    document.getElementById('seconds').innerText = String(seconds).padStart(2,'0');
}

setInterval(updateCountdown,1000);
updateCountdown();


// ZDJĘCIA TŁA
const images = [
    "2058.jpg",
    "2828.jpg",
    "3568.jpg",
    "4472.jpg",
    "4813.jpg",
    "4822.jpg",
    "4834.jpg",
    "5161.jpg",
    "5564.jpg",
    "21562.jpg",
    "21657.jpg",
    "21737.png",
    "24654.jpg"
];

let current = 0;

const mainBg = document.getElementById('mainBg');
const transitionBg = document.getElementById('transitionBg');

mainBg.style.backgroundImage = `url('${images[0]}')`;
transitionBg.style.backgroundImage = `url('${images[0]}')`;
setTimeout(() => {

    mainBg.style.backgroundImage = `url('${images[current]}')`;
    transitionBg.style.opacity = 0;

}, 2000);

function changeBackground(){

    current = (current + 1) % images.length;

    transitionBg.style.backgroundImage = `url('${images[current]}')`;
    transitionBg.style.opacity = 1;

    setTimeout(() => {

    mainBg.style.backgroundImage = `url('${images[current]}')`;
    transitionBg.style.opacity = 0;

    }, 2000);

}

setInterval(changeBackground, 10000);
