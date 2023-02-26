const express = require("express")
const cors = require("cors");
require('dotenv').config();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://chaitanyas2002:test1234@cric-db-cluster.tahgvje.mongodb.net/?retryWrites=true&w=majority";

const app = express();

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
        dbo.collection("players").find({}).sort({"name": 1}).toArray(function(err, result) {
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

app.listen(process.env.PORT || 5000, () => {
    console.log(`Example app listening at http://localhost`);
})
