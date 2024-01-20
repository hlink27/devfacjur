const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
/* const errorController = require('./controller/error') */
const sequelize = require('./util/database')
const app = express()


app.set('view engine', 'ejs')
app.set('views', 'views')

//Routes
const indexRoute = require('./routes/index')
const clientRoute = require('./routes/client')

//Models
const client = require('./models/client')

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')))

app.use(indexRoute)
app.use(clientRoute)

/* app.use(errorController.get404) */

sequelize
.sync({ /* force: true */ })
  .then(conta => {
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });