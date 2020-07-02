import StoriesActionTypes from './stories-types'
import axios from './../../API/baseURL'
import storiesReducer from './stories-reducer'

export const fetchStoriesIds = (ids) => (
    {
        type: StoriesActionTypes.FETCH_COLLECTIONS_START_CALL,
        payload: ids
    }
)

export const settingStoriesIds = (ids) => ({
    type: StoriesActionTypes.SET_INITIAL_IDS,
    payload: ids

})
export const fetchStoriesSuccess = (stories) => ({
    type: StoriesActionTypes.FETCH_STORIES,
    payload: stories

})

export const fetchStoriesIdsAsync = () => {
    return async dispatch => {
        const response = await axios.get('topstories.json?print=pretty')
        await dispatch(fetchStoriesIds(response.data))
        await dispatch(settingStoriesIds(response.data))
    }
}
export const fetchStoriesAsync = (ids) => {
    return dispatch => {
        const stories = []
        ids.forEach(async id => {
            let response = await axios.get(`item/${id}.json?print=pretty`)
            stories.push(response.data)
        })
        dispatch(fetchStoriesSuccess(stories))
    }
}
