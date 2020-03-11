import { useCriminals } from './criminalsDataProvider.js'
import { Criminal } from './Criminal.js'

const contentElement = document.querySelector('.criminalsContainer')
const eventHub = document.querySelector('.container')


eventHub.addEventListener('crimeSelected', event => {
  const criminalData = useCriminals()
  
  if (event.detail.crime) {
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