import StoriesActionTypes from './stories-types'
import { setIdsForStories } from './stories.utils'

const INITIAL_STATE = {
    storiesIds: [],
    loadingIds: [],
    stories: [],
    isFetching: false,
    errorMessage: undefined
}
const storiesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case StoriesActionTypes.FETCH_COLLECTIONS_START_CALL:
            return {
                ...state,
                storiesIds: action.payload
            }
        case StoriesActionTypes.SET_INITIAL_IDS:
            return {
                ...state,
                loadingIds: setIdsForStories(action.payload)
            }
        case StoriesActionTypes.FETCH_STORIES:
            return {
                ...state,
                stories: action.payload

            }

        default: return state
    }
}
export default storiesReducer