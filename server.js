const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient

var db

// const url = 'mongodb+srv://henrylee:truthandlight@portfoliocluster.gxhhgea.mongodb.net/?retryWrites=true&w=majority'
// const dbName = 'portfolioWebsite'


app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static('public'))

app.listen(process.env.PORT || 4444) 

// {
//     MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, 
//         (error, client) => {
//         if(error) {
//             throw error;
//         }
//         db = client.db(dbName);
//         console.log("Connected to `" + dbName + "`, Port: 4444");
//     });
// }); 

app.get('/', function(req, res) {
    res.render('views/index.ejs');
});

// app.get('/', (req, res) => {
//     db.collection('emailForm').find().toArray((err, result) => {
//         if (err) return console.log(err)
//         console.log({words: result})
//         res.render('index.ejs', {words: result})
//       })   
// })

// app.post('/checkWord', (req, res) => {
//   console.log(req.body.word)
//   let word = `${req.body.word}`
//   let wordPal = word.toLowerCase().split('').reverse().join('')
          
//   if ( word.toLowerCase() === wordPal) {
//       conclusion = 'Yes! A palindrome'
//   } else {
//       conclusion = 'This is NOT what we want!'
//   }

//   db.collection('words').insertOne({word: req.body.word, outcome: conclusion})
//       .then(result => {
//         console.log('saved to database')
//         res.redirect('/')
//       })
//       .catch(error => console.error(error))
//   })

//   app.delete('/deleteWord', (req, res) => {
//     db.collection('words').findOneAndDelete({
//         word: req.body.word,
//     }, 
    
//     (err, result) => {
//       if (err) return res.send(500, err)
//       res.send('word deleted!')
//     })
//   })

//   app.put('/upDate', (req, res) => {
//     db.collection('words').findOneAndUpdate(
//       { word: req.body.word },
//       {
//         $set: {
//         //   word: req.body.word,
//           outcome: req.body.outcome
//         }
//       },
//       {
//         upsert: false
//       }
//     )
//       .then(result => res.json('Success'))
//       .catch(error => console.error(error))
//   })