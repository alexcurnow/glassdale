import { useConvictions } from './ConvictionDataProvider.js'

const eventHub = document.querySelector('.container')
const contentTarget = document.querySelector('.filters__crime')


export const ConvictionSelect = () => {
  const convictions = useConvictions()

  const render = convictionsCollection => {
    const option = convictionsCollection.map(crime => {
      return `
      <option class="crime" id="${crime.id}" value="${crime.name}">${crime.name}</option>
      `
    })

    contentTarget.innerHTML = `
    <h3>Filter by Crime: </h3>
      <select class="dropdown" id="crimeSelect">
      <option value="0">Please select a crime...</option>
      ${option}
      </select>
      `
  }
  render(convictions)
}


contentTarget.addEventListener('change', changeEvent => {
  if (changeEvent.target.classList.contains('dropdown')) {
    const selectedCrime = changeEvent.target.value
    const criminals = new CustomEvent('crimeSelected', {
      detail: {
        crime: selectedCrime
      }
    })
    

    eventHub.dispatchEvent(criminals)
  }
})
