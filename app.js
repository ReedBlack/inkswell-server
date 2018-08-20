require("dotenv").load();
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();
const cors = require('cors');
const clientusers = require("./routes/clientUsers");
const artistusers = require("./routes/artistUsers");
const clientLikes = require("./routes/clientLikes");
const artistLikes = require("./routes/artistLikes");
const matches = require("./routes/matches");
const chat = require("./routes/chat");
const multerS3 = require("multer-s3");
const aws = require("aws-sdk");
const multer = require("multer");

app.use(morgan('dev'));

// The event will be called when a client is connected.

app.use(bodyParser.json());
app.use(cors())
app.use("/clientusers", clientusers);
app.use("/artistusers", artistusers);
app.use("/matches", matches);
app.use("/chat", chat);
app.use("/clientLikes", clientLikes);
app.use("/artistLikes", artistLikes);

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