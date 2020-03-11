import { useOfficers } from "./officersDataProvider.js"

const contentTarget = document.querySelector('.filters__officer')
const eventHub = document.querySelector('.container')

export const OfficerSelect = () => {
  const officers = useOfficers()
  
  const render = officersDataArray => {

    contentTarget.innerHTML = `
      <h3>Filter by Officer: </h3>
      <select class="dropdown" id="officerSelect">
      <option value="0">Please select an officer...</option>
      ${
        officersDataArray.map(officer => {
          return `
          <option id="${officer.id}" value="${officer.name}">${officer.name}</option>
          `
        })
      }
      </select>
    `
  }
  render(officers)
}


contentTarget.addEventListener('change', changeEvent => {
  if (changeEvent.target.classList.contains('dropdown')) {
    const selectedOfficer = changeEvent.target.value
    const criminalsFilterByOfficer = new CustomEvent('officerSelected', {
      detail: {
        officer: selectedOfficer
      }
    })
    eventHub.dispatchEvent(criminalsFilterByOfficer)
  }
})
