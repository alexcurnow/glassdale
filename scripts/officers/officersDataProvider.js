let officers = []

export const getOfficers = () => {
  return fetch('https://criminals.glassdale.us/officers')
  .then(res => res.json())
  .then(parsedOfficers => {
    officers = parsedOfficers.slice()
  })
}

export const useOfficers = () => officers