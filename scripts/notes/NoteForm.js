import { saveNote, getNotes } from './notesDataProvider.js'

const contentTarget = document.querySelector('.noteFormContainer')


const render = () => {
  contentTarget.innerHTML = `
    <form class="noteForm">
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
      timestamp: Date.now(),
      suspect: document.querySelector('#suspect-text').value,
      text: document.querySelector('#note-text').value
    }
    saveNote(newNote)
  }
})


export const NoteForm = () => {
  render()
}