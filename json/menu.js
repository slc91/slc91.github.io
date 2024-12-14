document.addEventListener("DOMContentLoaded", function () {
    const dropdowns = document.querySelectorAll(".dropdown");
    const header = document.querySelector("header");
    const burgerMenu = document.querySelector(".burger-menu");
    const mobileMenu = document.getElementById("mobileMenu");

    // Gestion des dropdowns
    dropdowns.forEach((dropdown) => {
        const button = dropdown.querySelector(".dropdown-button");
        button.addEventListener("click", function (event) {
            event.stopPropagation(); // Empêche la propagation pour éviter la fermeture immédiate
            // Fermer tous les autres menus
            dropdowns.forEach((d) => {
                if (d !== dropdown) d.classList.remove("active");
            });

            // Basculer le menu actuel
            const isActive = dropdown.classList.toggle("active");

            // Ajuster la hauteur de l'en-tête si nécessaire
            if (isActive) {
                header.classList.add("expanded");
            } else {
                header.classList.remove("expanded");
            }
        });
    });

    // Fermer les menus lorsqu'on clique ailleurs
    document.addEventListener("click", function (event) {
        if (!event.target.closest("header")) {
            dropdowns.forEach((d) => d.classList.remove("active"));
            header.classList.remove("expanded");
            mobileMenu.classList.remove("active"); // Fermer le menu mobile si ouvert
        }
    });

    // Gestion du bouton burger pour le menu mobile
    burgerMenu.addEventListener("click", function () {
        const isActive = mobileMenu.classList.toggle("active");
        burgerMenu.classList.toggle("active"); // Optionnel : changer l'apparence du bouton burger

        // Ajuster la hauteur de l'en-tête si nécessaire
        if (isActive) {
            header.classList.add("expanded");
        } else {
            header.classList.remove("expanded");
        }
    });
});
