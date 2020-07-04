import React, { useEffect, useState } from 'react'
import axios from '../../API/baseURL'

const SubComments = ({ commentKid }) => {
    const [comments, setComments] = useState([]);
    const [showReplay, setReplay] = useState(false)
    const ac = new AbortController();

    useEffect(() => {
        if (commentKid.hasOwnProperty('kids')) {
            const promiseArray = commentKid.kids.map(id => axios.get(`item/${id}.json?print=pretty`))
            Promise.all(promiseArray).then(responses => setComments(responses.map(reponse => reponse.data)))
        }
        return () => ac.abort()
    }, [commentKid])
    const commentsList = () => comments.map(commentKid1 => <SubComments key={commentKid1.id} commentKid={commentKid1} />)

    return (
        <div>
            <div className="item-info">
                <p>{commentKid.text}</p>
                <span className="author">by:{commentKid.by}</span>
                <span className="comment-time"></span>
                <div className="sub-comments">
                    {commentKid.kids ?
                        <div
                            className="show-more-btn"
                            onClick={() => setReplay(!showReplay)}
                        >
                            show replay
            </div> : null
                    }
                    <ul className="subcomments-list">
                    </ul>
                </div>
            </div>
            {showReplay ?
                commentsList()
                : null
            }
        </div>
    )
}
export default SubComments