const heroes = [  
    { name: 'Aamon', img: '/Assets/HeroPick/aamon.png', voice: '/Assets/Voicelines/aamon.ogg' },
    { name: 'Akai', img: '/Assets/HeroPick/akai.png', voice: '/Assets/Voicelines/akai.ogg' },
    { name: 'Aldous', img: '/Assets/HeroPick/aldous.png', voice: '/Assets/Voicelines/aldous.ogg' },
    { name: 'Alice', img: '/Assets/HeroPick/alice.png', voice: '/Assets/Voicelines/alice.ogg' },
    { name: 'Alpha', img: '/Assets/HeroPick/alpha.png', voice: '/Assets/Voicelines/alpha.ogg' },
    { name: 'Alucard', img: '/Assets/HeroPick/alucard.png', voice: '/Assets/Voicelines/alucard.ogg' },
    { name: 'Angela', img: '/Assets/HeroPick/angela.png', voice: '/Assets/Voicelines/angela.ogg' },
    { name: 'Argus', img: '/Assets/HeroPick/argus.png', voice: '/Assets/Voicelines/argus.ogg' },
    { name: 'Arlot', img: '/Assets/HeroPick/arlot.png', voice: '/Assets/Voicelines/arlot.ogg' },
    { name: 'Atlas', img: '/Assets/HeroPick/atlas.png', voice: '/Assets/Voicelines/atlas.ogg' },
    { name: 'Aulus', img: '/Assets/HeroPick/aulus.png', voice: '/Assets/Voicelines/aulus.ogg' },
    { name: 'Aurora', img: '/Assets/HeroPick/aurora.png', voice: '/Assets/Voicelines/aurora.ogg' },
    { name: 'Badang', img: '/Assets/HeroPick/badang.png', voice: '/Assets/Voicelines/badang.ogg' },
    { name: 'Balmond', img: '/Assets/HeroPick/balmond.png', voice: '/Assets/Voicelines/balmond.ogg' },
    { name: 'Bane', img: '/Assets/HeroPick/bane.png', voice: '/Assets/Voicelines/bane.ogg' },
    { name: 'Barats', img: '/Assets/HeroPick/barats.png', voice: '/Assets/Voicelines/barats.ogg' },
    { name: 'Baxia', img: '/Assets/HeroPick/baxia.png', voice: '/Assets/Voicelines/baxia.ogg' },
    { name: 'Beatrix', img: '/Assets/HeroPick/beatrix.png', voice: '/Assets/Voicelines/beatrix.ogg' },
    { name: 'Beleric', img: '/Assets/HeroPick/beleric.png', voice: '/Assets/Voicelines/beleric.ogg' },
    { name: 'Benedetta', img: '/Assets/HeroPick/benedetta.png', voice: '/Assets/Voicelines/benedetta.ogg' },
    { name: 'Brody', img: '/Assets/HeroPick/brody.png', voice: '/Assets/Voicelines/brody.ogg' },
    { name: 'Bruno', img: '/Assets/HeroPick/bruno.png', voice: '/Assets/Voicelines/bruno.ogg' },
    { name: 'Carmila', img: '/Assets/HeroPick/carmila.png', voice: '/Assets/Voicelines/carmila.ogg' },
    { name: 'Cecilion', img: '/Assets/HeroPick/cecilion.png', voice: '/Assets/Voicelines/cecilion.ogg' },
    { name: 'Chang\'e', img: '/Assets/HeroPick/chang_e.png', voice: '/Assets/Voicelines/change.ogg' },
    { name: 'Chip', img: '/Assets/HeroPick/chip.png', voice: '/Assets/Voicelines/chip.ogg' },
    { name: 'Chou', img: '/Assets/HeroPick/chou.png', voice: '/Assets/Voicelines/chou.ogg' },
    { name: 'Cici', img: '/Assets/HeroPick/cici.png', voice: '/Assets/Voicelines/cici.ogg' },
    { name: 'Claude', img: '/Assets/HeroPick/claude.png', voice: '/Assets/Voicelines/claude.ogg' },
    { name: 'Clint', img: '/Assets/HeroPick/clint.png', voice: '/Assets/Voicelines/clint.ogg' },
    { name: 'Cyclops', img: '/Assets/HeroPick/cyclops.png', voice: '/Assets/Voicelines/cyclops.ogg' },
    { name: 'Diggie', img: '/Assets/HeroPick/diggie.png', voice: '/Assets/Voicelines/diggie.ogg' },
    { name: 'Dyroth', img: '/Assets/HeroPick/dyroth.png', voice: '/Assets/Voicelines/dyroth.ogg' },
    { name: 'Edith', img: '/Assets/HeroPick/edith.png', voice: '/Assets/Voicelines/edith.ogg' },
    { name: 'Esmeralda', img: '/Assets/HeroPick/esmeralda.png', voice: '/Assets/Voicelines/esmeralda.ogg' },
    { name: 'Estes', img: '/Assets/HeroPick/estes.png', voice: '/Assets/Voicelines/estes.ogg' },
    { name: 'Eudora', img: '/Assets/HeroPick/eudora.png', voice: '/Assets/Voicelines/eudora.ogg' },
    { name: 'Fanny', img: '/Assets/HeroPick/fanny.png', voice: '/Assets/Voicelines/fanny.ogg' },
    { name: 'Faramis', img: '/Assets/HeroPick/faramis.png', voice: '/Assets/Voicelines/faramis.ogg' },
    { name: 'Floryn', img: '/Assets/HeroPick/floryn.png', voice: '/Assets/Voicelines/floryn.ogg' },
    { name: 'Franco', img: '/Assets/HeroPick/franco.png', voice: '/Assets/Voicelines/franco.ogg' },
    { name: 'Fredrin', img: '/Assets/HeroPick/fredrin.png', voice: '/Assets/Voicelines/fredrin.ogg' },
    { name: 'Freya', img: '/Assets/HeroPick/freya.png', voice: '/Assets/Voicelines/freya.ogg' },
    { name: 'Gatotkaca', img: '/Assets/HeroPick/gatotkaca.png', voice: '/Assets/Voicelines/gatotkaca.ogg' },
    { name: 'Gloo', img: '/Assets/HeroPick/gloo.png', voice: '/Assets/Voicelines/gloo.ogg' },
    { name: 'Gord', img: '/Assets/HeroPick/gord.png', voice: '/Assets/Voicelines/gord.ogg' },
    { name: 'Granger', img: '/Assets/HeroPick/granger.png', voice: '/Assets/Voicelines/granger.ogg' },
    { name: 'Grock', img: '/Assets/HeroPick/grock.png', voice: '/Assets/Voicelines/grock.ogg' },
    { name: 'Guinevere', img: '/Assets/HeroPick/guinevere.png', voice: '/Assets/Voicelines/guinevere.ogg' },
    { name: 'Gusion', img: '/Assets/HeroPick/gusion.png', voice: '/Assets/Voicelines/gusion.ogg' },
    { name: 'Hanabi', img: '/Assets/HeroPick/hanabi.png', voice: '/Assets/Voicelines/hanabi.ogg' },
    { name: 'Hanzo', img: '/Assets/HeroPick/hanzo.png', voice: '/Assets/Voicelines/hanzo.ogg' },
    { name: 'Harith', img: '/Assets/HeroPick/harith.png', voice: '/Assets/Voicelines/harith.ogg' },
    { name: 'Harley', img: '/Assets/HeroPick/harley.png', voice: '/Assets/Voicelines/harley.ogg' },
    { name: 'Hayabusa', img: '/Assets/HeroPick/hayabusa.png', voice: '/Assets/Voicelines/hayabusa.ogg' },
    { name: 'Helcurt', img: '/Assets/HeroPick/helcurt.png', voice: '/Assets/Voicelines/helcurt.ogg' },
    { name: 'Hilda', img: '/Assets/HeroPick/hilda.png', voice: '/Assets/Voicelines/hilda.ogg' },
    { name: 'Hylos', img: '/Assets/HeroPick/hylos.png', voice: '/Assets/Voicelines/hylos.ogg' },
    { name: 'Irithel', img: '/Assets/HeroPick/irithel.png', voice: '/Assets/Voicelines/irithel.ogg' },
    { name: 'Ixia', img: '/Assets/HeroPick/ixia.png', voice: '/Assets/Voicelines/ixia.ogg' },
    { name: 'Jawhead', img: '/Assets/HeroPick/jawhead.png', voice: '/Assets/Voicelines/jawhead.ogg' },
    { name: 'Johnson', img: '/Assets/HeroPick/johnson.png', voice: '/Assets/Voicelines/johnson.ogg' },
    { name: 'Joy', img: '/Assets/HeroPick/joy.png', voice: '/Assets/Voicelines/joy.ogg' },
    { name: 'Julian', img: '/Assets/HeroPick/julian.png', voice: '/Assets/Voicelines/julian.ogg' },
    { name: 'Kadita', img: '/Assets/HeroPick/kadita.png', voice: '/Assets/Voicelines/kadita.ogg' },
    { name: 'Kagura', img: '/Assets/HeroPick/kagura.png', voice: '/Assets/Voicelines/kagura.ogg' },
    { name: 'Kaja', img: '/Assets/HeroPick/kaja.png', voice: '/Assets/Voicelines/kaja.ogg' },
    { name: 'Kalea', img: '/Assets/HeroPick/kalea.png', voice: '/Assets/Voicelines/kalea.ogg' },
    { name: 'Karina', img: '/Assets/HeroPick/karina.png', voice: '/Assets/Voicelines/karina.ogg' },
    { name: 'Karrie', img: '/Assets/HeroPick/karrie.png', voice: '/Assets/Voicelines/karrie.ogg' },
    { name: 'Khaleed', img: '/Assets/HeroPick/khaleed.png', voice: '/Assets/Voicelines/khaleed.ogg' },
    { name: 'Khufra', img: '/Assets/HeroPick/khufra.png', voice: '/Assets/Voicelines/khufra.ogg' },
    { name: 'Kimmy', img: '/Assets/HeroPick/kimmy.png', voice: '/Assets/Voicelines/kimmy.ogg' },
    { name: 'Lancelot', img: '/Assets/HeroPick/lancelot.png', voice: '/Assets/Voicelines/lancelot.ogg' },
    { name: 'Lukas', img: '/Assets/HeroPick/lukas.png', voice: '/Assets/Voicelines/lukas.ogg' },
    { name: 'Lapu Lapu', img: '/Assets/HeroPick/lapulapu.png', voice: '/Assets/Voicelines/lapulapu.ogg' },
    { name: 'Layla', img: '/Assets/HeroPick/layla.png', voice: '/Assets/Voicelines/layla.ogg' },
    { name: 'Leomord', img: '/Assets/HeroPick/leomord.png', voice: '/Assets/Voicelines/leomord.ogg' },
    { name: 'Lesley', img: '/Assets/HeroPick/lesley.png', voice: '/Assets/Voicelines/lesley.ogg' },
    { name: 'Ling', img: '/Assets/HeroPick/ling.png', voice: '/Assets/Voicelines/ling.ogg' },
    { name: 'Lolita', img: '/Assets/HeroPick/lolita.png', voice: '/Assets/Voicelines/lolita.ogg' },
    { name: 'Lunox', img: '/Assets/HeroPick/lunox.png', voice: '/Assets/Voicelines/lunox.ogg' },
    { name: 'Luo Yi', img: '/Assets/HeroPick/luoyi.png', voice: '/Assets/Voicelines/luoyi.ogg' },
    { name: 'Lylia', img: '/Assets/HeroPick/lylia.png', voice: '/Assets/Voicelines/lylia.ogg' },
    { name: 'Martis', img: '/Assets/HeroPick/martis.png', voice: '/Assets/Voicelines/martis.ogg' },
    { name: 'Masha', img: '/Assets/HeroPick/masha.png', voice: '/Assets/Voicelines/masha.ogg' },
    { name: 'Mathilda', img: '/Assets/HeroPick/mathilda.png', voice: '/Assets/Voicelines/mathilda.ogg' },
    { name: 'Melissa', img: '/Assets/HeroPick/melissa.png', voice: '/Assets/Voicelines/melissa.ogg' },
    { name: 'Minotaur', img: '/Assets/HeroPick/minotour.png', voice: '/Assets/Voicelines/minotaur.ogg' },
    { name: 'Minsitthar', img: '/Assets/HeroPick/minsitthar.png', voice: '/Assets/Voicelines/minsitthar.ogg' },
    { name: 'Miya', img: '/Assets/HeroPick/miya.png', voice: '/Assets/Voicelines/miya.ogg' },
    { name: 'Moskov', img: '/Assets/HeroPick/moskov.png', voice: '/Assets/Voicelines/moskov.ogg' },
    { name: 'Nana', img: '/Assets/HeroPick/nana.png', voice: '/Assets/Voicelines/nana.ogg' },
    { name: 'Natalia', img: '/Assets/HeroPick/natalia.png', voice: '/Assets/Voicelines/natalia.ogg' },
    { name: 'Natan', img: '/Assets/HeroPick/natan.png', voice: '/Assets/Voicelines/natan.ogg' },
    { name: 'Nolan', img: '/Assets/HeroPick/nolan.png', voice: '/Assets/Voicelines/nolan.ogg' },
    { name: 'Novaria', img: '/Assets/HeroPick/novaria.png', voice: '/Assets/Voicelines/novaria.ogg' },
    { name: 'Odette', img: '/Assets/HeroPick/odette.png', voice: '/Assets/Voicelines/odette.ogg' },
    { name: 'Paquito', img: '/Assets/HeroPick/paquito.png', voice: '/Assets/Voicelines/paquito.ogg' },
    { name: 'Parsha', img: '/Assets/HeroPick/parsha.png', voice: '/Assets/Voicelines/parsha.ogg' },
    { name: 'Phoveus', img: '/Assets/HeroPick/phoveus.png', voice: '/Assets/Voicelines/paquito.ogg' },
    { name: 'Popol and Kupa', img: '/Assets/HeroPick/popolandkupa.png', voice: '/Assets/Voicelines/popolandkupa.ogg' },
    { name: 'Rafaela', img: '/Assets/HeroPick/rafaela.png', voice: '/Assets/Voicelines/rafaela.ogg' },
    { name: 'Roger', img: '/Assets/HeroPick/roger.png', voice: '/Assets/Voicelines/roger.ogg' },
    { name: 'Ruby', img: '/Assets/HeroPick/ruby.png', voice: '/Assets/Voicelines/ruby.ogg' },
    { name: 'Saber', img: '/Assets/HeroPick/saber.png', voice: '/Assets/Voicelines/saber.ogg' },
    { name: 'Selena', img: '/Assets/HeroPick/selena.png', voice: '/Assets/Voicelines/selena.ogg' },
    { name: 'Silvanna', img: '/Assets/HeroPick/silvanna.png', voice: '/Assets/Voicelines/silvanna.ogg' },
    { name: 'Sun', img: '/Assets/HeroPick/sun.png', voice: '/Assets/Voicelines/sun.ogg' },
    { name: 'Suyou', img: '/Assets/HeroPick/suyou.png', voice: '/Assets/Voicelines/suyou.ogg' },
    { name: 'Terizla', img: '/Assets/HeroPick/terizla.png', voice: '/Assets/Voicelines/terizla.ogg' },
    { name: 'Thamuz', img: '/Assets/HeroPick/thamuz.png', voice: '/Assets/Voicelines/thamuz.ogg' },
    { name: 'Tigreal', img: '/Assets/HeroPick/tigreal.png', voice: '/Assets/Voicelines/tigreal.ogg' },
    { name: 'Uranus', img: '/Assets/HeroPick/uranus.png', voice: '/Assets/Voicelines/uranus.ogg' },
    { name: 'Vale', img: '/Assets/HeroPick/vale.png', voice: '/Assets/Voicelines/vale.ogg' },
    { name: 'Valentina', img: '/Assets/HeroPick/valentina.png', voice: '/Assets/Voicelines/valentina.ogg' },
    { name: 'Valir', img: '/Assets/HeroPick/valir.png', voice: '/Assets/Voicelines/valir.ogg' },
    { name: 'Vexana', img: '/Assets/HeroPick/vexana.png', voice: '/Assets/Voicelines/vexana.ogg' },
    { name: 'Wanwan', img: '/Assets/HeroPick/wanwan.png', voice: '/Assets/Voicelines/wanwan.ogg' },
    { name: 'Xavier', img: '/Assets/HeroPick/xavier.png', voice: '/Assets/Voicelines/xavier.ogg' },
    { name: 'Xborg', img: '/Assets/HeroPick/xborg.png', voice: '/Assets/Voicelines/xborg.ogg' },
    { name: 'Yin', img: '/Assets/HeroPick/yin.png', voice: '/Assets/Voicelines/yin.ogg' },
    { name: 'Yisunshin', img: '/Assets/HeroPick/yisunshin.png', voice: '/Assets/Voicelines/yisunshin.ogg' },
    { name: 'Yuzhong', img: '/Assets/HeroPick/yuzhong.png', voice: '/Assets/Voicelines/yuzhong.ogg' },
    { name: 'Yve', img: '/Assets/HeroPick/yve.png', voice: '/Assets/Voicelines/yve.ogg' },
    { name: 'Zhask', img: '/Assets/HeroPick/zhask.png', voice: '/Assets/Voicelines/zhask.ogg' },
    { name: 'Zhuxin', img: '/Assets/HeroPick/zhuxin.png', voice: '/Assets/Voicelines/zhuxin.ogg' },
    { name: 'Zilong', img: '/Assets/HeroPick/zilong.png', voice: '/Assets/Voicelines/zilong.ogg' }

];


