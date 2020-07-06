
export const checkIsCommentDeleted = async (comments) => {

    return await comments.filter(response => response.data.deleted !== true)
        .map(reponse => reponse.data)
}