const request = require('request');

const url = 'https://api.darksky.net/forecast/5a5b3aa97a3ab968a775842dc298d32c/37.8267,-122.4233?units=si';

request({ url: url, json: true}, (error, response)=>{
    if(error){
        console.log('error');
    }else if(response.body.error){

        console.log('Unable to find locaiton');
    }
    else{

    
        console.log(response.body.daily.data[0].summary +
            ' It is currently ' +
            response.body.currently.temperature);
        
    }
 });

//geocoding

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicmFwaGFlbDA5MjUiLCJhIjoiY2s0czQ0NXp5M3F6bjNrcXhua2R4YXVjNSJ9.YFV9Um5vbtWREsZDfQW07A&limit=1';

request({ url:geocodeURL, json:true}, (error,response)=>{

    if(error){
        console.log("no internet");
    }else if(response.body.features.length ==0){
        console.log("Location not found");
    }else{

    
        const latitude= response.body.features[0].center[1];
        const longitude= response.body.features[0].center[0];
        console.log(latitude, longitude);
    }
})