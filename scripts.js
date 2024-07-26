document.addEventListener('DOMContentLoaded', function() {
    // Grafici per le statistiche chiave
    const costCtx = document.getElementById('cost_chart').getContext('2d');
    const riskCtx = document.getElementById('risk_chart').getContext('2d');

    const commonOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                font: {
                    size: 16
                }
            }
        }
    };

    new Chart(costCtx, {
        type: 'bar',
        data: {
            labels: ['Indice di Costo'],
            datasets: [{
                label: 'Costo Sintetico',
                data: [0.85],
                backgroundColor: 'rgba(0, 119, 182, 0.2)',
                borderColor: 'rgba(0, 119, 182, 1)',
                borderWidth: 1
            }]
        },
        options: {
            ...commonOptions,
            plugins: {
                ...commonOptions.plugins,
                title: {
                    ...commonOptions.plugins.title,
                    text: 'Indice di Costo Sintetico'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Valore'
                    }
                }
            }
        }
    });

    new Chart(riskCtx, {
        type: 'radar',
        data: {
            labels: ['Stress', 'Sfavorevole', 'Neutrale', 'Favorevole'],
            datasets: [{
                label: 'Indice di Rischio',
                data: [2, 4, 6, 8],
                backgroundColor: 'rgba(0, 180, 216, 0.2)',
                borderColor: 'rgba(0, 180, 216, 1)',
                borderWidth: 1,
                pointBackgroundColor: 'rgba(0, 180, 216, 1)'
            }]
        },
        options: {
            ...commonOptions,
            plugins: {
                ...commonOptions.plugins,
                title: {
                    ...commonOptions.plugins.title,
                    text: 'Indice di Rischio Sintetico'
                }
            },
            scales: {
                r: {
                    beginAtZero: true,
                    suggestedMax: 10,
                    ticks: {
                        stepSize: 2
                    }
                }
            }
        }
    });

    // Animazione delle barre dei bisogni
    function animateNeedBars() {
        const needBars = document.querySelectorAll('.need-bar');
        needBars.forEach(bar => {
            const value = bar.getAttribute('data-value');
            setTimeout(() => {
                bar.style.width = `${value}%`;
            }, 100);
        });
    }

    // Animazione delle barre dei bisogni e Value for Money
    function animateBars() {
        const bars = document.querySelectorAll('.need-bar, .vfm-bar');
        bars.forEach(bar => {
            const value = bar.getAttribute('data-value');
            setTimeout(() => {
                bar.style.width = `${value}%`;
            }, 100);
        });
    }

    // Funzione per verificare se un elemento è nel viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Animazione al scroll
    function handleScroll() {
        const cardsContainer = document.querySelector('.cards-container');
        if (isInViewport(cardsContainer)) {
            animateBars();
            window.removeEventListener('scroll', handleScroll);
        }
    }

// Animazione allo scroll
    function gestisciScroll() {
        const schedePerformance = document.querySelector('.schede-performance');
        if (isInViewport(schedePerformance)) {
        animaBarrePerformance();
        window.removeEventListener('scroll', gestisciScroll);
        }
    }

    // Inizializza l'animazione delle barre
    animateBars();

    // Aggiungi l'event listener per lo scroll
    window.addEventListener('scroll', handleScroll);

    // Animazione barre performance
    function animaBarrePerformance() {
        const barrePerformance = document.querySelectorAll('.barra-performance');
        barrePerformance.forEach(barra => {
            const valore = barra.getAttribute('data-valore');
            setTimeout(() => {
                barra.style.width = `${valore}%`;
            }, 100);
        });
    }

    // Inizializza l'animazione delle barre di performance
    animaBarrePerformance();
});