// MENU BAR
document.getElementById('menu-toggle').addEventListener('click', function() {
    const menuSidebar = document.getElementById('menu-sidebar');
    const isMobile = window.innerWidth < 768;

    if (isMobile) {
        menuSidebar.style.top = '0';
    } else {
        menuSidebar.style.left = '0';
    }
});

document.getElementById('close-btn').addEventListener('click', function() {
    const menuSidebar = document.getElementById('menu-sidebar');
    const isMobile = window.innerWidth < 768;

    if (isMobile) {
        menuSidebar.style.top = '-100%';
    } else {
        menuSidebar.style.left = '-250px';
    }
});

// TRANSACTION SECTION- DROPDOWN
function toggleDetails(element) {
    const details = element.querySelector('.transaction-details');
    const arrowIcon = element.querySelector('.arrow-icon');

    if (details.style.display === 'block') {
        details.style.display = 'none';
        arrowIcon.src = 'icons/history-downarrow.svg';
    } else {
        details.style.display = 'block';
        arrowIcon.src = 'icons/history-uparrow.svg';
    }
}



const ctx = document.getElementById('doughnutChart').getContext('2d');
        const doughnutChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Incomplete', 'Pending approval', 'Approved'],
                datasets: [{
                    data: [5, 3, 13], // Replace with dynamic values
                    backgroundColor: ['#FFA500', '#FF6347', '#32CD32'],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                cutout: '70%',
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
        
        function updateChart(incomplete, pending, approved) {
            doughnutChart.data.datasets[0].data = [incomplete, pending, approved];
            doughnutChart.update();
        }
