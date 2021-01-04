// FileName: index.js



// Import express
let express = require('express')
// Initialize the app
let app = express();
// Setup server port
var port = process.env.PORT || 8080;
// Send message for default URL
app.get('/', (req, res) => res.send('Hello World with Express'));
// Launch app to listen to specified port
app.listen(port, function () {
     console.log("Running api-quasapp on port " + port);
});

// Import express-fileupload
let fileUpload = require('express-fileupload');

// enable files upload
app.use(fileUpload({
   createParentPath: true
}));

// Add the code below to index.js
// Import routes
let apiRoutes = require("./api-routes/api-routes")
// Use Api routes in the App
app.use('/api', apiRoutes)

// Make uploaded file public
app.use(express.static('uploads'));


// Import Body parser
let bodyParser = require('body-parser');
// Import Mongoose
let mongoose = require('mongoose');
// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
   extended: true
}));
app.use(bodyParser.json());
// Connect to Mongoose and set connection variable
// Deprecated: mongoose.connect('mongodb://localhost/resthub');
connectionstring = 'mongodb+srv://FurkanAndac:jwhbkvm9321@quasapp-cluster.rkff8.mongodb.net/quasappDB?retryWrites=true&w=majority'

mongoose.connect(connectionstring, { useNewUrlParser: true});
var db = mongoose.connection;