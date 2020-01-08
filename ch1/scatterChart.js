// Define the data
{
    var pacificData = [
        { country: "Australia", spending: 9.1, life: 81.8 },
        { country: "New Zealand", spending: 10.1, life: 81.0 }
    ];

    var europeData = [
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
        { country: "United Kingdom", spending: 9.6, life: 80.6 }
    ];

    var americasData = [
        { country: "Canada", spending: 11.4, life: 80.8 },
        { country: "Chile", spending: 8.0, life: 79.0 },
        { country: "Mexico", spending: 6.2, life: 75.5 },
        { country: "United States", spending: 17.6, life: 78.7 }
    ];

    var mideastData = [
        { country: "Israel", spending: 7.5, life: 81.7 }
    ];

    var asiaData = [
        { country: "Japan", spending: 9.5, life: 83.0 },
        { country: "Korea", spending: 7.1, life: 80.7 }
    ];

    var usData = [
        { country: "United States", spending: 17.6, life: 78.7 }
    ];
}

// Extract the data
{
    var pacific = [], europe = [], americas = [], mideast = [], asia = [], us = [];

    for (var i = 0; i < pacificData.length; i++) {
        pacific.push([
            pacificData[i].spending,
            pacificData[i].life
        ]);
    }

    for (i = 0; i < europeData.length; i++) {
        europe.push([
            europeData[i].spending,
            europeData[i].life
        ]);
    }

    for (i = 0; i < americasData.length; i++) {
        americas.push([
            americasData[i].spending,
            americasData[i].life
        ]);
    }

    for (i = 0; i < mideastData.length; i++) {
        mideast.push([
            mideastData[i].spending,
            mideastData[i].life
        ]);
    }

    for (i = 0; i < asiaData.length; i++) {
        asia.push([
            asiaData[i].spending,
            asiaData[i].life
        ]);
    }

    for (i = 0; i < usData.length; i++) {
        us.push([
            usData[i].spending,
            usData[i].life
        ]);
    }
}

window.onload = function () {
    Flotr.draw(document.getElementById("chart"),
        [
            { data: pacific, label: "Pacific", points: { show: true, fillColor: "" } },
            { data: europe, label: "Europe", points: { show: true, fillColor: "" } },
            { data: mideast, label: "Middle East", points: { show: true, fillColor: "" } },
            { data: asia, label: "Asia", points: { show: true, fillColor: "" } },
            { data: americas, label: "Americas", points: { show: true, fillColor: "" } },
            { data: us, label: "United States", points: { show: true, fillColor: "" } },
        ],
        {
            title: "Life Expectancy vs. Health-Care Spending",
            colors: ["#0000ff", "#6495ed", "#006400", "#90ee90", "#ffa500", "#ff0000"],
            subtitle: "(by country, 2010 OECD data)",
            xaxis: {
                min: 5, max: 20, tickDecimals: 0,
                title: "Spending as Percentage of GDP",
                tickFormatter: function (val) { return val + " %" }
            },
            yaxis: { min: 70, max: 85, tickDecimals: 0, title: "years" },
            legend: { position: "se" }
        }
    );
};
