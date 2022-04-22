
const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const compression = require('compression');
const databaseConnection=require('./config/global');

const app = express();
databaseConnection.connect();

app.use(express.json()); // nos vamos a manejar con el envio de info por este formato

app.use(compression());
app.use(cors());

app.use("",routes);
//app.use(routes(router));
/* para saber que camino tomar segun la peticion desde el front fijate en routes
*/



module.exports = app; 

