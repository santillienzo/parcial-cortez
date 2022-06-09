"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eliminarInstrumento = exports.actualizarInstrumento = exports.insertInstrumento = exports.getInstrumentoXID = exports.getInstrumentos = void 0;
const db_1 = require("../database/db");
const getInstrumentos = (_req, res) => new Promise((_resolve, _reject) => {
    db_1.cxMysql.getConnection((err, connection) => {
        if (err) {
            console.error(err);
            res.send(err);
            return;
        }
        console.log('MySQL Connection: ', connection.threadId);
        connection.query('SELECT * FROM instrumento LIMIT 50', (err, results) => {
            if (err)
                console.error(err);
            //console.log('User Query Results: ', results);
            res.send(results);
        });
    });
});
exports.getInstrumentos = getInstrumentos;
const getInstrumentoXID = (req, res) => new Promise((resolve, reject) => {
    const idArt = parseInt(req.params.id);
    db_1.cxMysql.getConnection((err, connection) => {
        if (err) {
            console.error(err);
            res.send(err);
            return;
        }
        connection.query('SELECT * FROM instrumento WHERE id = ?', [idArt], (err, results) => {
            if (err)
                console.error(err);
            res.send(results);
        });
    });
});
exports.getInstrumentoXID = getInstrumentoXID;
const insertInstrumento = (req, res) => new Promise((resolve, reject) => {
    const { instrumento, marca, modelo, imagen, precio, costoEnvio, cantidadVendida, descripcion } = req.body;
    var values = [instrumento, marca, modelo, imagen, precio, costoEnvio, cantidadVendida, descripcion];
    db_1.cxMysql.getConnection((err, connection) => {
        if (err) {
            console.error(err);
            res.send(err);
            return;
        }
        else {
            let sql = 'INSERT INTO instrumento(instrumento, marca, modelo, imagen, precio, costoEnvio, cantidadVendida, descripcion) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
            connection.query(sql, values, (err, results) => {
                if (err) {
                    console.error(err);
                    res.json({ message: "Error al tratar de insertar" });
                }
                else {
                    res.json({ message: "Instrumento Insertado con exito" });
                }
            });
        }
    });
});
exports.insertInstrumento = insertInstrumento;
const actualizarInstrumento = (req, res) => new Promise((resolve, reject) => {
    const { instrumento, marca, modelo, imagen, precio, costoEnvio, cantidadVendida, descripcion, id } = req.body;
    var values = [instrumento, marca, modelo, imagen, precio, costoEnvio, cantidadVendida, descripcion, id];
    db_1.cxMysql.getConnection((err, connection) => {
        if (err) {
            console.error(err);
            res.send(err);
            return;
        }
        else {
            let sql = 'UPDATE instrumento SET instrumento=?, marca=?, modelo=?, imagen=?, precio=?, costoEnvio=?, cantidadVendida=?, descripcion=? WHERE id=?';
            connection.query(sql, values, (err, results) => {
                if (err) {
                    console.error(err);
                    res.json({ message: "Error al actualizar " + err });
                }
                else {
                    res.json({ message: "Instrumento Actualizado con exito" });
                }
            });
        }
    });
});
exports.actualizarInstrumento = actualizarInstrumento;
const eliminarInstrumento = (req, res) => new Promise((resolve, reject) => {
    const idArt = parseInt(req.params.id);
    db_1.cxMysql.getConnection((err, connection) => {
        if (err) {
            console.error(err);
            res.send(err);
            return;
        }
        connection.query('DELETE FROM instrumento WHERE id = ?', [idArt], (err, results) => {
            if (err) {
                console.error(err);
                res.json({ message: "Error al tratar de Eliminar" });
            }
            else {
                res.json({ message: "Instrumento Eliminado con exito" });
            }
        });
    });
});
exports.eliminarInstrumento = eliminarInstrumento;
