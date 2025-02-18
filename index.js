require("./database");

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

require("./database"); // Conexão com MongoDB

const taskRoutes = require("./routes/taskRoutes");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/api", taskRoutes);

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
