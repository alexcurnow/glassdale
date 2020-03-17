const targetElement = document.querySelector('.showNoteListContainer')
const eventHub = document.querySelector('.container')

export const ToggleNotesListButton = () => targetElement.innerHTML = '<button class="toggleNotesListButton">Toggle Notes</button>'

targetElement.addEventListener('click', event => {
  if (event.target.classList.contains('toggleNotesListButton')) {
    const toggleNotesListClicked = new CustomEvent("toggleNotesListButtonWasClicked")
    eventHub.dispatchEvent(toggleNotesListClicked)
  }
})