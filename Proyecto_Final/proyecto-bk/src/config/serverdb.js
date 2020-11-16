const mysql = require('mysql');
const conn = mysql.createConnection({
    host: 'localhost',
    user: "root",
    password: '123456',
    database: "proyectosf"


});

conn.connect((error) => {
    if (error) {
        console.log("Error en el Servidor de Base de Datos");
    }else {
        console.log("Servidor de Base de Datos corriendo");
    }
});

module.exports = conn;
