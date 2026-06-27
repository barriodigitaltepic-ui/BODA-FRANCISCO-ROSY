const intro = document.getElementById("intro");
const enterButton = document.getElementById("enterButton");
const music = document.getElementById("music");
const musicButton = document.getElementById("musicButton");

let playing = false;

enterButton.addEventListener("click", async () => {

    document.body.classList.remove("lock");
    intro.classList.add("hide");
    startPetals();

    try{
        await music.play();
        playing = true;
        musicButton.innerHTML = "⏸️";
    }catch(e){
        playing = false;
        musicButton.innerHTML = "🎵";
    }

});

musicButton.addEventListener("click", async () => {

    if(!playing){

        try{
            await music.play();
            playing = true;
            musicButton.innerHTML = "⏸️";
        }catch(e){}

    }else{

        music.pause();
        playing = false;
        musicButton.innerHTML = "🎵";

    }

});

/* PÉTALOS */

function startPetals(){

    const petals = document.getElementById("petals");

    setInterval(() => {

        const p = document.createElement("span");

        p.className = "petal";
        p.style.left = Math.random() * 100 + "vw";
        p.style.animationDuration = (7 + Math.random() * 7) + "s";
        p.style.opacity = .18 + Math.random() * .45;

        petals.appendChild(p);

        setTimeout(() => {
            p.remove();
        },15000);

    },720);

}

/* MODAL GALERÍA */

const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const closeModal = document.getElementById("closeModal");

document.querySelectorAll(".gallery-item img").forEach(img => {

    img.addEventListener("click", () => {

        modal.style.display = "flex";
        modalImg.src = img.src;

    });

});

closeModal.addEventListener("click", () => {

    modal.style.display = "none";

});

modal.addEventListener("click", e => {

    if(e.target === modal){

        modal.style.display = "none";

    }

});

/* CUENTA REGRESIVA */

/* Cambia aquí la fecha real de la boda */
const weddingDate = new Date("2026-11-28T18:00:00").getTime();

function updateCountdown(){

    const now = new Date().getTime();
    const distance = weddingDate - now;

    if(distance <= 0){

        document.getElementById("countdown").innerHTML = "<p>Hoy celebramos el amor.</p>";
        return;

    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    document.getElementById("days").textContent = String(days).padStart(2,"0");
    document.getElementById("hours").textContent = String(hours).padStart(2,"0");
    document.getElementById("minutes").textContent = String(minutes).padStart(2,"0");
    document.getElementById("seconds").textContent = String(seconds).padStart(2,"0");

}

setInterval(updateCountdown,1000);
updateCountdown();

/* ANIMACIONES AL HACER SCROLL */

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll(){

    revealElements.forEach(element => {

        const position = element.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if(position < screenHeight - 120){

            element.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

revealOnScroll();
