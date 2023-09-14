//CREATE
app.post('/agregar', (req, res) => {
    let datos = {nombre: req.body.nombre, email: req.body.email, edad: req.body.edad, pais: req.body.pais};
    let sql = "INSERT INTO usuarios SET ?";
    conexion.query(sql, datos, (error, resultados) => {
        if (error) throw error;
        res.json({dni: resultados.insertId, ...datos});
    });
});

//READ
app.get('/usuarios', (req, res) => {
    let sql = "SELECT * FROM usuarios";
    conexion.query(sql, (error, resultados) => {
        if (error) throw error;
        res.json(resultados);
    });
});

app.get('/usuario/:dni', (req, res) => {
    let sql = "SELECT * FROM usuarios WHERE dni = ?";
    conexion.query(sql, [req.params.dni], (error, resultados) => {
        if (error) throw error;
        res.json(resultados[0]);
    });
});

//UPDATE
app.put('/actualizar/:dni', (req, res) => {
    let sql = "UPDATE usuarios SET nombre = ?, email = ?, edad = ?, pais = ? WHERE dni = ?";
    conexion.query(sql, [req.body.nombre, req.body.email, req.body.edad, req.body.pais, req.params.dni], (error, resultados) => {
        if (error) throw error;
        res.json({filasModificadas: resultados.changedRows});
    });
});

//DELETE
app.delete('/eliminar/:dni', (req, res) => {
    let sql = "DELETE FROM usuarios WHERE dni = ?";
    conexion.query(sql, [req.params.dni], (error, resultados) => {
        if (error) throw error;
        res.json({filasAfectadas: resultados.affectedRows});
    });
});

