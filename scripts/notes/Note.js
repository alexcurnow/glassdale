export const Note = noteObject => {
  return `
  <section class="note" id="note--${noteObject.id}">
    <p class="suspect">Suspect: ${noteObject.suspect}</p>
    <p class="text">Notes: ${noteObject.text}</p>
    <button id="deleteBtn--${noteObject.id}">Delete Note</button>
  </section>
  `
}