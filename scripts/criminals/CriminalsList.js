import { useCriminals } from './criminalsDataProvider.js'
import { Criminal } from './Criminal.js'

const contentElement = document.querySelector('.criminalsContainer')
const eventHub = document.querySelector('.container')


eventHub.addEventListener('officerSelected', event => {
  const criminalData = useCriminals()

  if ("officer" in event.detail) {
    const matchingCriminals = criminalData.filter(criminal => criminal.arrestingOfficer === event.detail.officer)
    contentElement.innerHTML = ""
    render(matchingCriminals)
  }
})


eventHub.addEventListener('crimeSelected', event => {
  const criminalData = useCriminals()
  
  if ("crime" in event.detail) {
    const matchingCriminals = criminalData.filter(
      criminal => criminal.conviction === event.detail.crime
    )
    contentElement.innerHTML = ""
    render(matchingCriminals)
  }
})


export const RenderCriminalsList = () => {
  const criminalData = useCriminals()
  render(criminalData)

}


const render = criminalCollection => {
  criminalCollection.forEach(
    criminal => (contentElement.innerHTML += Criminal(criminal))
  )
}