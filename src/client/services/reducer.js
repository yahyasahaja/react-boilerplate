//MODULES
import { combineReducers } from 'redux'

//ACTIONS
import { 
    UPDATE_SELECTED,
} from './actions'

//REDUCER
const selectedReducer = (state = {}, action) => {
    if (action.type == UPDATE_SELECTED) {
        return { ...state, [action.id]: action.selected }
    } else {
        return state
    }
}

//COMBINED
export default combineReducers({
    selected: selectedReducer
})

//INI ADALAH STATE