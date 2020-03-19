const eventHub = document.querySelector('.container')
const contentTarget = document.querySelector('.showWitnessStatementsButton')

export const WitnessStatementsButton = () => {

  contentTarget.innerHTML = `
    <button class="witnessStatementButton">Show Witness Statements</button>
  `

}

eventHub.addEventListener('click', event => {
  if (event.target.classList.contains('witnessStatementButton')) {
    const witnessStatementButtonEvent = new CustomEvent('showWitnessStatementsWasClicked')
    
    eventHub.dispatchEvent(witnessStatementButtonEvent)
  
  }
})