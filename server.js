const express = require("express")

const CarRouter = require('./router/car-router');

const server = express();

server.use(express.json());

server.use("/api/cardealer",CarRouter )


server.get("/", (req, res) => {
    res.status(200).json({api: "Api Running"})
})

module.exports =server