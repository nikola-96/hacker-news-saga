import axios from 'axios'

export const fetchComm = async (comment) => {
    let comments = []
    if (comment) {
        const promiseArray = comment.kids.map(id => axios.get(`item/${id}.json?print=pretty`))

        const responses = await Promise.all(promiseArray);

        comments = responses
            // .filter(response => response.data.deleted !== true) //return comment if is not deleted
            .map(reponse => reponse.data)

    }
    return comments
}

export const checkIsCommentDeleted = async (comments) => {

    return await comments.filter(response => response.data.deleted !== true)
        .map(reponse => reponse.data)
}