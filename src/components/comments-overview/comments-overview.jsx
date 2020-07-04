import React, { useEffect, useState } from 'react'
import CommentComponent from '../comments-preview/comments-preview.component'
import axios from '../../API/baseURL'

const Comments = ({ storie }) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        if (storie.kids) {
            const promiseArray = storie.kids.map(id => axios.get(`item/${id}.json?print=pretty`))
            Promise.all(promiseArray).then(responses => setComments(responses.map(reponse => reponse.data)))
        }
    }, [storie])
    return (
        <React.Fragment >
            {
                comments.map(comment => <CommentComponent key={comment.id} comment={comment} />)
            }
        </React.Fragment>

    )
}
export default Comments