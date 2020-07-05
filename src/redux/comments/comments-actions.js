import CommentsActionTypes from "./comments-types";
import axios from "../../helperFunction/baseURL";

export const fetchCommentsStart = () => ({
    type: CommentsActionTypes.FETCH_COMMENTS_START
})
export const fetchParentCommentsSuccess = (comments) => ({
    type: CommentsActionTypes.FETCH_PARENT_COMMENTS_SUCCESS,
    payload: comments
})
export const fetchCommetnsChildSuccess = (comments) => ({
    type: CommentsActionTypes
})

export const fetchParentComments = (object) => {
    return dispatch => {
        dispatch(fetchCommentsStart())
        const promiseArray = object.kids.map(id => axios.get(`item/${id}.json?print=pretty`))

        Promise.all(promiseArray)
            .then(responses => dispatch(fetchParentCommentsSuccess(responses.map(reponse => reponse.data))))
    }
}
export const fetchChildComments = (comment) => {
    return dispatch => {
        dispatch(fetchCommentsStart())

        const promiseArray = comment.kids.map(id => axios.get(`item/${id}.json?print=pretty`))

        Promise.all(promiseArray)
            .then(responses => dispatch(fetchCommetnsChildSuccess(responses.map(reponse => reponse.data))))
    }
}