//Una opcion

const express= require('express');
const databaseConnection=require('./config/global');

const routes=express.Router();


    routes.get('/api/productos', (req, res) => {
        databaseConnection.query('SELECT * FROM productos',(error,data)=>{
            if(error){
                console.log(error)
            }else{
    
               /*mande esa informacion al frond para mostrarlo en el sitio*/
                res.send(data) 
            }
        });
    });
    
module.exports = routes;

