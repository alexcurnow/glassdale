import { RenderCriminalsList } from './criminals/CriminalsList.js'
import { getCriminals } from './criminals/criminalsDataProvider.js'
import { getConvictions } from './convictions/ConvictionDataProvider.js'
import { ConvictionSelect } from './convictions/ConvictionSelect.js'
import { getOfficers } from './officers/officersDataProvider.js'
import { OfficerSelect } from './officers/OfficerSelect.js'
import { NoteForm } from './notes/NoteForm.js'
import { NotesList } from './notes/NotesList.js'
import { getNotes } from './notes/notesDataProvider.js'

console.log('Welcome to the main module')

NoteForm()
getNotes().then(NotesList)
getCriminals().then(RenderCriminalsList)
getConvictions().then(ConvictionSelect)
getOfficers().then(OfficerSelect)
