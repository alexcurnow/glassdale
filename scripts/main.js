import { RenderCriminalsList } from './criminals/CriminalsList.js'
import { getCriminals } from './criminals/criminalsDataProvider.js'
import { getConvictions } from './convictions/ConvictionDataProvider.js'
import { ConvictionSelect } from './convictions/ConvictionSelect.js'

console.log('Welcome to the main module')

getCriminals().then(RenderCriminalsList)
getConvictions().then(ConvictionSelect)


