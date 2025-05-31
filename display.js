function updateDisplay() { 
    for (let i = 1; i <= 20; i++) { // Sesuaikan jumlah dropdown
        let imgSrc = localStorage.getItem(`selectedHero${i}`);
        let voiceSrc = localStorage.getItem(`selectedVoice${i}`);
         
        let imgElement = document.getElementById(`image-display-${i}`);
        let boxElement = document.getElementById(`image-box-${i}`);

        let cloneImgElement = document.getElementById(`clone-image-display-${i}`);
        let cloneBoxElement = document.getElementById(`-clone-image-box-${i}`);

        let audioElement = document.getElementById(`audio-${i}`);

        if (voiceSrc && audioElement) {
            audioElement.src = voiceSrc;
            audioElement.play();
        }

        if (imgSrc) {
            // Update gambar asli
            imgElement.src = imgSrc;
            imgElement.style.opacity = "1";
            boxElement.classList.add("show");

            // Update gambar clone
            if (cloneImgElement && cloneBoxElement) {
                cloneImgElement.src = imgSrc;
                cloneImgElement.style.opacity = "1";
                cloneBoxElement.classList.add("show");
            }
        } else {
            // Hapus gambar asli jika kosong
            imgElement.src = "";
            imgElement.style.opacity = "0";
            boxElement.classList.remove("show");

            // Hapus gambar clone jika kosong
            if (cloneImgElement && cloneBoxElement) {
                cloneImgElement.src = "";
                cloneImgElement.style.opacity = "0";
                cloneBoxElement.classList.remove("show");
            }
        }
    }
}

window.addEventListener("storage", updateDisplay);
updateDisplay();

//----------------Nickname------------------------/
function loadNames() {
    const names = JSON.parse(localStorage.getItem("names")) || [];
    for (let i = 1; i <= 14; i++) {
        document.getElementById(`name-box-${i}`).textContent = names[i - 1] || "";
    }
}

loadNames();
setInterval(loadNames, 10);

//--------------------logo

function loadImages() {
    document.getElementById('displayImage1').src = localStorage.getItem('logo1') || "";
    document.getElementById('displayImage1').alt = localStorage.getItem('logo1') ? "Logo 1" : "Logo 1 Tidak Ada";

    document.getElementById('displayImage2').src = localStorage.getItem('logo2') || "";
    document.getElementById('displayImage2').alt = localStorage.getItem('logo2') ? "Logo 2" : "Logo 2 Tidak Ada";
}

// Load gambar pertama kali
loadImages();

// Real-time update menggunakan event Storage
window.addEventListener('storage', function(event) {
    if (event.key === 'updateTime') {
        loadImages();
    }
});

//-------------------------Timer

const phases = [
    { type: "Blue Ban Phase", direction: "/Assets/Other/LeftBanning.gif" },
    { type: "Red Ban Phase", direction: "/Assets/Other/RightBanning.gif" },
    { type: "Blue Ban Phase", direction: "/Assets/Other/LeftBanning.gif" },
    { type: "Red Ban Phase", direction: "/Assets/Other/RightBanning.gif" },
    { type: "Blue Ban Phase", direction: "/Assets/Other/LeftBanning.gif" },
    { type: "Red Ban Phase", direction: "/Assets/Other/RightBanning.gif" },
    { type: "Blue Pick Phase", direction: "/Assets/Other/LeftPicking.gif" },
    { type: "Red Pick Phase", direction: "/Assets/Other/RightPicking.gif" },
    { type: "Blue Pick Phase", direction: "/Assets/Other/LeftPicking.gif" },
    { type: "Red Pick Phase", direction: "/Assets/Other/RightPicking.gif" },
    { type: "Red Ban Phase", direction: "/Assets/Other/RightBanning.gif" },
    { type: "Blue Ban Phase", direction: "/Assets/Other/LeftBanning.gif" },
    { type: "Red Ban Phase", direction: "/Assets/Other/RightBanning.gif" },
    { type: "Blue Ban Phase", direction: "/Assets/Other/LeftBanning.gif" },
    { type: "Red Pick Phase", direction: "/Assets/Other/RightPicking.gif" },
    { type: "Blue Pick Phase", direction: "/Assets/Other/LeftPicking.gif" },
    { type: "Red Pick Phase", direction: "/Assets/Other/RightPicking.gif" },
    { type: "", direction: "/Assets/Other/Adjustment.gif" },
];

