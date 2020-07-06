import { createSelector } from 'reselect'

export const commentSelector = state => state.comments;

export const slelectComments = createSelector(
    [commentSelector],
    comments => comments.comments
)
export const selectChildComments = createSelector(
    [commentSelector],
    comments => comments.childComments

)
export const selectCommentsByParentId = parent => createSelector(
    [selectChildComments],
    comments => comments.filter(comment => comment.parent === parent.id)
)
