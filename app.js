const express = require('express');
const app = express();
const port = 5000;
const productsApi = require ('./controllers/productApi');
const cors = require('cors');

require('./utils/dbmongo');

app.use(cors());

app.get('/', (req, res) => {
    res.status(200).send('Bienvenido a Tiendapp')
});

app.get('/api/products', productsApi.getAllProducts);
app.get('/api/products/:name?', productsApi.getProductsByName);
app.get('/api/products/:provider?', productsApi.getProductsByProvider);

app.listen(port, () => {
console.log(`Example app listening at http://localhost:${port}`)
});