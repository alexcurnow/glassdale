let criminals = []

export const getCriminals = () => {
  return fetch('https://criminals.glassdale.us/criminals')
    .then(response => response.json())
    .then(parsedCriminals => {
      criminals = parsedCriminals
    })
    
}

export const useCriminals = () => {

 criminals.sort((firstCriminal, nextCriminal) => {
    const [firstCriminalFirstName, firstCriminalLastName] = firstCriminal.name.split(" ")
    const [nextCriminalFirstNmae, nextCriminalLastName] = nextCriminal.name.split(" ")

    if (firstCriminalLastName < nextCriminalLastName) { return -1 }
    if (firstCriminalLastName > nextCriminalLastName) {return 1}
    return 0
  })

  return criminals.slice()
} 


