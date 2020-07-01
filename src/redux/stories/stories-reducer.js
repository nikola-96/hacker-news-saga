import StoriesActionTypes from './stories-types'

const INITIAL_STATE = {
    storiesIds: [],
    stories: null,
    isFetching: false,
    errorMessage: undefined
}
const storiesReducer = (state = INITIAL_STATE, actions) => {
    switch (actions.type) {
        case StoriesActionTypes.FETCH_COLLECTIONS_START_CALL:
            return {
                ...state,
                storiesIds: actions.payload
            }
        default: return state
    }
}
export default storiesReducer