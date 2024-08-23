const express = require('express');
const {engine} = require('express-handlebars');
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
  const passwordLength = req.query.passwordLength;
  const excludeCharacters = req.query.excludeCharacters;
  res.render('index', { passwordLength, excludeCharacters });
  
  //index should be a string referring to the Handlebars template file name, aka index.hbs

});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
}) //starts the server