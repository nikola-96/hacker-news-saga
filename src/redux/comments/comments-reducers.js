import CommentsActionTypes from "./comments-types";
import { checkIsCommentDeleted } from "./comments-utils";

const INITIAL_STATE = {
    comments: [],
    isFetched: false
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
                comments: action.payload
            }
        default: return state
    }
}
export default commentsReducer