import { cxMysql } from '../database/db';
import { Request, Response } from "express";

export const getInstrumentos = (_req:Request, res:Response) => new Promise((_resolve, _reject) => {
    cxMysql.getConnection((err, connection) => {
        if (err){ 
          console.error(err);
          res.send(err);
          return;
        }
        console.log('MySQL Connection: ', connection.threadId);
        connection.query('SELECT * FROM instrumento LIMIT 50', (err, results) => {
          if (err) console.error(err);
          //console.log('User Query Results: ', results);
          res.send(results);
        });
    });
});

export const getInstrumentoXID = (req:Request, res:Response) => new Promise((resolve, reject) => {
  const idArt = parseInt(req.params.id);
  cxMysql.getConnection((err, connection) => {
      if (err){
        console.error(err);
        res.send(err);
        return;
      } 
      connection.query('SELECT * FROM instrumento WHERE id = ?', [idArt], (err, results) => {
        if (err) console.error(err);
        res.send(results)
      });
    });
});

export const insertInstrumento = (req:Request, res:Response) => new Promise((resolve, reject) => {
    
  const {instrumento, marca, modelo, imagen, precio, costoEnvio, cantidadVendida, descripcion} = req.body;
  var values = [instrumento, marca, modelo, imagen, precio, costoEnvio, cantidadVendida, descripcion];
  cxMysql.getConnection((err, connection) => {
      if (err) {
          console.error(err);
          res.send(err);
          return;
      }
      else{
          let sql:string = 'INSERT INTO instrumento(instrumento, marca, modelo, imagen, precio, costoEnvio, cantidadVendida, descripcion) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
          connection.query(sql, values, (err, results) => {
              if (err) {
                console.error(err);
                res.json({message:"Error al tratar de insertar"})
              }else{
                res.json({message:"Instrumento Insertado con exito"})
              }
            });
      }          
    });
});

export const actualizarInstrumento = (req:Request, res:Response) => new Promise((resolve, reject) => {
  const {instrumento, marca, modelo, imagen, precio, costoEnvio, cantidadVendida, descripcion, id} = req.body;
  var values = [instrumento, marca, modelo, imagen, precio, costoEnvio, cantidadVendida, descripcion, id];
  cxMysql.getConnection((err, connection) => {
      if (err) {
          console.error(err);
          res.send(err);
          return;
      }
      else{
          let sql:string = 'UPDATE instrumento SET instrumento=?, marca=?, modelo=?, imagen=?, precio=?, costoEnvio=?, cantidadVendida=?, descripcion=? WHERE id=?';
          connection.query(sql, values, (err, results) => {
              if (err) {
                console.error(err);
                res.json({message:"Error al actualizar " + err});
              }else{
                res.json({message:"Instrumento Actualizado con exito"});
              }
            });
      }          
    });
});

export const eliminarInstrumento = (req:Request, res:Response) => new Promise((resolve, reject) => {
  const idArt = parseInt(req.params.id);
  cxMysql.getConnection((err, connection) => {
        if (err) {
          console.error(err);
          res.send(err);
          return;
        }
        connection.query('DELETE FROM instrumento WHERE id = ?', [idArt],(err, results) => {
        if (err) {
          console.error(err);
          res.json({message:"Error al tratar de Eliminar"})
        }else{
          res.json({message:"Instrumento Eliminado con exito"})
        }
      });
    });
});