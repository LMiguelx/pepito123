const express = require('express');
const app = express();
const port = 9000;

app.get('/', (req, res) => {
    res.send('¡Hola, mundo!');
});
app.get('/clientes', (req, res) => {
    res.send('Ruta de Clientes');
});
app.get('/productos', (req, res) => {
    res.send('Ruta de productos');
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});