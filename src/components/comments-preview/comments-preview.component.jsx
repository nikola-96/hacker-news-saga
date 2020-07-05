import React, { useEffect, useState } from 'react'
import axios from '../../helperFunction/baseURL';
import moment from 'moment'

import './comments-preview.style.css'
import { getDescendants } from '../../helperFunction/commentsUtility';

const CommentComponent = ({ comment }) => {
    const [comments, setComments] = useState([]);
    const [hidden, setHidden] = useState(false)
    const [numComments, setNumComments] = useState(0)
    let mounted = true;

    useEffect(() => {
        if (comment.hasOwnProperty('kids')) {
            const promiseArray = comment.kids.map(id => axios.get(`item/${id}.json?print=pretty`))
            Promise.all(promiseArray).then(responses => {
                if (mounted) {
                    setComments(responses
                        .filter(response => response.data.deleted !== true) //return comment if is not deleted
                        .map(reponse => reponse.data))
                }
            })
        }
        return () => mounted = false;

    }, [comment])


    const commentsList = () => comments.map(commentKid => <CommentComponent key={commentKid.id} comment={commentKid} />)
    return (
        <div className="bg-light pt-3 comment">
            <div className="d-flex flex-wrap">
                <div className="mx-1 w-100">
                    <div>
                        <span>▲</span>

                        |<a href="/#" className="mx-1">{comment.by}</a>|
                        <span className="mx-1">{moment.unix(comment.time).startOf('minutes').fromNow()}</span>|
                        <span className="mx-1 show-more-btn"
                            onClick={() => setHidden(!hidden)}>
                            {hidden ? `show replays` : `hide replays`}
                        </span>
                    </div>
                    <div className={`pl-4 ${hidden ? 'd-none' : 'd-block'}`}>
                        <div dangerouslySetInnerHTML={{ __html: comment.text }} />
                    </div>
                </div>
            </div>
            {
                hidden ?
                    null
                    :
                    <div className={`bg-secondary ml-4  d-block`}>
                        {commentsList()}
                    </div>
            }
        </div >
    )
}
export default CommentComponent