// JS básico para manejar formularios y animaciones suaves

document.addEventListener("DOMContentLoaded", () => {
  const participaForm = document.getElementById("participaForm");
  const contactForm = document.getElementById("contactForm");

  participaForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Gracias por unirte a UTabitat. ¡Pronto te contactaremos!");
    participaForm.reset();
  });

  contactForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Tu mensaje ha sido enviado. Gracias por contactarnos.");
    contactForm.reset();
  });

  // Animación suave al hacer scroll
  const links = document.querySelectorAll("nav a[href^='#']");
  for (const link of links) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  }
});
