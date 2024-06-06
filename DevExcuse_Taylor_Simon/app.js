const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');
const fileUpload = require('express-fileupload');


const app = express();



require('dotenv').config();


app.use(express.urlencoded( { extended: true } ));
app.use(express.static('public'));
app.use(expressLayouts);

app.use(cookieParser('LocationSecure'));
app.use(session({
  secret: 'DevExcuseSecretSession',
  saveUninitialized: true,
  resave: true
}));
app.use(flash());
app.use(fileUpload());

app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

const routes = require('./server/routes/excuseRoutes.js')
app.use('/', routes);




const port = process.env.PORT || 3000;
app.listen(port,()=> console.log(`Listening to port ${port}`));

