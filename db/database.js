const mongoose = require("mongoose");

const server = "localhost:27017";
const database = "cripim";

class Database {
  constructor() {
    this._connect();
  }

  _connect() {
    mongoose
      .connect(`mongodb://${server}/${database}`)
      .then(() => console.log("Conectado ao MongoDB!"))
      .catch((err) => console.error("Erro ao conectar ao MongoDB:", err));
  }
}

module.exports = new Database();
