import {combineReducers} from 'redux'
import _movieSlice from '../states/_movieSlice'

const rootReducer = combineReducers({
    movie:_movieSlice
})

export default rootReducer