let selected1 = null;
let selected2 = null;

function filterDropdown(index) {
    let input = document.getElementById(`search-${index}`);
    let dropdown = document.getElementById(`dropdown-items-${index}`);
    let searchText = input.value.toLowerCase();

    dropdown.style.display = "block";
    dropdown.innerHTML = "";

    heroes.filter(hero => hero.name.toLowerCase().includes(searchText)).forEach(hero => {
        let option = document.createElement("div");
        option.textContent = hero.name;
        option.setAttribute("data-img", hero.img);
        option.setAttribute("data-voice", hero.voice);
        option.onclick = function () {
            localStorage.setItem(`selectedHero${index}`, hero.img);
            input.value = hero.name;
            dropdown.style.display = "none";
            playVoice(hero.voice);
        };
        dropdown.appendChild(option);
    });
}

function selectDropdown(index) {
    let button = document.querySelector(`#dropdowns-${index} .swap-button`);

    if (selected1 === null) {
        selected1 = index;
        button.classList.add("selected");
    } else if (selected2 === null && selected1 !== index) {
        selected2 = index;
        button.classList.add("selected");
        swapHeroes();
    } else {
        resetSelection();
    }
}

function swapHeroes() {
    if (selected1 !== null && selected2 !== null) {
        let img1 = localStorage.getItem(`selectedHero${selected1}`);
        let img2 = localStorage.getItem(`selectedHero${selected2}`);

        localStorage.setItem(`selectedHero${selected1}`, img2);
        localStorage.setItem(`selectedHero${selected2}`, img1);

        document.getElementById(`search-${selected1}`).value = getHeroName(img2);
        document.getElementById(`search-${selected2}`).value = getHeroName(img1);

        resetSelection();
    }
}

