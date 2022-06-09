import {createPool} from 'mysql2'

export const cxMysql = createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'instrumentosDB',
    connectionLimit: 100 //100 es el valor por defecto
  });

cxMysql.getConnection((error)=>{
    if(error){
        console.log('El erro de conexion es: '+error);
        return;
    }
    console.log('Conectado a la base de datos!');
});