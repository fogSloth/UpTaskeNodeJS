const express = require ('express');

const app = express();

app.listen(3009);

app.get('/', (req, res) => {
    res.send('Hola, bienvenido a mi pagina')
});