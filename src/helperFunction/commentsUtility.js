import axios from './baseURL';

export const getDescendants = (comment) => {
    if (comment.hasOwnProperty('kids')) {
        return comment.kids.length
    }
    return 1;
}

export const fetchComm = (comment) => {
    console.log(comment)
    const arr = []
    const promiseArray = comment.kids.map(id => axios.get(`item/${id}.json?print=pretty`))
    Promise.all(promiseArray).then(responses => {
        arr.push(responses
            .filter(response => response.data.deleted !== true) //return comment if is not deleted
            .map(reponse => reponse.data))
    })
    if (arr) {
        return arr
    }

}

