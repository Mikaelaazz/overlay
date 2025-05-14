function loadNames() { 
    const names = JSON.parse(localStorage.getItem("names")) || [];
    for (let i = 1; i <= 14; i++) {
        document.getElementById(`name-box-${i}`).textContent = names[i - 1] || "";
    }
}

loadNames();
setInterval(loadNames, 100);

//---------------

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

//------------------

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
