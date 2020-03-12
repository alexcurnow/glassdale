import { saveNote, getNotes } from './notesDataProvider.js'

const contentTarget = document.querySelector('.noteFormContainer')
// const eventHub = document.querySelector('.container')
// const saveNoteButton = document.querySelector('#save-note')

// eventHub.addEventListener('')

const render = () => {
  contentTarget.innerHTML = `
    <form class="noteForm">
      <label for="date">Date: </label>
        <input type="date" name="date" id="date-text">
      <label for="suspect">Suspect: </label>
        <input type="text" name="suspect" id="suspect-text">
      <label for="entry">Note: </label>
        <input type="text" name="note" id="note-text"> 
        <button id="save-note" value="Save Note">Save Note</button>
    </form>
  `
}


contentTarget.addEventListener('click', event => {
  if (event.target.id === 'save-note') {
    event.preventDefault()
    const newNote = {
      date: document.querySelector('#date-text').value,
      suspect: document.querySelector('#suspect-text').value,
      text: document.querySelector('#note-text').value
    }
    saveNote(newNote)
  }
})


export const NoteForm = () => {
  render()
}