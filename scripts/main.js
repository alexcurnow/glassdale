import { RenderCriminalsList } from './criminals/CriminalsList.js'
import { getCriminals } from './criminals/criminalsDataProvider.js'
import { getConvictions } from './convictions/ConvictionDataProvider.js'
import { ConvictionSelect } from './convictions/ConvictionSelect.js'
import { getOfficers } from './officers/officersDataProvider.js'
import { OfficerSelect } from './officers/OfficerSelect.js'

console.log('Welcome to the main module')

getCriminals().then(RenderCriminalsList)
getConvictions().then(ConvictionSelect)
getOfficers().then(OfficerSelect)
