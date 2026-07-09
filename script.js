// ======================================
// BIRTHDAY WEBSITE - PART 3A
// Core Logic
// ======================================

// Elements
const hero = document.querySelector(".hero");
const giftBtn = document.getElementById("giftBtn");
const giftSection = document.getElementById("giftSection");
const giftBox = document.querySelector(".gift-box");
const surpriseSection = document.getElementById("surpriseSection");

const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");

const typingText = document.getElementById("typingText");

// ======================================
// TYPEWRITER MESSAGE
// ======================================

const message =
"Dear Pathan Fardin 💙\n\nHappy 23rd Birthday, Brother!\nMay Allah bless you with happiness, success, good health and endless achievements. Thank you for being an amazing friend. Stay strong and keep smiling. 🎂🎉";

let textIndex = 0;

function typeWriter(){

    if(textIndex < message.length){

        if(message.charAt(textIndex) === "\n"){

            typingText.innerHTML += "<br>";

        }else{

            typingText.innerHTML += message.charAt(textIndex);

        }

        textIndex++;

        setTimeout(typeWriter,35);

    }

}

typeWriter();

// ======================================
// MUSIC BUTTON
// ======================================

let musicPlaying = false;

musicBtn.addEventListener("click",function(){

    if(musicPlaying){

        bgMusic.pause();
        musicBtn.innerHTML = "🎵";

    }else{

        bgMusic.play().catch(()=>{});
        musicBtn.innerHTML = "🔇";

    }

    musicPlaying = !musicPlaying;

});

// ======================================
// OPEN GIFT BUTTON
// ======================================

giftBtn.addEventListener("click",function(){

    hero.style.display = "none";

    giftSection.style.display = "flex";

});

// ======================================
// OPEN GIFT BOX
// ======================================

giftBox.addEventListener("click",function(){

    giftBox.style.pointerEvents = "none";

    giftBox.style.animation = "shake .6s ease 4";

    setTimeout(function(){

        giftBox.classList.add("open");

    },2500);

    setTimeout(function(){

        giftSection.style.display = "none";

        surpriseSection.style.display = "block";

        surpriseSection.scrollIntoView({

            behavior:"smooth"

        });

        // Part 3B me banega
        if(typeof startCelebration === "function"){

            startCelebration();

        }

    },4200);

});

// ======================================
// SHAKE ANIMATION
// ======================================

const style = document.createElement("style");

style.innerHTML = `

@keyframes shake{

0%{transform:rotate(0deg);}
20%{transform:rotate(-5deg);}
40%{transform:rotate(5deg);}
60%{transform:rotate(-5deg);}
80%{transform:rotate(5deg);}
100%{transform:rotate(0deg);}

}

`;

document.head.appendChild(style);

console.log("Birthday Project Part 3A Loaded");
// ======================================
// PART 3B
// Celebration Effects
// ======================================

// Elements
const gallery = document.querySelector(".gallery");
const letter = document.querySelector(".letter");
const photos = document.querySelectorAll(".slider img");

let photoIndex = 0;
let fireworkTimer = null;
let heartTimer = null;

// ======================================
// START CELEBRATION
// ======================================

function startCelebration(){

    gallery.style.display = "block";
    letter.style.display = "block";

    createFirework();
    confettiBlast();

    fireworkTimer = setInterval(createFirework,2500);

    heartTimer = setInterval(createHeart,400);

    autoSlider();

    setInterval(autoSlider,3000);

}

// ======================================
// FIREWORKS
// ======================================

function createFirework(){

    const colors = [
        "#00bfff",
        "#2196f3",
        "#ffd700",
        "#ffffff",
        "#00e5ff"
    ];

    for(let i=0;i<35;i++){

        const spark = document.createElement("div");

        spark.style.position="fixed";
        spark.style.left="50%";
        spark.style.top="50%";
        spark.style.width="8px";
        spark.style.height="8px";
        spark.style.borderRadius="50%";
        spark.style.background=
        colors[Math.floor(Math.random()*colors.length)];

        spark.style.pointerEvents="none";
        spark.style.zIndex="9999";

        document.body.appendChild(spark);

        const angle=Math.random()*360;
        const distance=120+Math.random()*180;

        spark.animate([
        {
            transform:"translate(0,0)",
            opacity:1
        },
        {
            transform:`translate(${Math.cos(angle*Math.PI/180)*distance}px,
            ${Math.sin(angle*Math.PI/180)*distance}px)`,
            opacity:0
        }
        ],{
            duration:1500,
            easing:"ease-out"
        });

        setTimeout(()=>{
            spark.remove();
        },1500);

    }

}

// ======================================
// HEART RAIN
// ======================================

