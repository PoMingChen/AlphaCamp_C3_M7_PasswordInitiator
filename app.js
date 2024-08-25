const express = require('express');
const {engine} = require('express-handlebars');
//import generatePassword function from generate_password.js
const { generatePassword } = require('./generate_password'); 
const path = require('path');
const app = express();
const port = 3000;

app.engine('.hbs', engine({extname: '.hbs'}))
app.set('view engine', '.hbs')
 //This specifies the directory where Express will look for view templates.
app.set('views', './views')

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.redirect('/PasswordInitiator');
})

app.get('/PasswordInitiator', (req, res) => {

  const queryContent = req.query;
  const password = generatePassword(queryContent);
  res.render('index', {password, 
                       queryContent
                      });
});

//starts the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
}) 