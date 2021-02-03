// FileName: index.js

// Import cors
let cors = require('cors');
// Import express
let express = require('express')
// Initialize the app
let app = express();
// Setup server port
var port = process.env.PORT || 8080;
// Import routes
let apiRoutes = require("./api-routes/api-routes")
// Import Body parser
let bodyParser = require('body-parser');
// Import Mongoose
let mongoose = require('mongoose');

// Import express-fileupload
let fileUpload = require('express-fileupload');

// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
   extended: true
}));
app.use(bodyParser.json());

// enable files upload
app.use(fileUpload({
   createParentPath: true
}));

// enable cors headers
app.use(cors());


// Enable all origins
app.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
   if (req.method === 'OPTIONS') {
      res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
      return res.status(200).json({})
   }
   next();
 });
 





// Use Api routes in the App
app.use('/api', apiRoutes)






// Send message for default URL
app.get('/', (req, res) => res.send('Hello World with Express'));
// Launch app to listen to specified port
app.listen(port, function () {
   console.log("Running api-quasapp on port " + port);
});

// Connect to Mongoose and set connection variable
// Deprecated: mongoose.connect('mongodb://localhost/resthub');
const env = "prod"
if(env === "dev") {
   // Require config
   let config = require('./config')
   mongoose.connect(config.DEV_MONGODB_URI, { useNewUrlParser: true,
                                             useUnifiedTopology: true});
   };
if(env === "prod") {
   mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true,
                                             useUnifiedTopology: true});
   };
var db = mongoose.connection;