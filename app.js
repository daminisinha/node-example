console.log('starting app js');
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const argv = yargs
.command('add','Adding the Note',{
    title:{
        describe:'Title of note',
        demand:true,
        alias:'t'
    },
    body:{
        describe:'Body of note',
        demand:true,
        alias:'b'
    }
})
.command('List','List all notes')
.command('read','Read a note ',{
    title:{
        describe:'Title of note',
        demand:true,
        alias:'t'
    },
})
.command('remove','Remove a note ',{
    title:{
        describe:'Title of note',
        demand:true,
        alias:'t'
    },
})
.help()            
.argv;

var command = argv._[0];
if(command === 'add'){
    var note = notes.addNote(argv.title,argv.body);
}
else if (command === 'list'){
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`)
    allNotes.forEach((note) => {
        console.log(`Note :${note.title}`);
        console.log(`Body :${note.body}`);
    });
}
else if (command === 'read'){
    var readFoundNote = notes.readNote(argv.title);
    var message = readFoundNote ? 'Found note' : 'Note not found';
    console.log(message);
}
else if (command === 'remove'){
    var noteRemoved =notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note was removed' : 'Note not found'
    console.log(message);
}
else{
    console.log('Command not recognized')
}