function createHeart(){

    const heart=document.createElement("div");

    heart.innerHTML="💙";

    heart.style.position="fixed";
    heart.style.left=Math.random()*100+"vw";
    heart.style.top="-30px";
    heart.style.fontSize=(18+Math.random()*18)+"px";
    heart.style.pointerEvents="none";
    heart.style.zIndex="999";

    document.body.appendChild(heart);

    heart.animate([
        {
            transform:"translateY(0)",
            opacity:1
        },
        {
            transform:"translateY(110vh)",
            opacity:0
        }
    ],{
        duration:5000
    });

    setTimeout(()=>{
        heart.remove();
    },5000);

}

// ======================================
// CONFETTI
// ======================================

function confettiBlast(){

    for(let i=0;i<100;i++){

        const c=document.createElement("div");

        c.style.position="fixed";
        c.style.left=Math.random()*100+"vw";
        c.style.top="-20px";
        c.style.width="8px";
        c.style.height="8px";
        c.style.background=
        `hsl(${Math.random()*360},100%,60%)`;

        c.style.pointerEvents="none";
        c.style.zIndex="9999";

        document.body.appendChild(c);

        c.animate([
        {
            transform:"translateY(0) rotate(0deg)"
        },
        {
            transform:"translateY(110vh) rotate(720deg)"
        }
        ],{
            duration:3500
        });

        setTimeout(()=>{
            c.remove();
        },3500);

    }

}

// ======================================
// PHOTO SLIDER
// ======================================

function autoSlider(){

    if(photos.length===0) return;

    photos.forEach(photo=>{
        photo.style.display="none";
    });

    photos[photoIndex].style.display="block";

    photoIndex++;

    if(photoIndex>=photos.length){

        photoIndex=0;

    }

}

console.log("Part 3B Loaded Successfully");

// ======================================
// PART 3C
// Royal Premium Effects
// ======================================

// Royal Light Burst
function royalLightBurst(){

    for(let i=0;i<30;i++){

        const light=document.createElement("div");

        light.style.position="fixed";
        light.style.left="50%";
        light.style.top="50%";
        light.style.width="12px";
        light.style.height="12px";
        light.style.borderRadius="50%";
        light.style.background="#00bfff";
        light.style.boxShadow="0 0 25px #00bfff";
        light.style.pointerEvents="none";
        light.style.zIndex="9999";

        document.body.appendChild(light);

        const angle=Math.random()*360;
        const distance=100+Math.random()*180;

        light.animate([
            {
                transform:"translate(0,0) scale(1)",
                opacity:1
            },
            {
                transform:`translate(${Math.cos(angle*Math.PI/180)*distance}px,
                ${Math.sin(angle*Math.PI/180)*distance}px)
                scale(0)`,
                opacity:0
            }
        ],{
            duration:1500,
            easing:"ease-out"
        });

        setTimeout(()=>{
            light.remove();
        },1500);

    }

}

// ======================================
// CAKE ANIMATION
// ======================================

const cake=document.getElementById("cake");

if(cake){

    cake.animate([
        {
            transform:"scale(.5)",
            opacity:0
        },
        {
            transform:"scale(1.1)",
            opacity:1
        },
        {
            transform:"scale(1)",
            opacity:1
        }
    ],{
        duration:1500,
        fill:"forwards"
    });

}

// ======================================
// TITLE GLOW
// ======================================

const title=document.getElementById("mainTitle");

if(title){

setInterval(()=>{

title.animate([
{
textShadow:"0 0 10px #00bfff"
},
{
textShadow:"0 0 40px #2196f3"
},
{
textShadow:"0 0 10px #00bfff"
}
],{
duration:1800
});

},2200);

}

// ======================================
// EXTRA CELEBRATION
// ======================================

const oldCelebration=startCelebration;

startCelebration=function(){

    oldCelebration();

    royalLightBurst();

    setTimeout(royalLightBurst,500);

    setTimeout(royalLightBurst,1000);

};

// ======================================
// FLOATING STARS
// ======================================

setInterval(()=>{

const star=document.createElement("div");

star.innerHTML="⭐";

star.style.position="fixed";
star.style.left=Math.random()*100+"vw";
star.style.top=Math.random()*100+"vh";
star.style.fontSize="20px";
star.style.pointerEvents="none";
star.style.zIndex="999";

document.body.appendChild(star);

star.animate([
{
opacity:1,
transform:"scale(1)"
},
{
opacity:0,
transform:"scale(2)"
}
],{
duration:1800
});

setTimeout(()=>{
star.remove();
},1800);

},900);

// ======================================
// CONSOLE
// ======================================

console.log("Part 3C Loaded Successfully");