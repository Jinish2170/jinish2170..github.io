document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('skillsChart').getContext('2d');
    const skillsChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['HTML', 'CSS', 'JavaScript', 'Python', 'AI & ML', 'Cybersecurity'],
            datasets: [{
                label: 'Skill Level',
                data: [90, 85, 80, 75, 95, 80],
                backgroundColor: 'rgba(48, 71, 94, 0.2)',
                borderColor: 'rgba(48, 71, 94, 1)',
                pointBackgroundColor: 'rgba(48, 71, 94, 1)',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scale: {
                ticks: {
                    beginAtZero: true,
                    max: 100
                },
                pointLabels: {
                    fontSize: 14
                }
            },
            legend: {
                display: false
            },
            animation: {
                duration: 2000,
                easing: 'easeOutBounce'
            },
            tooltips: {
                enabled: true
            }
        }
    });
});