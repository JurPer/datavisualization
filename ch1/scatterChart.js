var healthData = [
    { country: "Australia", spending: 9.1, life: 81.8 },
    { country: "New Zealand", spending: 10.1, life: 81.0 },

    { country: "Austria", spending: 11.0, life: 80.7 },
    { country: "Belgium", spending: 10.5, life: 80.3 },
    { country: "Czech Republic", spending: 7.5, life: 77.7 },
    { country: "Denmark", spending: 11.1, life: 79.3 },
    { country: "Estonia", spending: 6.3, life: 75.6 },
    { country: "Finland", spending: 8.9, life: 80.2 },
    { country: "France", spending: 11.6, life: 81.3 },
    { country: "Germany", spending: 11.6, life: 80.5 },
    { country: "Greece", spending: 10.2, life: 80.6 },
    { country: "Hungary", spending: 7.8, life: 74.3 },
    { country: "Iceland", spending: 9.3, life: 81.5 },
    { country: "Ireland", spending: 9.2, life: 81.0 },
    { country: "Italy", spending: 9.3, life: 82.0 },
    { country: "Luxembourg", spending: 7.9, life: 80.7 },
    { country: "Netherlands", spending: 12.0, life: 80.8 },
    { country: "Norway", spending: 9.4, life: 81.2 },
    { country: "Poland", spending: 7.0, life: 76.3 },
    { country: "Portugal", spending: 10.7, life: 79.8 },
    { country: "Slovak Republic", spending: 9.0, life: 75.2 },
    { country: "Slovenia", spending: 9.0, life: 79.5 },
    { country: "Spain", spending: 9.6, life: 82.2 },
    { country: "Sweden", spending: 9.6, life: 81.5 },
    { country: "Switzerland", spending: 11.4, life: 82.6 },
    { country: "Turkey", spending: 6.1, life: 74.3 },
    { country: "United Kingdom", spending: 9.6, life: 80.6 },

    { country: "Canada", spending: 11.4, life: 80.8 },
    { country: "Chile", spending: 8.0, life: 79.0 },
    { country: "Mexico", spending: 6.2, life: 75.5 },
    { country: "United States", spending: 17.6, life: 78.7 },

    { country: "Israel", spending: 7.5, life: 81.7 },

    { country: "Japan", spending: 9.5, life: 83.0 },
    { country: "Korea", spending: 7.1, life: 80.7 },

    { country: "United States", spending: 17.6, life: 78.7 },
];

var data = [];
for (var i = 0; i < healthData.length; i++) {
    data.push([
        healthData[i].spending,
        healthData[i].life
    ]);
};

window.onload = function () {
    Flotr.draw(this.document.getElementById("chart"),
        [{ data: this.data, points: { show: true, fillColor: "#1e90ff" } }],
        {
            xaxis: { min: 5, max: 20 },
            yaxis: { min: 70, max: 85 }
        }
    );
};

//TODO: STEP 5: LABEL THE DATA. Page 28/44