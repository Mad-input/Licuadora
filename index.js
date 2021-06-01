let estadoLicuadora = false;
const btnLicuadora = document.getElementById('blenderBtn');
const blender = document.getElementById('blender');

function controlarLicuadora() {
    blender.classList.toggle('active');
    !estadoLicuadora ? estadoLicuadora = true : estadoLicuadora = false;
}
