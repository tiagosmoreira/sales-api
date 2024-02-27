const db = require("../configs/postgres");
const productQueries = require("../queries/product-queries");

const getAllProducts = async (req, res) => {
    db.any(productQueries.SELECT_ALL_PRODUCTS)
        .then((data) => {
            res.send(data)
        })
        .catch((error) => {
            console.log(error)
        })
}

module.exports = {
    getAllProducts,
}