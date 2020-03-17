import { RenderCriminalsList } from './criminals/CriminalsList.js'
import { getCriminals } from './criminals/criminalsDataProvider.js'
import { getConvictions } from './convictions/ConvictionDataProvider.js'
import { ConvictionSelect } from './convictions/ConvictionSelect.js'
import { getOfficers } from './officers/officersDataProvider.js'
import { OfficerSelect } from './officers/OfficerSelect.js'
import { NoteForm } from './notes/NoteForm.js'
import { getNotes } from './notes/notesDataProvider.js'
import { NoteFormToggleButton } from './notes/ToggleNoteFormButton.js'
import { ToggleNotesListButton } from './notes/ToggleNotesListButton.js'
import { NotesList } from './notes/NotesList.js'

console.log('Welcome to the main module')

NoteForm()
NoteFormToggleButton()
ToggleNotesListButton()
getNotes().then(NotesList)
getCriminals().then(RenderCriminalsList)
getConvictions().then(ConvictionSelect)
getOfficers().then(OfficerSelect)
