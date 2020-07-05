import React, { useEffect, useState } from 'react'
import CommentComponent from '../comments-preview/comments-preview.component'
import Spinner from '../spinner/spinner.component';
import { fetchComm } from '../../helperFunction/commentsUtility';

const Comments = ({ storie }) => {
    const [comments, setComments] = useState([]);
    let mounted = true;
    useEffect(() => {
        if (storie.kids) {
            fetchComm(storie).then((comms) => { setComments(comms) })
        }
        return () => mounted = false;
    }, [storie])
    console.log(comments)

    return (
        <React.Fragment >
            {!comments.length && (<Spinner />)}
            {
                comments.map(comment => <CommentComponent key={comment.id} comment={comment} />)
            }
        </React.Fragment>

    )
}
export default Comments