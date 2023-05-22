const express = require("express");
require('./config/bd');
const cors = require("cors");
const morgan = require("morgan")
const appRouter = require("./routers")
const app = express();



app.use(cors());
app.use(express.json())
app.use(morgan("dev"));

app.use(express.urlencoded({ extended: true, limit: "50mb" }));


app.use('/api', appRouter)


app.listen(5000)