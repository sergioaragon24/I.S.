const conn = require('../../config/serverdb');

module.exports = (app) => {
    app.post('/login', (req, res, next) => {
        let query = `SELECT nombre FROM Usuario WHERE email = '${req.body.email}' AND password = '${req.body.password}'`;
        conn.query(query, (error, resultado) => {
            if(error) res.status(500).json({status: 0, message: "ERROR en coneccion a la tabla"});
            else if (resultado.length > 0) {
                res.json({status: 1, message: "Usuario y password correctos"});
            } else {
                res.json({status: 0, message: "No coincide usuario y password"});
            }
        });
    });

    app.post('/registro', (req, res, next) => {
        let query = `INSERT INTO Usuario (nombre, email, password, escuela) VALUES ('${req.body.nombre}','${req.body.email}','${req.body.password}', '${req.body.escuela}')`;
        conn.query(query, (error, filas, col) => {
            if (error) res.status(500).json({status: 0, message: "No se pudo insertar el usuario"});
            else res.json({status:1, message: `Se inserto usuario satisfactoriamente con id ${filas.insertId}`});
        });
    });
}