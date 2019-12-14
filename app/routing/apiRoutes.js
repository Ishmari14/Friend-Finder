var friends = require("../data/friends.js");
var connection;

if (process.env.JAWDB_URL) {
    connection = mysql.createConnection(process.env.JAWDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'todoagain_db'
    });
};

connection.connect();
module.exports = connection;

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
            console.log("Best Match Difference" + bestMatch.frienddiffer);

            var bfscore = friends[i].scores.reduce((a, b) => a + b, 0);
            console.log("BF score" + bfscore);
            ///subtracting difference to make final total score///
            differtotal += Math.abs(sum - bfscore);
            console.log("==============================>" + differtotal);

            if (differtotal <= bestMatch.frienddiffer) {
                bestMatch.name = friends[i].name;
                bestMatch.photo = friends[i].photo;
                bestMatch.frienddiffer = differtotal;
            }
            console.log(differtotal + "Complete Total Difference");

        };

        console.log(bestMatch);
        console.log(dataUser);
        friends.push(dataUser);
        console.log("Adding New User");
        res.json(bestMatch);
    });
};