// var express = require('express');
// var https = require('https');
// var bodyParser = require('body-parser');
// var logger = require('morgan');
// var cors = require('cors');
// var SuperLogin = require('superlogin');
 
// var app = express();

// app.get("/", function(req, res) {
//   res.send("Heroku Demo!");
//  });
 

// app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cors());
 
// var config = {
//   dbServer: {
//     protocol: 'https://',
//     host: 'ce4d2d12-3865-486c-86a1-3dd2692dba59-bluemix.cloudant.com',
//     user: 'ce4d2d12-3865-486c-86a1-3dd2692dba59-bluemix',
//     password: '85e0948009f9a637d5c235571fd9be2b032b4d9e23eda155b8110c0b7ea6d926',
//     cloudant: true,
//     userDB: 'hangz-users',
//     couchAuthDB: '_users'
//   },
//   security: {
//     maxFailedLogins: 5,
//     lockoutTime: 600,
//     tokenLife: 604800, // one week
//     loginOnRegistration: true
//   },
//   userDBs: {
//     defaultDBs: {
//       shared: ['hangz']
//     },
//     model: {
//       hangz: {
//         permissions: ['_reader', '_writer', '_replicator']
//       }
//     }
//   },
//   providers: { 
//     local: true
//   }
// };
 
// // Initialize SuperLogin 
// var superlogin = new SuperLogin(config);
 
// // Mount SuperLogin's routes to our app 
// app.use('/auth', superlogin.router);
 
// app.listen(process.env.PORT || 8080);


var express = require('express');
var https = require('https');
var bodyParser = require('body-parser');
var logger = require('morgan');
var cors = require('cors');
var SuperLogin = require('superlogin');

var app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

var config = {
  dbServer: {
    protocol: 'http://',
    host: '127.0.0.1:5984',
    //user: 'admin',
    //password: 'password',
    userDB: 'hangz-users',
    couchAuthDB: '_users'
  },
  security: {
    maxFailedLogins: 5,
    lockoutTime: 600,
    tokenLife: 604800, // one week
    loginOnRegistration: true
  },
  userDBs: {
    defaultDBs: {
      shared: ['hangz']
    }
  },
  providers: { 
    local: true
  }
};

// Initialize SuperLogin 
var superlogin = new SuperLogin(config);

// Mount SuperLogin's routes to our app 
app.use('/auth', superlogin.router);

app.listen(process.env.PORT || 8080);
