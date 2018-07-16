require("dotenv").load();
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();
const cors = require('cors');
// const clientusers = require("./routes/clientusers");
// const artistusers = require("./routes/artistusers");
// const matches = require("./routes/matches");
// const chat = require("./routes/chat");
const multerS3 = require("multer-s3");
const aws = require("aws-sdk");
const multer = require("multer");
const queries_artistusers = require("./queries/queries_artistUsers");
const queries_chat = require("./queries/queries_chat");
const queries_clientusers = require("./queries/queries_clientUsers");
const queries_matches = require("./queries/queries_matches");

app.use(morgan('dev'));


app.use(bodyParser.json());
app.use(cors())
// app.use("/clientusers", clientusers);
// app.use("/artistusers", artistusers);
// app.use("/matches", matches);
// app.use("/chat", chat);

const s3 = new aws.S3({
    apiVersion: "2006-03-01",
    region: "us-east-1",
    credentials: {
        secretAccessKey: process.env.SECRET_ACCESS_KEY,
        accessKeyId: process.env.ACCESS_KEY_ID
    }
});

const upload = multer({
    storage: multerS3({
        s3,
        bucket: "mixtap-mixes",
        key: (request, file, next) => {
            next(null, `${Date.now()}_${file.originalname}`);
        }
    })
});

app.get("/upload", (request, response, next) => {
    response.json({
        message: "Testing out the upload route"
    });
});

app.post("/upload",

    upload.array("image", 1), (request, response) => {
        response.json({
            imageUrl: `${request.files[0].location}`
        });
    });

app.get("/clientusers", (request, response, next) => {
    queries_clientusers
        .list()
        .then(clientusers => {
            response.json({
                clientusers
            });
        })
        .catch(next);
});

app.post("/clientusers", (request, response, next) => {
    console.log("body is   ", request.body);
    queries_clientusers
        .create(request.body)
        .then(match => {
            response.status(201).json({
                match
            });
        })
        .catch(next);
});

app.get("/artistusers", (request, response, next) => {
    queries_artistusers
        .list()
        .then(artistusers => {
            response.json({
                artistusers
            });
        })
        .catch(next);
});

app.post("/artistusers", (request, response, next) => {
    console.log("body is   ", request.body);
    queries_artistusers
        .create(request.body)
        .then(match => {
            response.status(201).json({
                match
            });
        })
        .catch(next);
});

app.get("/matches", (request, response) => {
    database("matches")
        .select()
        .then(matches => {
            response.send({
                matches
            });
        });
});

app.post("/matches", (request, response, next) => {
    queries_matches
        .create(request.body)
        .then(match => {
            response.status(201).json({
                match
            });
        })
        .catch(next);
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
});

// error handler
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        message: err.message,
        error: req.app.get("env") === "development" ? err.stack : {}
    });
});

module.exports = app;