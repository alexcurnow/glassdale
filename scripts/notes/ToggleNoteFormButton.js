const eventHub = document.querySelector('.container')
const targetElement = document.querySelector('.showNoteForm')
export const NoteFormToggleButton = () => targetElement.innerHTML = '<button class="noteFormToggleButton">Toggle Note Form</button>'

targetElement.addEventListener('click', event => {
  if (event.target.classList.contains('noteFormToggleButton')) {
    const toggleButtonClicked = new CustomEvent("toggleButtonWasClicked")
    eventHub.dispatchEvent(toggleButtonClicked)
  }
})