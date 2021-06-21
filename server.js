require('./models/db');

const express = require('express');
const path = require('path');
const exphbs =require('express-handlebars');
const studentController = require('./controllers/studentController');
const bodyParser = require('body-parser');
const PORT = process.env.PORT||8000;
 
var app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());
app.set('views', path.join(__dirname,'/views/'));
app.engine('hbs',exphbs({ extname: 'hbs',defaultLayout: 'mainLayout', layoutsDir: __dirname +'/views/layouts/' }));
app.set('view engine','hbs');

app.get('/',(req, res) => res.redirect('student'));
app.use('/student',studentController);
app.get("/",(req,res) => { res.json("working")});
app.listen(PORT,() => {
    console.log('Express server started at port : 8000');

});
 