const Client = require("../models/client")

exports.getAddClient = (req, res, next) => {
    res.render('client/add-client', {
        pageTitle: 'Add Client',
        path: '/client/add-client',
        editMode: false
    })
}

exports.postAddClient = (req, res, next) => {
    const name = req.body.name
    const email = req.body.email
    const tel = req.body.tel
    const addressX = req.body.x
    const addressY = req.body.y
    Client.create({
        name: name,
        email: email,
        tel: tel,
        addressX: addressX,
        addressY: addressY
    })
    .then(result =>{
        res.redirect('/')
    })
    .catch(err => console.log(err))
}

exports.getEditClient = (req, res, next) => {
    const clientId = req.params.clientId
    Client.findByPk(clientId)
    .then(editClient => {
        res.render('client/add-client', {
            pageTitle: 'Edit Client',
            path: '/client/add-client',
            editMode: true,
            editClient: editClient
        })
    })
}

exports.postEditClient = (req, res, next) => {
    const name = req.body.name
    const email = req.body.email
    const tel = req.body.tel
    const addressX = req.body.x
    const addressY = req.body.y
    Client.findByPk(req.body.clientId)
    .then(client => {
        client.name = name
        client.email = email
        client.tel = tel
        client.addressX = addressX
        client.addressY = addressY
        return client.save()
    })
    .then(result => {
        res.redirect('/')
    })
    .catch(err => {console.log(err)})
}

exports.postRemoveClient = (req, res, next) => {
    const valueId = req.body.valueId
    Client.findByPk(valueId)
    .then(client => {
        return client.destroy()
    })
    .then(result => {
        res.redirect('/')
    })
    .catch(err => console.log(err))
}