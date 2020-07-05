import axios from './baseURL';

export const getDescendants = (comment) => {
    if (comment.hasOwnProperty('kids')) {
        return comment.kids.length
    }
    return 1;
}

export const fetchComm = async (comment) => {
    let comm = []
    if (comment) {
        const promiseArray = comment.kids.map(id => axios.get(`item/${id}.json?print=pretty`))

        const responses = await Promise.all(promiseArray);

        comm = responses
            .filter(response => response.data.deleted !== true) //return comment if is not deleted
            .map(reponse => reponse.data)

    }
    console.log(comm);
    return comm
}

