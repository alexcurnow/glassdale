const eventHub = document.querySelector('.container')

export const dispatchStateChangeEvent = () => {
  const noteStateChangeEvent = new CustomEvent('noteStateChanged')
  eventHub.dispatchEvent(noteStateChangeEvent)
}

let notes = []

export const getNotes = () => {
  return fetch('http://localhost:8088/notes')
    .then(res => res.json())
    .then(parsedNotes => {
      notes = parsedNotes.slice()
    })
}

export const saveNote = newNoteObject => {
  return fetch('http://localhost:8088/notes', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newNoteObject)
  })
    .then(getNotes)
    .then(dispatchStateChangeEvent)
}

export const deleteNote = noteIdNumber => {
  return fetch(`http://localhost:8088/notes/${noteIdNumber}`, {
    method: "DELETE"
  })
  .then(getNotes)
  .then(dispatchStateChangeEvent)
}

export const useNotes = () => notes