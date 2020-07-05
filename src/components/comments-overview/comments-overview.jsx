import React, { useEffect, useState } from 'react'
import CommentComponent from '../comments-preview/comments-preview.component'
import Spinner from '../spinner/spinner.component';
import { connect } from 'react-redux';
import { fetchParentComments } from '../../redux/comments/comments-actions';

const Comments = ({ storie, fetchParentComments, comments }) => {
    // const [comments, setComments] = useState([]);
    useEffect(() => {
        if (storie.kids) {
            fetchParentComments(storie)

        }
    }, [storie])

    return (
        <React.Fragment >
            {!comments.length && (<Spinner />)}
            {
                comments.map(comment => <CommentComponent key={comment.id} comment={comment} />)
            }
        </React.Fragment>

    )
}
const mapDispatchToProps = (dispatch) => ({
    fetchParentComments: (obj) => dispatch(fetchParentComments(obj))
})
const mapStateToProps = ({ comments }) => ({
    comments: comments.comments
})
export default connect(mapStateToProps, mapDispatchToProps)(Comments)