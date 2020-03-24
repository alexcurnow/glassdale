import { Note } from './Note.js'
import { useNotes, deleteNote } from './notesDataProvider.js'
import { useCriminals } from '../criminals/criminalsDataProvider.js'

const targetElement = document.querySelector('.noteListContainer')
const eventHub = document.querySelector('.container')
targetElement.classList.add('invisible')
let invisibility = true

eventHub.addEventListener('noteStateChanged', () => {
  const notes = useNotes()
  targetElement.innerHTML = ''
  render(notes)
})

eventHub.addEventListener('toggleNotesListButtonWasClicked', () => {
  invisibility = !invisibility

  if (invisibility) {
    targetElement.classList.add('invisible')
  } else {
    targetElement.classList.remove('invisible')
  }
})

export const NotesList = () => {
  render()
}

const render = () => {
  const notes = useNotes()
  const criminals = useCriminals()

  notes.map(note => {
    const foundCriminal = criminals.find(
      criminal => criminal.id === note.suspect
    )
    targetElement.innerHTML += Note(note, foundCriminal)
  })
}

eventHub.addEventListener('suspectSelected', event => {
  if ('suspect' in event.detail) {
    let notes = useNotes()
    const criminals = useCriminals()

    const associatedNote = notes.find(
      note => note.suspect === event.detail.suspect
    )

    if (associatedNote) {

      notes.map(note => {
        const foundCriminal = criminals.find(
          criminal => criminal.id === event.detail.suspect
        )
  
        targetElement.innerHTML = Note(associatedNote, foundCriminal)
      })


    } else {
      alert('no available notes for this suspect')
    }
  }
})

targetElement.addEventListener('click', event => {
  if (event.target.id.startsWith('deleteBtn--')) {
    const [prefix, buttonIdNumber] = event.target.id.split('--')
    deleteNote(buttonIdNumber)
  }
})
