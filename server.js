var express = require('express');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
// var db = require('./models');
var app = express();

var PORT = process.env.PORT || 2018;

var controller = require('./controller/mainController.js');
var api = require('./controller/apiController.js');


app.use(express.static(__dirname));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(controller);
app.use(api);

// db.sequelize.sync().then(function(){
    app.listen(PORT, function() {
        console.log('PORT is listening at https://localhost:' + PORT);
    });
// })