import { Note } from "./Note.js";
import { useNotes, deleteNote } from "./notesDataProvider.js";

const targetElement = document.querySelector('.noteListContainer')
const eventHub = document.querySelector('.container')

eventHub.addEventListener('noteStateChanged', () => {
  const notes = useNotes()
  render(notes)
})

let invisibility = true

eventHub.addEventListener('toggleNotesListButtonWasClicked', () => {
  invisibility = !invisibility

  if (invisibility) {
    targetElement.classList.add('invisible')
  } else {
    targetElement.classList.remove('invisible')
  }
})

export const NotesList = () => {
  const notes = useNotes()
  render(notes)
  
}

const render = notesCollection => {
  targetElement.classList.add('invisible')
  notesCollection.forEach(note => targetElement.innerHTML += Note(note));
}


targetElement.addEventListener('click', event => {
  if (event.target.id.startsWith('deleteBtn--')) {
    const [prefix, buttonIdNumber] = event.target.id.split('--') 
      console.log(buttonIdNumber)
      deleteNote(buttonIdNumber)

  }  
  })
