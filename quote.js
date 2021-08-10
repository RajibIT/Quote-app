const express = require('express')
var app = express();

app.get('/',(req, res)=>{
    res.sendFile(__dirname +"/quote.html");
})
app.post('https://qoute-app.herokuapp.com/quote', (req, res)=>{
    var axios = require('axios');
    var data;
    
    axios.get('https://quotes.rest/qod').then((response)=>{
        console.log('here');
        data = response.data.contents.quotes[0].quote;
        res.end(`<h1> ${data} </h1>`);
    }).then((err)=>{
        res.end(err);
    })
    
} )


app.listen(4000,()=>{
    console.log('server is running...')
})
