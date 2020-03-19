import { useCriminals } from "./criminalsDataProvider.js"

const targetElement = document.querySelector('.associatesContainer')
const eventHub = document.querySelector('.container')

eventHub.addEventListener('showAssociatesClicked', event => {
  const criminalData = useCriminals()
  
  const foundYou = criminalData.find(criminal => {
    if (criminal.id === parseInt(event.detail.selectedCriminal)) {
      return true
    }
    return false
  }
  
  )

  AssociatesDialog(foundYou)
  const dialog = document.querySelector('#associatesDialog')
  dialog.showModal()
})

export const AssociatesDialog = criminalObject => {
  targetElement.innerHTML = `
    <dialog id="associatesDialog">
      <ul class="associatesList">
      ${
        criminalObject.known_associates.map(currentAssociate => {
          return `
          <li>Associate Name: ${currentAssociate.name}</li>
          <li>Alibi: ${currentAssociate.alibi}</li>
          `
        }).join("")
      }
      </ul>
    </dialog>
  `
}