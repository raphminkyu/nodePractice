const request = require('request');

const forecast = (x, y, callback) => {
    const url = 'https://api.darksky.net/forecast/5a5b3aa97a3ab968a775842dc298d32c/' + x + ',' + y + '?units=si';
    request({url, json:true}, (error, { body })=>{
        if(error){
            callback("not working message 1");
        }else if(body.error){
            callback("not working error 2");
        }else{
            callback(undefined, { summary:body.daily.data[0].summary,temperature:body.currently.temperature })
        }

    });
};

module.exports = forecast;


