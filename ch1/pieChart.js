var data = [
    { data: [[0, 22.4]], label: "Extreme Poverty" },
    { data: [[1, 77.6]] }
];

window.onload = function () {
    // eslint-disable-next-line no-undef
    Flotr.draw(document.getElementById("chart"), data, {
        title: "How much of the World lives on $1.25/Day?",
        colors: ["#ff0000", "#6495ed"],
        pie: {
            show: true,
            fillOpacity: 1
        },
        yaxis: {
            showLabels: false
        },
        xaxis: {
            showLabels: false
        },
        grid: {
            horizontalLines: false,
            verticalLines: false
        }
    });
};
