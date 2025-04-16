document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".btn-top");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const blockLinks = button.nextElementSibling;
            const isOpen = blockLinks.style.height && blockLinks.style.height !== "0px";

            // Trouve un autre menu déjà ouvert
            const openedMenu = Array.from(document.querySelectorAll(".block-links"))
                .find(bl => bl !== blockLinks && bl.style.height && bl.style.height !== "0px");

            if (openedMenu) {
                const currentHeight = openedMenu.offsetHeight; // Hauteur actuelle du menu ouvert
                const newHeight = blockLinks.scrollHeight;

                // Ferme instantanément le menu ouvert sans transition
                openedMenu.style.transition = "none";
                openedMenu.style.height = "0";
                void openedMenu.offsetHeight; // Force reflow
                openedMenu.style.transition = "height 0.4s ease-in-out, padding 0.4s ease-in-out";

                // Prépare le nouveau menu à "prendre la place"
                blockLinks.style.transition = "none"; // Pas d'anim ici
                blockLinks.style.height = currentHeight + "px"; // Il prend l'ancienne hauteur
                void blockLinks.offsetHeight; // Reflow
                blockLinks.style.transition = "height 0.4s ease-in-out, padding 0.4s ease-in-out";

                // Et maintenant il passe à sa vraie taille
                requestAnimationFrame(() => {
                    blockLinks.style.height = newHeight + "px";
                });
            } else {
                // Aucun autre menu ouvert : toggle classique
                if (!isOpen) {
                    blockLinks.style.height = blockLinks.scrollHeight + "px";
                } else {
                    blockLinks.style.height = "0";
                }
            }
        });
    });
});
