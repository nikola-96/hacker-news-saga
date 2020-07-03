import React, { useEffect, useState } from 'react'
import CommentComponent from '../comments-overview/comments-overview.component'
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
        <div>
            {
                comments.map(comment => <CommentComponent key={comment.id} />)

            }
        </div>
    )
}
export default Comments