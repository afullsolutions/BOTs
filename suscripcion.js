

document.getElementById('suscribirte').onclick = function() {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('popup-suscribirte').style.display = 'block';
}



document.getElementById('close-suscribirte').onclick = function() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('popup-suscribirte').style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == document.getElementById('popup-precio')) {
        document.getElementById('overlay').style.display = 'none';
        document.getElementById('popup-precio').style.display = 'none';
    }
    if (event.target == document.getElementById('popup-suscribirte')) {
        document.getElementById('overlay').style.display = 'none';
        document.getElementById('popup-suscribirte').style.display = 'none';
    }
}