import { createSelector } from 'reselect'

export const commentSelector = state => state.comments;

export const slelectComments = createSelector(
    [commentSelector],
    comments => comments.comments
)
export const selectCommentsByParentId = parent => createSelector(
    [slelectComments],
    comments => comments.filter(comment => comment.parent === parent.id)
        .map(comment => comment)
)
