/*
SCRIPT DE LAS LETRAS
*/
document.addEventListener("DOMContentLoaded", () => {
    const textElement = document.getElementById("dynamic-text");
    const phrases = [
        "Full-Stack | Lead Developer",
        "Contador serial de chistes de mierda.",
        "Degustador de pepinos.",
    ];

    let phraseIndex = 0;
    let charIndex = 0;
    let currentPhrase = "";
    let isDeleting = false;

    function typeEffect() {
        if (isDeleting) {
            currentPhrase = phrases[phraseIndex].substring(0, charIndex--);
        } else {
            currentPhrase = phrases[phraseIndex].substring(0, charIndex++);
        }

        textElement.textContent = currentPhrase;

        if (!isDeleting && charIndex === phrases[phraseIndex].length) {
            isDeleting = true;
            setTimeout(typeEffect, 2000); // Pausa antes de borrar
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            setTimeout(typeEffect, 500); // Pausa antes de escribir la siguiente frase
        } else {
            setTimeout(typeEffect, isDeleting ? 50 : 100); // Velocidad de escritura/borrado
        }
    }

    typeEffect();
});


document.addEventListener("DOMContentLoaded", () => {
  const icon = document.getElementById("floating-icon");

  // Mostrar el ícono cada cierto tiempo
  setInterval(() => {
    icon.style.top = `${Math.random() * (window.innerHeight - 100)}px`; // Posición vertical aleatoria
    icon.style.left = `${Math.random() * (window.innerWidth - 100)}px`; // Posición horizontal aleatoria
    icon.classList.remove("hidden");

    // Ocultar el ícono después de 5 segundos si no lo han clickeado
    setTimeout(() => {
      icon.classList.add("hidden");
    }, 5000);
  }, 3000); // Cada 10 segundos aparece

  // Lanzar confeti al hacer clic
  icon.addEventListener("click", () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { x: 0.5, y: 0.5 },
    });

    // Ocultar el ícono tras la explosión
    icon.classList.add("hidden");
  });
});
  