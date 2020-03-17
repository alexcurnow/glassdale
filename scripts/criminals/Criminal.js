export const Criminal = criminalObject => {
  return `
  <section class="criminalCard">
  <h4 class="criminalName">${criminalObject.name}</h4>
  <ul class="listStyling">
  <li>Age: ${criminalObject.age}</li>
  <li>Crime: ${criminalObject.conviction}</li>
  <li>Arresting Officer: ${criminalObject.arrestingOfficer}</li>
  <li>Term Start: ${new Date (criminalObject.incarceration.start).toLocaleDateString('en-US')}</li>
  <li>Term End: ${new Date(criminalObject.incarceration.end).toLocaleDateString('en-US')}</li>
  </ul>
  </section>
  `
}