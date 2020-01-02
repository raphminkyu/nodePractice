const express = require('express');
const app = express();

console.log(__dirname);
console.log(__filename);

app.get('', (req, res)=>{
    res.send('<h1>Weather</h1>');

});

app.get('/weather', (req, res)=>{
    res.send({
        forecast: '',
        location:''
    });
});
//app.com

app.listen(3000, () =>{
    console.log('Server is Running!');
});

