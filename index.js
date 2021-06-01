let estadoLicuadora = false;
const btnLicuadora = document.getElementById('blenderBtn');
const blender = document.getElementById('blender');
// * Sounds
const btnSound = document.getElementById('blenderBtnSound');
const blenderSound = document.getElementById('blenderSound');

function controlarLicuadora() {
    // ? on - off  
    blender.classList.toggle('active');
    !estadoLicuadora ? estadoLicuadora = true : estadoLicuadora = false;
    // ? PlaySound
    if (blenderSound.paused && btnSound.paused) {
        blenderSound.play()
        btnSound.play()
    } else {
        blenderSound.pause()
        btnSound.play()
        blenderSound.currentTime = 0;
    }
}
