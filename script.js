document.addEventListener('DOMContentLoaded', () => {
    // Personalización de invitado por URL (ej: ?para=Cata y Esteban)
    const urlParams = new URLSearchParams(window.location.search);
    const invitados = urlParams.get('para') || urlParams.get('invitado');
    if (invitados) {
        const mainTitle = document.getElementById('main-title');
        if (mainTitle) {
            mainTitle.innerHTML = `<span style="font-size: 2.2rem; display: block; padding-bottom: 5px; color: var(--accent-gold); font-style: italic; line-height: 1;">${invitados},</span>¡Nos Casamos!`;
        }

        // Add name to envelope
        const envelopeInner = document.querySelector('.envelope-inner');
        if (envelopeInner) {
            envelopeInner.setAttribute('data-guest', `${invitados}...`);
        }
    }

    const envelope = document.getElementById('envelope');
    const wrapper = document.getElementById('envelopeWrapper');
    let isOpened = false;

    envelope.addEventListener('click', () => {
        if (isOpened) return;
        isOpened = true;

        // Abre el sobre
        envelope.classList.add('open');

        // Después de la animación de solapa (0.6s), añade retraso para leer
        // y luego desvanece todo el wrapper
        setTimeout(() => {
            wrapper.classList.add('fade-out');
        }, 1200);

        setTimeout(() => {
            wrapper.style.display = 'none';
        }, 2000);
    });
});
