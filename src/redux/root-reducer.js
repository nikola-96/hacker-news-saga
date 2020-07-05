import { combineReducers } from 'redux'
import storiesReducer from './stories/stories-reducer'
import commentsReducer from './comments/comments-reducers'



const rootReducer = combineReducers({
    stories: storiesReducer,
    comments: commentsReducer
})
export default rootReducer

