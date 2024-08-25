const express = require('express');
const {engine} = require('express-handlebars');
const { generatePassword } = require('./generate_password'); //import generatePassword function from generate_password.js
const path = require('path');
const app = express();
const port = 3000;

app.engine('.hbs', engine({extname: '.hbs'}))
app.set('view engine', '.hbs')
app.set('views', './views') //This specifies the directory where Express will look for view templates.

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.redirect('/PasswordInitiator');
})

app.get('/PasswordInitiator', (req, res) => {

  const queryContent = req.query;
  const [password, collectionInBehind] = generatePassword(queryContent);
  res.render('index', {password, 
                       collectionInBehind,
                       queryContent
                      });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
}) //starts the server