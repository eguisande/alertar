const { response, request } = require('express')

const getUser = (req = request, res = response) => {
    const params = req.query
    res.json({
        success: true,
        message: "GET User - Controller",
        params
    })
}

const putUser = (req, res = response) => {
    const id = req.params.id
    res.json({
        success: true,
        message: 'PUT User - Controller',
        id
    })
}

const postUser = (req, res = response) => {
    const {nombre} = req.body;
    res.status(500).json({
        success: true,
        message: 'POST User - Controller',
        nombre
    })
}

const deleteUser = (req, res = response) => {
    res.json({
        success: true,
        message: 'DELETE User - Controller'
    })
}

const patchUser = (req, res = response) => {

    res.json({
        success: true,
        message: 'PATCH User - Controller'
    })
}


module.exports = {
    getUser,
    putUser,
    postUser,
    deleteUser,
    patchUser
}