function getHeroName(imgSrc) {
    let hero = heroes.find(h => h.img === imgSrc);
    return hero ? hero.name : "";
}

function resetSelection() {
    if (selected1 !== null) document.querySelector(`#dropdowns-${selected1} .swap-button`).classList.remove("selected");
    if (selected2 !== null) document.querySelector(`#dropdowns-${selected2} .swap-button`).classList.remove("selected");

    selected1 = null;
    selected2 = null;
}

function playVoice(voiceSrc) {
    let audio = document.getElementById("hero-voice");
    audio.src = voiceSrc;
    audio.play();
}

function clearSelections() {
    for (let i = 1; i <= 20; i++) {
        localStorage.removeItem(`selectedHero${i}`);
        let input = document.getElementById(`search-${i}`);
        if (input) input.value = "";
    }
}

//Banning

//-----------------NICKNAME----------------//

function saveNames() {
    let names = [];
    for (let i = 1; i <= 14; i++) {
        const name = document.getElementById(`name-input-${i}`).value;
        names.push(name);
    }
    localStorage.setItem("names", JSON.stringify(names));
}

function resetNames() {
    for (let i = 1; i <= 14; i++) {
        document.getElementById(`name-input-${i}`).value = "";
    }
    localStorage.removeItem("names");
}

