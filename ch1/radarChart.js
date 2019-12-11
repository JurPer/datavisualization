
var players = [
    { player: "Chris Bosh", points: 17.2, rebounds: 7.9, assists: 1.6, steals: 0.8, blocks: 0.8 },
    { player: "Shane Battier", points: 5.4, rebounds: 2.6, assists: 1.2, steals: 1.0, blocks: 0.5 },
    { player: "LeBron James", points: 28.0, rebounds: 8.4, assists: 6.1, steals: 1.9, blocks: 0.8 },
    { player: "Dwayne Wade", points: 22.3, rebounds: 5.0, assists: 4.5, steals: 1.7, blocks: 1.3 },
    { player: "Mario Chalmers", points: 10.2, rebounds: 2.9, assists: 3.6, steals: 1.4, blocks: 0.2 },
];

var team = {
    points: 98.2,
    rebounds: 41.3,
    assists: 19.3,
    steals: 8.5,
    blocks: 5.3,
};

var labels = [
    [0, "Points"],
    [1, "Rebounds"],
    [2, "Assists"],
    [3, "Steals"],
    [4, "Blocks"]
];

var getPlayer = function (name) {
    for (var i = 0; i < players.length; i++) {
        if (players[i].player === name)
            return players[i];
    }
};

var playerData = function (name) {
    var obj = {}, i = 0;
    var currentPlayer;
    obj.label = name;
    obj.data = [];
    for (var key in team) {
        currentPlayer = getPlayer(name);
        obj.data.push([i,
            100 * ((currentPlayer[key]) / team[key])
        ]);
        i++;
    }
    return obj;
};

window.onload = function () {
    // eslint-disable-next-line no-undef
    Flotr.draw(document.getElementById("chart"), [
        playerData("LeBron James"),
        playerData("Dwayne Wade"),
        playerData("Chris Bosh"),
        playerData("Mario Chalmers"),
        playerData("Shane Battier"),
    ], {
        title: "2011/12 Miami Heat Starting Lineup - Contribution to Team Total",
        colors: ["#ff0000", "#7cfc00", "#1e90ff", "#008000", "#00008b"],
        radar: { show: true, radiusRatio: 0.9 },
        grid: { circular: true },
        xaxis: { ticks: labels },
        yaxis: { showLabels: false, min: 0, max: 33 },
        legend: { position: "nw" }
    });
};
