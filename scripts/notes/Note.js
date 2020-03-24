export const Note = (noteObject, criminalObject) => {
  return `
  <section class="note" id="note--${noteObject.id}">
    <p class="suspect">Suspect: ${criminalObject.name}</p>
    <p class="text">Notes: ${noteObject.text}</p>
    <button id="deleteBtn--${noteObject.id}">Delete Note</button>
  </section>
  `
}