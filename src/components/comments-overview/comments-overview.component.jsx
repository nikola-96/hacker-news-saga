import React, { useEffect, useState } from 'react'
import axios from '../../API/baseURL';
import SubComments from '../sub-comments-overview/sub-comments.overview.component';

const CommentComponent = ({ comment }) => {
    const [comments, setComments] = useState([]);
    const [showRelay, setReplay] = useState(false)
    const ac = new AbortController();


    useEffect(() => {
        if (comment.hasOwnProperty('kids')) {
            const promiseArray = comment.kids.map(id => axios.get(`item/${id}.json?print=pretty`))
            Promise.all(promiseArray).then(responses => setComments(responses.map(reponse => reponse.data)))
            return () => ac.abort()
        }

    }, [comment])
    const commentsList = () => comments.map(commentKid => <SubComments key={commentKid.id} commentKid={commentKid} />)
    return (
        <div>    <li key={comment.id}>
            <div dangerouslySetInnerHTML={{ __html: comment.text }} />
            <div className="item-info">
                <span className="author">by: {comment.by}</span>
                {showRelay ?
                    <span className="comment-time">{commentsList()}</span>
                    : null
                }

                <div className="sub-comments">
                    {
                        comment.kids ?
                            <div
                                className="show-more-btn"
                                onClick={() => setReplay(!showRelay)}
                            >
                                show replay
                            </div>
                            :
                            null
                    }
                    <ul className="subcomments-list">
                    </ul>
                </div>
            </div>
        </li>
        </div>
    )
}
export default CommentComponent