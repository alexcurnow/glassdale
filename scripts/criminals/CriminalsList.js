import { useCriminals } from './criminalsDataProvider.js'
import { Criminal } from './Criminal.js'

const contentElement = document.querySelector('.criminalsContainer')
const eventHub = document.querySelector('.container')


eventHub.addEventListener('officerSelected', event => {
  contentElement.classList.remove('invisible')
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
  contentElement.classList.remove('invisible')

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

contentElement.addEventListener('click', event => {
  if (event.target.id.startsWith('showAssociates--')) {
    
    const [prefix, criminalId] = event.target.id.split("--")
  
    const showAssociateDialog = new CustomEvent('showAssociatesClicked', {
      detail: {
        selectedCriminal: criminalId
      }
    })
    
    eventHub.dispatchEvent(showAssociateDialog)

  }
})

let witnessVisiblility = false

eventHub.addEventListener('showWitnessStatementsWasClicked', () => {
  witnessVisiblility = !witnessVisiblility  
  witnessVisiblility ? contentElement.classList.add('invisible') : contentElement.classList.remove('invisible')
})
