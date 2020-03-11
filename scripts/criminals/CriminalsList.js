import { useCriminals } from './criminalsDataProvider.js'
import { Criminal } from './Criminal.js'

const contentElement = document.querySelector('.criminalsContainer')
const eventHub = document.querySelector('.container')


eventHub.addEventListener('officerSelected', event => {
  const criminalData = useCriminals()

  if (event.detail.officer === 'allOfficers') {
    contentElement.innerHTML = ""
    render(criminalData)
  } else {


    const matchingCriminals = criminalData.filter(
      criminal => criminal.arrestingOfficer === event.detail.officer
    )
    contentElement.innerHTML = ''
    render(matchingCriminals)
  }

})


eventHub.addEventListener('crimeSelected', event => {
  const criminalData = useCriminals()

  if (event.detail.crime === 'allCrimes') {
    contentElement.innerHTML = ''
    render(criminalData)
  } else {
      const matchingCriminals = criminalData.filter(
        criminal => criminal.conviction === event.detail.crime
      )
      contentElement.innerHTML = ''
      render(matchingCriminals)
    }
  }
)


export const RenderCriminalsList = () => {
  const criminalData = useCriminals()
  render(criminalData)
}

const render = criminalCollection => {
  criminalCollection.forEach(
    criminal => (contentElement.innerHTML += Criminal(criminal))
  )
}
