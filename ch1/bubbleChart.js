var katrina = [
    { north: 23.2, west: 75.5, wind: 35 },
    { north: 24.0, west: 76.4, wind: 35 },
    { north: 25.2, west: 77.0, wind: 45 },
    { north: 26.0, west: 77.6, wind: 45 },
    { north: 26.2, west: 78.7, wind: 50 },
    { north: 26.1, west: 79.9, wind: 75 },
    { north: 25.5, west: 80.7, wind: 75 },
    { north: 25.1, west: 82.2, wind: 100 },
    { north: 24.8, west: 82.9, wind: 100 },
    { north: 24.4, west: 84.0, wind: 110 },
    { north: 24.4, west: 84.6, wind: 115 },
    { north: 25.1, west: 86.8, wind: 145 },
    { north: 25.7, west: 87.7, wind: 160 },
    { north: 26.5, west: 88.6, wind: 175 },
    { north: 27.9, west: 89.5, wind: 160 },
    { north: 29.7, west: 89.6, wind: 135 },
    { north: 30.8, west: 89.6, wind: 105 },
    { north: 31.9, west: 89.6, wind: 75 },
    { north: 32.9, west: 88.9, wind: 65 },
    { north: 34.7, west: 88.4, wind: 50 },
]

function getPoints(sourceArray, filterFunction) {
    var result = [];
    for (var i = 0; i < sourceArray.length; i++) {
        if ((typeof filterFunction === "undefined")
            || (typeof filterFunction !== "function")
            || filterFunction(sourceArray[i])) {
            result.push([
                sourceArray[i].west * -1,
                sourceArray[i].north,
                sourceArray[i].wind
            ]);
        }
    }
}

window.onload = function () {
    // eslint-disable-next-line no-undef
    Flotr.draw(document.getElementById("chart"), data, {

    });
}
