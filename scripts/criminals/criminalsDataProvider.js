let criminals = []

export const getCriminals = () => {
  return fetch('https://criminals.glassdale.us/criminals')
    .then(response => response.json())
    .then(parsedCriminals => {
      criminals = parsedCriminals.slice()
    })
    
}

export const useCriminals = () => criminals

// export const getCriminalsByConviction = conviction => {
//   const criminalArray = useCriminals()
//   const filteredCriminals = criminalArray.filter(criminal => criminal.conviction === conviction)
//   return filteredCriminals
// }


