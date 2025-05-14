require("dotenv").config();
const { Pool } = require("pg");

// Cria uma pool de conexões para melhorar performance
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Testa a conexão
pool
  .connect()
  .then((client) => {
    console.log("✅ Conectado ao PostgreSQL com sucesso!");
    client.release(); // libera a conexão para reuso
  })
  .catch((err) => {
    console.error("❌ Erro ao conectar ao PostgreSQL:", err);
  });

module.exports = pool;
