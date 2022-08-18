const express = require("express")
const cors = require("cors");

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

const app = express();
const port = 5000;

const corsOptions = {
    origin: '*',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
}
app.use(cors(corsOptions)) // Use this after the variable declaration

app.use(express.json())  // To allow json in request's bod
app.use(express.urlencoded({ extended: false }));

app.get("/api/players", (req, res) => {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("cric-db");
        dbo.collection("players").find({}).toArray(function(err, result) {
            if (err) throw err;
            res.status(200);
            res.json({success: true, result: result});
            db.close();
        });
    });
})

app.get("/api/playersbyid", (req, res) => {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("cric-db");
        dbo.collection("players").findOne({_id: req.query._id}, (err, result) => {
            if (err) throw err;
            res.status(200);
            res.json({success: true, result: result});
            db.close();
        })
    });
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})
