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