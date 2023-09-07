// Express paketini import ediyoruz
let express = require('express');
// Import Body parser
let bodyParser = require('body-parser');
// Import Mongoose
let mongoose = require('mongoose');
// Initialize the app
let app = express();
// 
const cors=require("cors");

    

// Import routes
let apiRoutes = require("./api_routes");
// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


app.use(cors()) // 



var db = mongoose.connection;

// Added check for DB connection
db = mongoose.connect('mongodb://localhost/eksimun', { useNewUrlParser: true, useUnifiedTopology: true });


if(!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")

// Setup server port
var port = process.env.PORT || 5050;

// Send message for default URL
app.get('/', (req, res) => res.send('Hello World with Express'));

// Use Api routes in the App
app.use('/api', apiRoutes);
// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Running RestHub on port " + port);
});