//const validator = require('validator');
const yargs = require('yargs');
//const chalk = require('chalk');
const notes = require('./notes');

//Customize yarv 
yargs.version('1.1.0');


//Add
yargs.command({
    command:'add', 
    describe:"Add a new note",
    builder:{
        title:{
            describe: 'Note title',
            demandOption: true,
            type:'string'
        },
        body:{
            describe: 'Body',
            demandOption:true,
            type: 'string'
        }
    },
    handler:function(argv){
        notes.addNotes(argv.title, argv.body);
    }
});

//Remove
yargs.command({
    command:'remove', 
    describe:"Add a new note",
    builder:{
        title:{
            describe:"Title to Remove",
            demandOption :true,
            type : 'string'

        }
    },
    handler(argv){
        notes.removeNotes(argv.title)
    }
});

//List
yargs.command({
    command:'list', 
    describe:"Add a new note",
   
    handler(){
        notes.listNotes();
    }
});

//Read
yargs.command({
    command:'read', 
    describe:"Add a new note",
    builder:{
        title:{
            describe:"Title to Read",
            demandOption :true,
            type : 'string'

        }
    },
    handler(argv){
        notes.readNote(argv.title);
    }
})



yargs.parse()

