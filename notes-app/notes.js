const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
    return "Your notes..."
};

const addNotes = function(title, body){
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title ===title);
    
    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        });
    
        saveNotes(notes);
        console.log('New Note added!');
    }else{
        console.log("Note title taken!");
    }
  
};

const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}
const loadNotes = function(){
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    }catch (e){
        return [];

    }

};

const listNotes = ()=>{
    const notes = loadNotes()
    
    console.log( chalk.inverse("Your notes"));

    notes.forEach(e => {
       console.log( e.title);
        
    });
}

const removeNotes = function(title){
    const notes = loadNotes();
    //console.log(notes);
    const exist = notes.filter((notes) =>
         title !== notes.title
    );
    
    if(exist.length > notes.length){
        console.log(chalk.green.inverse( "Note removed!"));
        saveNotes(exist);

        
    }else{
        console.log(chalk.red.inverse("Note doesn't exist!"));
    }
    
   
}

const readNote =(title)=>{
    const notes = loadNotes();
    const find = notes.find((note) => note.title ===title);



    if(find) {
        console.log(chalk.inverse(title));
        console.log(find.body);
    }else{
        console.log(chalk.red.inverse("Title not found"));
    }

}
module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNote:readNote

};
