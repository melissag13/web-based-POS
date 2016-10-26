// Here is where you set up your server file.

// Dependencies
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var session = require('express-session');
var cookieParser = require('cookie-parser'); // for working with cookies

var models = require('./models');

models.sequelize.sync();

// Model controllers
var applicationController = require('./controllers/application_controller');

var posController = require('./controllers/pos_controller');

var loginController = require('./controllers/login_controller');

/* ****************	*/
/* Express settings	*/
/* ****************	*/
var app = express();
// override POST to have DELETE and PUT (update)
app.use(methodOverride('_method'));

// view engine setup
//app.set('views', path.join(__dirname, 'views'));

// Borrowed from sequelize-cats class activity
app.use(session({secret: 'app', cookie: {maxAge: 60000}, resave: true, saveUninitialized: true}));


// Handlebars
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');


app.use(bodyParser.urlencoded({
    extended: false
}));
// Set /public as static so we can reference image and css files in that folder
app.use(express.static(process.cwd() + '/public'));


// app.use('/', posController);

app.use('/', applicationController);
app.use('/pos', posController);
app.use('/login', loginController);

// Make sure to use the || so it works both locally and once
// you have deployed to heroku
var port = process.env.PORT || 3000;
app.listen(port);

console.log(module.exports);

//module.exports = app;