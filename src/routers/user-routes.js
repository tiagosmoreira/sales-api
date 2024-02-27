const express = require("express");
const userControllers = require("../controllers/user-controllers");

const usersRouter = express.Router()

usersRouter.get('/', userControllers.getAllUsers)

usersRouter.post('/', userControllers.createUser)

module.exports = usersRouter