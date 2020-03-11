let convictions = []

export const getConvictions = () => {
  return fetch('https://criminals.glassdale.us/crimes')
  .then(res => res.json())
  .then(data => convictions = data.slice())
}

export const useConvictions = () => convictions

