// document.querySelectorAll(".event-item").forEach((item) => {
//     item.addEventListener("click", () => {
//         const details = item.querySelector(".event-details");
//         if (details) {
//             details.style.display = details.style.display === "block" ? "none" : "block";
//         }
//     });
// });

// document.querySelectorAll('.event-item').forEach(item => {
//     item.addEventListener('click', function(event) {
//         // Vérifie si le clic provient d'un lien ou d'un enfant d'un lien
//         if (event.target.tagName === 'A' || event.target.closest('a')) {
//             return; // Arrête la propagation si c'est un lien
//         }

//         // Basculer la visibilité des détails
//         const details = this.querySelector('.event-details');
//         if (details.style.display === 'none' || !details.style.display) {
//             details.style.display = 'block';
//         } else {
//             details.style.display = 'none';
//         }
//     });
// });

document.querySelectorAll('.event-item').forEach(item => {
    // Gérer le clic sur la grande boîte
    item.addEventListener('click', function () {
        const details = this.querySelector('.event-details');
        if (details.style.display === 'none' || !details.style.display) {
            details.style.display = 'block';
        } else {
            details.style.display = 'none';
        }
    });

    // Empêcher l'effet de clic sur la petite boîte
    const details = item.querySelector('.event-details');
    if (details) {
        details.addEventListener('click', function (event) {
            event.stopPropagation(); // Arrête la propagation du clic vers l'élément parent
        });
    }
});
