const express = require('express')
const usersRouter = require("./src/routers/user-routes");
const productRouter = require("./src/routers/product-routes");

const app = express()

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
})

app.use(express.json())

const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`API running on port ${port}`)
})

app.use('/users', usersRouter);
app.use('/products', productRouter);