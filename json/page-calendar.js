document.addEventListener("DOMContentLoaded", () => {
    const calendarHeader = document.querySelector(".current-month");
    const calendarBody = document.querySelector(".calendar-table tbody");
    const prevMonthBtn = document.querySelector(".prev-month");
    const nextMonthBtn = document.querySelector(".next-month");

    let currentDate = new Date();

    // Fonction pour générer les jours
    function renderCalendar(date) {
        const year = date.getFullYear();
        const month = date.getMonth();

        // Mettre à jour l'en-tête
        const monthNames = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
        calendarHeader.textContent = `${monthNames[month]} ${year}`;

        // Effacer le contenu précédent
        calendarBody.innerHTML = "";

        // Obtenir le premier et le dernier jour du mois
        const firstDay = new Date(year, month, 1).getDay(); // Dimanche = 0
        const lastDate = new Date(year, month + 1, 0).getDate();

        let day = 1;

        // Générer les semaines
        for (let i = 0; i < 6; i++) {
            const row = document.createElement("tr");

            for (let j = 0; j < 7; j++) {
                const cell = document.createElement("td");

                if (i === 0 && j < firstDay) {
                    // Cellule vide avant le début du mois
                    cell.textContent = "";
                } else if (day > lastDate) {
                    // Cellule vide après la fin du mois
                    cell.textContent = "";
                } else {
                    // Jour du mois
                    cell.textContent = day;

                    // Exemple d'ajout d'événement
                    if (day === 25) {
                        const event = document.createElement("div");
                        cell.appendChild(event);
                    }

                    day++;
                }

                row.appendChild(cell);
            }

            calendarBody.appendChild(row);
        }
    }

    // Gestion des boutons de navigation
    prevMonthBtn.addEventListener("click", () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar(currentDate);
    });

    nextMonthBtn.addEventListener("click", () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar(currentDate);
    });

    // Initialisation du calendrier
    renderCalendar(currentDate);
});

document.addEventListener("DOMContentLoaded", function () {
    const calendarEl = document.getElementById('calendar');

    const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        events: [
            {
                title: 'Conférence A',
                start: '2024-12-01',
                description: 'Description complète de la conférence A.',
            },
            {
                title: 'Atelier B',
                start: '2024-12-10',
                end: '2024-12-12',
                description: 'Atelier sur le développement personnel.',
            }
        ],
        dayClick: function(info) {
            // Afficher les horaires du jour sélectionné
            const selectedDate = info.dateStr;
            const timeSlots = [
                '08:00 - 09:00',
                '09:00 - 10:00',
                '10:00 - 11:00',
                '11:00 - 12:00',
                '13:00 - 14:00',
                '14:00 - 15:00',
                '15:00 - 16:00',
                '16:00 - 17:00'
            ];
            
            // Afficher un planning horaire pour ce jour
            let scheduleHTML = `<h3>Planning pour le ${selectedDate}</h3>`;
            scheduleHTML += '<ul>';
            timeSlots.forEach(time => {
                scheduleHTML += `<li>${time}</li>`;
            });
            scheduleHTML += '</ul>';

            // Afficher dans une section ou modal
            document.getElementById('schedule').innerHTML = scheduleHTML;
        },
        locale: 'fr',
        buttonText: {
            today: 'Aujourd’hui',
            month: 'Mois',
            week: 'Semaine',
            day: 'Jour'
        }
    });

    calendar.render();
});


const calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth', // Vue par défaut
    headerToolbar: {
        left: 'prev,next today', // Navigation
        center: 'title', // Titre
        right: 'dayGridMonth,timeGridWeek,timeGridDay' // Choix des vues (mensuelle, hebdomadaire, horaire)
    },
    events: [
        {
            title: 'Conférence A',
            start: '2024-12-01',
            description: 'Description complète de la conférence A.',
        },
        {
            title: 'Atelier B',
            start: '2024-12-10',
            end: '2024-12-12',
            description: 'Atelier sur le développement personnel.',
        }
    ],
    dayClick: function(info) {
        // Votre gestion des clics sur un jour
    },
    locale: 'fr',
    buttonText: {
        today: 'Aujourd’hui',
        month: 'Mois',
        week: 'Semaine',
        day: 'Jour'
    }
});

