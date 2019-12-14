var friends = require("../data/friends.js");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        var differtotal = 0;
        var finalMatch = {
            name: "",
            photo: "",
            frienddiffer: 1000
        };

        var dataUser = req.body;
        var nameUser = dataUser.name;
        var scoreUser = dataUser.scores;

        var be = scoreUser.map(function (item) {
            return parseInt(item, 10);
        });

        dataUser = {
            name: req.body.name,
            photo: req.body.photo,
            scores: be
        };

        console.log("Name: " + nameUser);
        console.log("Score: " + scoreUser);

        var summary = be.reduce((a, b) => a + b, 0);
        console.log("Score Summary" + summary);
        console.log("Best Match" + bestMatch.frienddiffer);
        console.log("=====================================================");

        for (var i = 0; i < friends.length; i++) {
            console.log(friends[i].name);
            differtotal = 0;
            console.log("Total Difference" + differtotal);
            console.log("Best Match difference" + bestMatch.frienddiffer);
        }
    });
};