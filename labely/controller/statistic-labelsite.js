
document.addEventListener("DOMContentLoaded", function () {
    // Pie chart
    new Chart(document.getElementById("chartjs-dashboard-pie"), {
        type: "pie",
        data: {
            labels: ["Switzerland", "Germany", "Argentinia"],
            datasets: [{
                data: [55, 12.5, 32.5],
                backgroundColor: [
                    window.theme.primary,
                    window.theme.warning,
                    window.theme.danger
                ],
                borderWidth: 5
            }]
        },
        options: {
            responsive: !window.MSInputMethodContext,
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            cutoutPercentage: 75
        }
    });
});
