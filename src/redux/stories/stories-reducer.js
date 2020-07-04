import StoriesActionTypes from './stories-types'
import { setIdsForStories } from './stories.utils'

const INITIAL_STATE = {
    storiesIds: [],
    loadingIds: [],
    stories: [],
    numbersOfStories: 0,
    storie: {},
    isFetched: false,
    errorMessage: undefined
}
const storiesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case StoriesActionTypes.FETCH_COLLECTIONS_START:
            return {
                ...state,
                isFetched: action.payload
            }
        case StoriesActionTypes.FETCH_COLLECTIONS_START_CALL:
            return {
                ...state,
                storiesIds: action.payload
            }
        case StoriesActionTypes.SET_INITIAL_IDS:
            return {
                ...state,
                loadingIds: setIdsForStories(action.payload),
                isFetched: false,
            }
        case StoriesActionTypes.FETCH_STORIES_SUCCESS:
            return {
                ...state,
                stories: action.payload,
                isFetched: true,
                numbersOfStories: state.numbersOfStories + state.loadingIds.length

            }
        case StoriesActionTypes.FETCH_SINGLE_STORIE:
            return {
                ...state,
                storie: action.payload
            }
        default: return state
    }
}
export default storiesReducer