let timerInterval;
let lastUpdate = parseInt(localStorage.getItem("updateTime")) || 0;

const phaseElement = document.getElementById('phase');
const arrowElement = document.getElementById('arrow');
const timerElement = document.getElementById('timer');
const timerBar = document.getElementById('timer-bar');

function updateUI() {
    let currentPhaseIndex = parseInt(localStorage.getItem("currentPhaseIndex")) || 0;
    let timer = parseInt(localStorage.getItem("timer")) || 45;
    let timerRunning = localStorage.getItem("timerRunning") === "true";
    let resetTimerBar = localStorage.getItem("resetTimerBar") === "true";

    if (resetTimerBar) {
        timerBar.style.transition = "none";  
        timerBar.style.transform = "translateX(-50%) scaleX(1)"; 
        localStorage.setItem("resetTimerBar", "false"); 
    }

    if (currentPhaseIndex < phases.length) {
        const currentPhase = phases[currentPhaseIndex];
        phaseElement.textContent = currentPhase.type;
        arrowElement.src = currentPhase.direction;
        timerElement.textContent = timer;
    } else {
        phaseElement.textContent = "All Phases Completed";
        arrowElement.src = "";
        timerElement.textContent = "";
        timerBar.style.width = "0%";
    }

    if (timerRunning) {
        startTimer(timer);
    } else {
        clearInterval(timerInterval);
        timerBar.style.transition = "none"; // Berhenti mengecilkan timer bar
    }
}

function startTimer(timeLeft) {
    clearInterval(timerInterval);
    timerBar.style.transition = "transform 0s";  
    timerBar.style.transform = "translateX(-50%) scaleX(1)"; 

    setTimeout(() => {
        timerBar.style.transition = `transform ${timeLeft}s linear`;
        timerBar.style.transform = "translateX(-50%) scaleX(0)";
    }, 100);

    timerInterval = setInterval(() => {
        let timer = parseInt(localStorage.getItem("timer")) || 45;
        if (timer > 0) {
            timer--;
            timerElement.textContent = timer;
            localStorage.setItem("timer", timer);
        } else {
            clearInterval(timerInterval);
            localStorage.setItem("timerRunning", "false");
        }
    }, 1000);
}

function checkLocalStorageChanges() {
    let newUpdateTime = parseInt(localStorage.getItem("updateTime")) || 0;
    if (newUpdateTime !== lastUpdate) {
        lastUpdate = newUpdateTime;
        updateUI();
    }
}

setInterval(checkLocalStorageChanges, 500);
updateUI();

//-----------------------phasing

const phases2 = [
    ["ban-left-1"], ["ban-right-1"], ["ban-left-2"], ["ban-right-2"], ["ban-left-3"], ["ban-right-3"],
    ["pick-left-1"], ["pick-right-1", "pick-right-2"], ["pick-left-2", "pick-left-3"], ["pick-right-3"],
    ["ban-right-4"], ["ban-left-4"], ["ban-right-5"], ["ban-left-5"],
    ["pick-right-4"], ["pick-left-4", "pick-left-5"], ["pick-right-5"], []
];

function updateDisplay2() {
    let currentPhase2 = JSON.parse(localStorage.getItem("currentPhase2")) || 0;
    document.querySelectorAll(".box").forEach(box => {
        box.classList.remove("active-ban", "active-pick");
    });

    if (currentPhase2 < phases2.length - 1) {
        phases2[currentPhase2].forEach(phase2 => {
            const phaseBox = document.getElementById(phase2);
            if (phaseBox) {
                phaseBox.classList.add(currentPhase2 < 6 || (currentPhase2 >= 10 && currentPhase2 <= 13) ? "active-ban" : "active-pick");
            }
        });
    }
}

setInterval(updateDisplay2, 500);


