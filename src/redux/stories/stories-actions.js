import StoriesActionTypes from './stories-types'
import axios from './../../API/baseURL'

export const fetchStoriesStart = () => ({
    type: StoriesActionTypes.FETCH_COLLECTIONS_START,
    payload: false
})

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
export const fetchStoriesSuccess = (stories) => {
    return {
        type: StoriesActionTypes.FETCH_STORIES_SUCCESS,
        payload: stories,
    }
}
export const fetchSingleStorie = (storie) => ({
    type: StoriesActionTypes.FETCH_SINGLE_STORIE,
    payload: storie
})
export const changeSpinerStatus = () => ({
    type: StoriesActionTypes.CHANGE_SPINNER_STATUS
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
        const promiseArray = ids.map(id => axios.get(`item/${id}.json?print=pretty`)) //getting 30 storie promises
        Promise.all(promiseArray)
            .then(responses => dispatch(fetchStoriesSuccess(responses.map(reponse => reponse.data))))
            .catch((erorr) => console.error(erorr))
        //resolving promise, and storing stories in Redux store with fetchStoriesSucces
    }
}

export const fetchSignelStorieAsync = id => {
    return dispatch => {
        axios.get(`item/${id}.json?print=pretty`)
            .then(response => dispatch(fetchSingleStorie(response.data)))
            .catch(error => console.error(error)) /*
            we must fetch againg single post, becouse if user refresh page, store will be empty, and we cat see
            comments no more */
    }
}