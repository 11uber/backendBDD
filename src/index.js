//MongoDB requires
const mongoose = require('mongoose');
require("dotenv").config();
const pedidosRoutes = require("./routes/pedidos");
const productosRoutes = require("./routes/productos");


//MySQL requires
const mysql = require('mysql');
const myconn = require('express-myconnection');
const dbOptions = {
    host: '34.222.130.2',
    port: '3306',
    user: 'univar',
    password: 'Univar98.',
    database: 'db0122130052'
};
const routesMySQL = require('./routes/usuarios');

//Both requires
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.port || 9000;

// Middleware ---------------------------------------------------------------------
//Both
app.use(express.json());
app.use(cors())

// MongoDB
app.use('/api', pedidosRoutes);
app.use('/api', productosRoutes);

// MySQL 
app.use(myconn(mysql, dbOptions, 'single'));

//Rutas ---------------------------------------------------------------------------
app.get('/', (req, res) =>{
    res.send('Welcome to my API'); //Aquí mandamos a la primera vista
});
app.use('/api', routesMySQL);

// MongoDB connection
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log('Conected to MongoDB Atlas'))
    .catch((error) => console.error(error));

// MySQL connection
// Empty


app.listen(port, () => console.log('server is listening on port ', port));


