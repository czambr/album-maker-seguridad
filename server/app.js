//App configura servidor
// ------------------------------------------------------------------------
//                  Importacion de dependencias
// ------------------------------------------------------------------------
const express = require("express");
const morgan = require("morgan"); //Permite ver peticiones que llegan al back

const cookieParser = require("cookie-parser"); // Permite leer cookies
const cors = require("cors"); // Permite comunicacion entre dominios

const authController = require("./controllers/auth.controller");
const imageController = require("./controllers/images.controller");
const orderController = require("./controllers/order.controller");
const adminController = require("./controllers/admin.controller");

const app = express();
app.use(morgan("dev")); //Muestra mensaje corto por consola
app.use(express.json({ limit: "10mb" })); //Permite leer en formato json
app.use(cookieParser());
app.use(
    cors({
        // origin: "*",
        origin: ["http://localhost:3000", "http://192.168.3.6:3000"],
        credentials: true,
    })
);
app.use((req, res, next) => {
    // res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader("Access-Control-Allow-Origin", "http://192.168.3.6:3000");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    next();
});

app.use("/api", authController);
app.use("/api", imageController);
app.use("/api", orderController);
app.use("/api", adminController);

module.exports = app;
