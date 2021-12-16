const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");

const app = express();

app.get("/artist/:name", (req, res) => {
    const name = req.params.name;
    MongoClient.connect("mongodb://localhost:27017/", function (err, client) {
        let db = client.db("Artist");
        if (err) {
            throw err;
        }
        db.collection("Artist")
            .find({ name: name })
            .toArray(function (err, result) {
                if (err) {
                    throw err;
                }
                console.log(result);
            });
        res.send(result);
    });
});

app.get("/songs/:songid", (req, res) => {
    const songId = ObjectId(req.params.songid);
    MongoClient.connect("mongodb://localhost:27017/", function (err, client) {
        let db = client.db("Artist");
        if (err) {
            throw err;
        }
        db.collection("Songs")
            .find({ _id: songId })
            .toArray(function (err, result) {
                if (err) {
                    throw err;
                }
                console.log(result);
            });
        res.send(result);
    });
});

app.listen(3000, () => {
    console.log(`Example app listening on port 3000`);
});
