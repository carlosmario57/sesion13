document.getElementById('formulario-contacto').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const motivo = document.getElementById('motivo').value.trim();

    if (nombre === '' || correo === '' || motivo === '') {
        alert('Por favor, completa todos los campos del formulario.');
    } else {
        alert(`Gracias por tu mensaje, ${nombre}. Te contactaremos pronto.`);
        this.reset();
    }
});
