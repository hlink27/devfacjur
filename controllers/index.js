const Client = require("../models/client")

exports.getIndex = (req, res, next) => {
    Client.findAll()
    .then(clients => {
        res.render('index', {
            pageTitle: 'Start',
            path: '/',
            clients: clients
        })
    })
}