import CommentsActionTypes from "./comments-types";
import checkIsCommentDeleted from "./comments-utils";

const INITIAL_STATE = {
    comments: [],
    childComments: [],
    isFetched: true
}

const commentsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CommentsActionTypes.FETCH_COLLECTIONS_START:
            return {
                ...state,
                isFetched: false
            }
        case CommentsActionTypes.FETCH_PARENT_COMMENTS_SUCCESS:
            return {
                ...state,
                comments: checkIsCommentDeleted(action.payload),
                isFetched: true
            }
        case CommentsActionTypes.FETCH_CHILD_COMMENTS_SUCCESS:
            return {
                ...state,
                childComments: checkIsCommentDeleted(state.childComments.concat(action.payload))
            }
        case CommentsActionTypes.SET_COMMENTS_TO_INITIAL_STATE: {
            return {
                ...state,
                comments: action.payload
            }
        }
        default: return state
    }
}
export default commentsReducer