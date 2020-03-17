import { Note } from "./Note.js";
import { useNotes, deleteNote } from "./notesDataProvider.js";

const targetElement = document.querySelector('.noteListContainer')
const eventHub = document.querySelector('#container')

eventHub.addEventListener('noteStateChanged', event => {
  render()
})

export const NotesList = () => {
  const notes = useNotes()
  render(notes)
  
}

const render = notesCollection => {
  notesCollection.forEach(note => targetElement.innerHTML += Note(note));
}


targetElement.addEventListener('click', event => {
  if (event.target.id.startsWith('deleteBtn--')) {
    const [prefix, buttonIdNumber] = event.target.id.split('--') 
      console.log(buttonIdNumber)
      deleteNote(buttonIdNumber)

  }  
  })
