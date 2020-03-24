import { saveNote, getNotes } from './notesDataProvider.js'
import { useCriminals } from '../criminals/criminalsDataProvider.js'

const contentTarget = document.querySelector('.noteFormContainer')
const eventHub = document.querySelector('.container')

let invisibility = true
eventHub.addEventListener('toggleButtonWasClicked', event => {
  
  invisibility = !invisibility

  if (invisibility) {
    contentTarget.classList.add('invisible')
  } else {
    contentTarget.classList.remove('invisible')
  }
})

const render = () => {
  const criminals = useCriminals()

  contentTarget.classList.add('invisible')

  contentTarget.innerHTML = `
    <form class="noteForm">
      <select id="suspectDropdown">
        <option value="0">Select a criminal</option>
        ${criminals.map(criminal => `<option value="${criminal.id}">${criminal.name}</option>`)}
      </select>
      <label for="entry">Note: </label>
        <input type="text" name="note" id="note-text"> 
        <button id="save-note" value="Save Note">Save Note</button>
    </form>
  `
}

eventHub.addEventListener('change', event => {
  if (event.target.id === 'suspectDropdown') {
    const selectedSuspect = document.querySelector('#suspectDropdown').value
    const suspectSelectedChangeEvent = new CustomEvent('suspectSelected', {
      detail: {
        suspect: parseInt(selectedSuspect)
      }
    })
    eventHub.dispatchEvent(suspectSelectedChangeEvent)
  }
})


contentTarget.addEventListener('click', event => {
  if (event.target.id === 'save-note') {
    event.preventDefault()
  
    const newNote = {
      timestamp: Date.now(),
      suspect: parseInt(document.querySelector('#suspectDropdown').value),
      text: document.querySelector('#note-text').value
    }
    saveNote(newNote)
  }
})


export const NoteForm = () => {
  render()
}