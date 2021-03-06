//CRUD operations

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const ObjectID = mongodb.ObjectID;

//const { MongoClient, ObjectID} = require('mongodb);

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';


MongoClient.connect(connectionURL, { useNewUrlParser: true}, (error, client)=>{
    if(error){
        return console.log("error");
    }
    const db = client.db(databaseName);

    db.collection('users').findOne({name:'Raph'},(error, user)=>{
        if(error){
            return console.log("error");
        }
        console.log(user);
    })
    db.collection('name').updateMany({
        //condition
        completed:false
    }, {
        $set:{
            completed:true
        }
    }).then((result)=>{

    }).catch((error)=>{
        
    });
});