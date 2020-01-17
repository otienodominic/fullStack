const express = require('express');
const cowsay = require('cowsay');
const cors = require('cors');

// Create server
const app = express();

// server the api with
app.get('/api/cow/:say', cors(), async(req, res, next) => {
    try{
        const text = req.params.say
        const moo = cowsay.say({text})
        res.json({moo})
    }
    catch(err){
        next(err)
    }
})
// default route

app.get('/', cors(), async(req, res, next) => {
    try {
        res.send('Hello This is Dominic!!');
    }
    catch(err){
        next(err)
    }
})


// serve our api with a custom moo

app.get('/api/cow/', cors(), async(req, res, next) => {
    try {
        const moo = cowsay.say({text: 'Hello Dominic!'})
        res.json({moo})
    }
    catch(err){
        next(err)
    }
})

// Create the server and serve
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server up and running on Port ${PORT} This is just great!!`)
})