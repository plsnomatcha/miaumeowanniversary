const openBtn = document.getElementById("openBtn");
const cover = document.getElementById("cover");
const envelopePage = document.getElementById("envelopePage");
const envelope = document.getElementById("envelope");
const letterPage = document.getElementById("letterPage");
const jumpscare = document.getElementById("jumpscare");

const audio = document.getElementById("bgMusic");
const lyricsBox = document.getElementById("lyricsBox");

let musicStartedAt = null;

/* START BUTTON */
openBtn.onclick = () => {
    
    cover.classList.add("hidden");
    
    setTimeout(() => {
        
        jumpscare?.classList.remove("hidden");
        
    }, 700);
    
    setTimeout(() => {
        
        jumpscare?.classList.add("hidden");
        envelopePage.classList.remove("hidden");
        
        if (audio.paused) {
            audio.play();
        }
        
        musicStartedAt = audio.currentTime;
        
    }, 3000);
    
};

/* ENVELOPE */
envelope?.addEventListener("click", () => {
    
    envelopePage.classList.add("hidden");
    
    setTimeout(() => {
        letterPage.classList.remove("hidden");
    }, 500);
    
});

/* LYRICS */
const SHIFT = 0.45; // ⬅️ minus 0.05

const lyrics = [
  { time: 16.69 - SHIFT, text: "If you leave me, don't you ever think I want you to go" },
  { time: 23.56 - SHIFT, text: "'Cause I'm bound to you" },
  { time: 29.02 - SHIFT, text: "All I need is you to wait for me, and I'll be there for you" },
  { time: 36.50 - SHIFT, text: "'Cause I'll run to you" },

  { time: 43.00 - SHIFT, text: "My heart belongs to you" },

  { time: 56.42 - SHIFT, text: "I'll take a piece of you" },

  { time: 74.50 - SHIFT, text: "I don't know what's happening now" },
  { time: 81.26 - SHIFT, text: "And a lot of things have turned" },
  { time: 86.93 - SHIFT, text: "I wished that I could turn back time" },
  { time: 93.93 - SHIFT, text: "Back when I'm with you" },

  { time: 101.25 - SHIFT, text: "But my heart belongs to you" },

  { time: 113.99 - SHIFT, text: "I'll take a piece of you" },

  { time: 146.05 - SHIFT, text: "My heart belongs to you" },

  { time: 163.37 - SHIFT, text: "I'll take a piece of you" },

  { time: 170.89 - SHIFT, text: "ANG HIRAP ISABAY" },


  { time: 176.55 - SHIFT, text: "DI BALE NA BASTA MAHAL KITA" },

  { time: 178.69 - SHIFT, text: "I LOVE YOU ALWAYS AND FOREVER" },

  { time: 184.55 - SHIFT, text: "HIRAP TALAGA PRAMIS" },

  { time: 195.32 - SHIFT, text: "MAHIRAP TALAGA MAG-CODING" },

  { time: 197.30 - SHIFT, text: "EWAN, HINDI NA SUMABAY" },

  { time: 200.21 - SHIFT, text: "I LOVE YOU SO MUCH MY AEZTHETTE" },

  { time: 210.00 - SHIFT, text: "ALWAYS YOUR SAJIL" }
];

/* SYNC ENGINE */
audio.addEventListener("timeupdate", () => {
    
    if (!audio || !lyricsBox) return;
    if (musicStartedAt === null) return;
    
   let current = audio.currentTime - musicStartedAt + 0.2;
    
    let activeText = "";
    
    for (let i = 0; i < lyrics.length; i++) {
        if (current >= lyrics[i].time) {
            activeText = lyrics[i].text;
        }
    }
    
    lyricsBox.innerText = activeText;
    
});