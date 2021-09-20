require('dotenv').config();
const massive = require('massive');
const express = require('express');
const session = require('express-session');
const ctrl = require('./Controller')

const app = express();

const {SERVER_PORT, SESSION_SECRET, CONNECTION_STRING} = process.env;

//this was a line I needed for hosting in another project
const path = require('path')

app.use(express.json());

// app.use(function(req, res, next) {
//   res.setHeader({"Content-Type" : "application/json"})
//   res.writeHead({"Content-Type":"application/json"});
//   next();
// });

app.use(session ({
  resave: true,
  saveUninitialized: false,
  secret: SESSION_SECRET,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7
  }
})
);
//-----PUT ENDPOINTS HERE -----//
app.get('/api/resources', ctrl.getAll)

//hosting thing - used from another project, idk if it's exactly what i need but it's here.
app.use(express.static(`${__dirname}/../build`))

//hosting thing ^^
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'))
  })

  //connect to my DB
massive ({
    connectionString : CONNECTION_STRING,
    ssl : {
        rejectUnauthorized: false,
    }
})
.then(db => {
    app.set("db", db);
    app.listen(SERVER_PORT, () => console.log(`Db Up And Server Running On ${SERVER_PORT}`));
})
.catch(err => console.log(err));

