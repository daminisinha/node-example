console.log('Starting notes.js');
const fs = require('fs');
var fetchNotes =() =>{
  try{
    var notesString =fs.readFileSync('notes-data.json')
    return notes =JSON.parse(notesString);
  }catch(e){
    return [];
  }
};
var saveNotes = (notes) =>{
  fs.writeFileSync('notes-data.json',JSON.stringify(notes));
};

var addNote =(title,body)=> {
    var notes = fetchNotes();
    var note = {
      title,
      body
    };
  var duplicateNotes = notes.filter((note) => note.title === title);
  if(duplicateNotes.length ===0){
    notes.push(note);
    saveNotes(notes);
    console.log("Note created with title as ",note.title);
    return note;
  }
  else{
    console.log("Already note exists title as ",note.title);
  }
};

var getAll =()=> {
  return fetchNotes();
}
var readNote =(title) => {
 var notes = fetchNotes();
 var foundNote = notes.filter((note) => note.title === title)
 return foundNote.length > 0;
}
var removeNote =(title) => {
  var notes = fetchNotes();
  var filteredNote = notes.filter((note) => note.title !=title)
    saveNotes(filteredNote);

    return notes.length!= filteredNote.length;
}
module.exports ={
  addNote,
  getAll,
  readNote,
  removeNote
};