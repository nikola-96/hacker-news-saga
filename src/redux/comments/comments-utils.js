
export const checkIsCommentDeleted = (comments) => {

    return comments.filter(comment => comment.deleted !== true)
    // .map(comment => comment)
}
export default checkIsCommentDeleted