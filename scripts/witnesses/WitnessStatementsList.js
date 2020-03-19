import { useWitnesses } from "./witnessProvider.js"
import { WitnessStatement } from "./WitnessStatement.js"

const eventHub = document.querySelector('.container')
const contentTarget = document.querySelector('.witnessStatementsContainer')

export const WitnessStatementsList = () => {
  const witnesses = useWitnesses()
  render(witnesses)
  contentTarget.classList.add('invisible')
}

const render = witnessesData => {
  witnessesData.map(witnessObject => {
    contentTarget.innerHTML += WitnessStatement(witnessObject)
  })

}

let witnessVisibility = false

eventHub.addEventListener('showWitnessStatementsWasClicked', () => {
  witnessVisibility = !witnessVisibility
  witnessVisibility ? contentTarget.classList.remove('invisible') : contentTarget.classList.add('invisible')
  }  
)

eventHub.addEventListener('crimeSelected', () => contentTarget.classList.add('invisible'))
eventHub.addEventListener('officerSelected', () => contentTarget.classList.add('invisible'))