function switchNames() {
    let names = JSON.parse(localStorage.getItem("names")) || [];
    if (names.length < 14) return alert("Isi semua nama terlebih dahulu!");

    // Tukar bagian 1-7 dengan 8-14
    let temp = names.slice(0, 7);
    names.splice(0, 7, ...names.slice(7, 14));
    names.splice(7, 7, ...temp);

    localStorage.setItem("names", JSON.stringify(names));
    loadNames();
}

function loadNames() {
    let names = JSON.parse(localStorage.getItem("names")) || [];
    for (let i = 1; i <= 14; i++) {
        document.getElementById(`name-input-${i}`).value = names[i - 1] || "";
    }
}

// Event listener untuk input real-time
document.querySelectorAll("input").forEach(input => {
    input.addEventListener("input", saveNames);
});

loadNames();

//----------------Logo

     // Simpan gambar ke localStorage saat diunggah (Realtime)
     document.getElementById('file1').addEventListener('change', function() {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                localStorage.setItem('logo1', e.target.result);
                updateRealtime();
            };
            reader.readAsDataURL(file);
        }
    });

    document.getElementById('file2').addEventListener('change', function() {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                localStorage.setItem('logo2', e.target.result);
                updateRealtime();
            };
            reader.readAsDataURL(file);
        }
    });

    // Fungsi untuk menukar gambar 1 dan 2
    function switchImages() {
        let logo1 = localStorage.getItem('logo1');
        let logo2 = localStorage.getItem('logo2');
        localStorage.setItem('logo1', logo2);
        localStorage.setItem('logo2', logo1);
        updateRealtime();
    }

    // Fungsi reset gambar
    function resetImages() {
        localStorage.removeItem('logo1');
        localStorage.removeItem('logo2');
        updateRealtime();
    }

    // Memicu event pembaruan untuk display.html
    function updateRealtime() {
        localStorage.setItem('updateTime', Date.now()); // Timestamp untuk memicu event
    }


    //-----------------------Timer

    
    function updateLocalStorage(action) {
        let currentPhaseIndex = parseInt(localStorage.getItem("currentPhaseIndex")) || 0;
        let timer = parseInt(localStorage.getItem("timer")) || 45;
        let timerRunning = localStorage.getItem("timerRunning") === "true";

        if (action === "start" && !timerRunning) {
            localStorage.setItem("timerRunning", "true");
        } else if (action === "stop") {
            localStorage.setItem("timerRunning", "false");
        } else if (action === "nextPhase") {
            if (currentPhaseIndex < 17) {
                localStorage.setItem("currentPhaseIndex", currentPhaseIndex + 1);
                localStorage.setItem("timer", 45);
                localStorage.setItem("timerRunning", "true");  // Timer langsung berjalan
                localStorage.setItem("resetTimerBar", "true"); // Reset timer bar
            }
        } else if (action === "reset") {
            localStorage.setItem("currentPhaseIndex", 0);
            localStorage.setItem("timer", 45);
            localStorage.setItem("timerRunning", "false"); // Timer tidak berjalan setelah reset
            localStorage.setItem("resetTimerBar", "true");
        }

        localStorage.setItem("updateTime", Date.now()); // Trigger update di display
    }

    document.getElementById('start').addEventListener('click', () => updateLocalStorage("start"));
    document.getElementById('stop').addEventListener('click', () => updateLocalStorage("stop"));
    document.getElementById('nextPhase',).addEventListener('click', () => updateLocalStorage("nextPhase"));
    document.getElementById('reset').addEventListener('click', () => updateLocalStorage("reset"));


    //----------------------------PHASES
    
    const phases2 = [
        ["ban-left-1"], ["ban-right-1"], ["ban-left-2"], ["ban-right-2"], ["ban-left-3"], ["ban-right-3"],
        ["pick-left-1"], ["pick-right-1", "pick-right-2"], ["pick-left-2", "pick-left-3"], ["pick-right-3"],
        ["ban-right-4"], ["ban-left-4"], ["ban-right-5"], ["ban-left-5"],
        ["pick-right-4"], ["pick-left-4", "pick-left-5"], ["pick-right-5"], []
    ];
    
    let currentPhase2 = 0;
    
    function updatePhase() {
        localStorage.setItem("currentPhase2", JSON.stringify(currentPhase2));
    }
    
    document.getElementById("nextPhase").addEventListener("click", function () {
        if (currentPhase2 < phases2.length - 1) {
            currentPhase2++;
            updatePhase();
        } else {
            alert("Drafting Complete!");
        }
    });
    
    document.getElementById("reset").addEventListener("click", function () {
        currentPhase2 = 0;
        updatePhase();
    });
    
    // Menjalankan updateDisplay2 secara berkala
    setInterval(updateDisplay2, 500);
