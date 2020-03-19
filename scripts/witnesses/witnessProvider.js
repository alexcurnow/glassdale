const eventHub = document.querySelector('.container')

let witnesses = []

export const dispatchWitnessStateChange = () => {
  const witnessStateChanged = new CustomEvent('witnessStateChanged')
  eventHub.dispatchEvent(witnessStateChanged)
}

export const getWitnesses = () => {
  return fetch('https://criminals.glassdale.us/witnesses')
  .then(res => res.json())
  .then(parsedWitnesses => witnesses = parsedWitnesses.slice())
}


export const useWitnesses = () => witnesses