const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient

var db

const url = 'mongodb+srv://henrylee:truthandlight@portfoliocluster.gxhhgea.mongodb.net/?retryWrites=true&w=majority'
const dbName = 'portfolioWebsite'


app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static('public'))

// app.listen(process.env.PORT || 4444) 

// app.get('/', function(req, res) {
//     res.render('index.ejs');
// });

// app.get('/', (req, res) => {
//     db.collection('emailForm').find().toArray((err, result) => {
//         if (err) return console.log(err)
//         console.log({words: result})
//         res.render('index.ejs', {words: result})
//       })   
// })

app.listen(4444, function() {
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, 
        (error, client) => {
        if(error) {
            throw error;
        }
        db = client.db(dbName);
        console.log("Connected to `" + dbName + "`, Port: 4444");
    });
}); 

app.get('/', (req, res) => {
    db.collection('emailForm').find().toArray((err, result) => {
        if (err) return console.log(err)
        console.log({words: result})
        res.render('index.ejs', {words: result})
      })

})