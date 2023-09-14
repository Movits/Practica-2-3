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
