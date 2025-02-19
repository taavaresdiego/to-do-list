let mongoose = require("mongoose");

const server = "localhost:27017";
const database = "cripim";

class Database {
  constructor() {
    this._connect();
  }

  _connect() {
    mongoose
      .connect(`mongodb://${server}/${database}`)
      .then(() => {
        console.log("Database connection successful");
        console.log("Conectado ao banco:", mongoose.connection.name);
        mongoose.connection.db
          .listCollections()
          .toArray()
          .then((collections) =>
            console.log(
              "Collections disponíveis:",
              collections.map((col) => col.name)
            )
          )
          .catch((err) => console.error(err));
      })
      .catch((err) => {
        console.error("Database connection error");
      });
  }
}

module.exports = new Database();
