document.addEventListener('DOMContentLoaded', function() {
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
});