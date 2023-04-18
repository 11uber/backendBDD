const express = require('express');
const routesMySQL = express.Router();


//Regresa todos los usuarios
routesMySQL.get('/usuarios', (req, res) =>{
    req.getConnection((err, conn) => {
        if(err) return res.send(err);

        conn.query('select * from usuarios;', (err, rows) => {
            if(err) return res.send(err);

            res.json(rows)
        })
    })
})


// Agregar un nuevo usuario
routesMySQL.post('/usuarios', (req, res) =>{
    req.getConnection((err, conn) => {
        if(err) return res.send(err);

        //console.log(req.body);

        conn.query('insert into usuarios set ?',[req.body], (err, rows) => {
            if(err) return res.send(err);

            res.send('Nuevo usuario agregado con exito');
        })
    })
})

// Borrar un usuario un usuario
routesMySQL.delete('/usuarios/:id', (req, res) =>{
    req.getConnection((err, conn) => {
        if(err) return res.send(err);

        conn.query('delete from usuarios where user_id = ?', [req.params.id], (err, rows) => {
            if(err) return res.send(err);

            res.send('Usuario borrado');
        })
    })
})

// Actualizar un usuario
routesMySQL.put('/usuarios/:id', (req, res) =>{
    req.getConnection((err, conn) => {
        if(err) return res.send(err);

        conn.query('update usuarios set ? where user_id = ?', [req.body, req.params.id], (err, rows) => {
            if(err) return res.send(err);

            res.send('Usuario actualizado');
        })
    })
})

module.exports = routesMySQL;
