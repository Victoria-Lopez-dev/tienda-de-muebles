require('dotenv').config();

const mysql = require('mysql2')

const databaseConnection = mysql.createConnection({
  host:process.env.HOST_DB,
  user:process.env.USER_DB,
  database:process.env.DATABASE_DB,
  password:process.env.PASS_DB,
})

databaseConnection.connect((error)=>{
  if(error) {
    console.log(error)
  } else {
    console.log('Servidor esta conectado a MySQL')
  }
})

module.exports = databaseConnection

