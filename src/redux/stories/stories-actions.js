import StoriesActionTypes from './stories-types'
import axios from './../../API/baseURL'

export const fetchStoriesStart = (ids) => (
    {
        type: StoriesActionTypes.FETCH_COLLECTIONS_START_CALL,
        payload: ids
    }
)
export const fetchStoriesStartAsync = () => {
    return dispatch => {
        axios.get('topstories.json?print=pretty')
            .then(response => dispatch(fetchStoriesStart(response.data)))
    }
}
