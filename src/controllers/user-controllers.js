const db = require("../configs/postgres");
const userQueries = require("../queries/user-queries");

const getAllUsers = async (req, res) => {
    db.any(userQueries.SELECT_ALL_USERS)
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log('ERROR:', error)
        })
}

const createUser = async (req, res) => {
    db.none(userQueries.INSERT_USER,[req.body.name, req.body.email, req.body.phone])
        .then(() => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log('ERROR:', error)
        })
}

module.exports = {
    getAllUsers,
    createUser,
}