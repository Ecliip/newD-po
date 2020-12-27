const mariadb = require('mariadb');

const pool = mariadb.createConnection({
  host: '127.0.0.1',
  port: '3307',
  user: 'root',
  password: 'root',
  database: 'd_po'
});

// async function getConnection() {
//
//   try {
//     const connection = await pool.getConnection();
//     return connection;
//   } catch (error) {
//     console.error(error);
//   }
// }

module.exports = {pool}
