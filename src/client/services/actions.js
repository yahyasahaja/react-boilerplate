//MODULES
import axios from 'axios'
//import { endpointURL } from 'config'

//TYPES
export const UPDATE_SELECTED = 'updateSelected'

//ACTIONS
export const updateSelected = (id, selected) => ({ type: UPDATE_SELECTED, id, selected })