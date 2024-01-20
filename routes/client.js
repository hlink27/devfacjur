const path = require('path')
const express = require('express')
const clientController = require('../controllers/client')
const router = express.Router()

router.get('/add-client', clientController.getAddClient)
router.post('/client/add-client', clientController.postAddClient)

router.get('/edit-client/:clientId', clientController.getEditClient)
router.post('/client/edit-client/', clientController.postEditClient)

router.post('/client/remove', clientController.postRemoveClient)

module.exports = router