require("dotenv").config();

const { Pool } = require("pg");

const pool = new Pool({

});

pool.connect()
    .then(() => console.log("PostgreSQL conectado"))
    .catch(err => console.log("Error de conexión:", err));

module.exports = pool;