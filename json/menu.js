document.addEventListener("DOMContentLoaded", function () {
    const dropdowns = document.querySelectorAll(".dropdown");
    const header = document.querySelector("header");

    dropdowns.forEach((dropdown) => {
        const button = dropdown.querySelector(".dropdown-button");
        button.addEventListener("click", function () {
            // Fermer tous les autres menus
            dropdowns.forEach((d) => {
                if (d !== dropdown) d.classList.remove("active");
            });

            // Basculer le menu actuel
            const isActive = dropdown.classList.toggle("active");

            // Ajuster la hauteur de l'en-tête
            if (isActive) {
                header.classList.add("expanded");
            } else {
                header.classList.remove("expanded");
            }
        });
    });

    // Fermer le menu lorsqu'on clique ailleurs
    document.addEventListener("click", function (event) {
        if (!event.target.closest("header")) {
            dropdowns.forEach((d) => d.classList.remove("active"));
            header.classList.remove("expanded");
        }
    });
});
