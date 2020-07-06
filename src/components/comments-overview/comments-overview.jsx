import React, { useEffect } from 'react'
import CommentComponent from '../comments-preview/comments-preview.component'
import Spinner from '../spinner/spinner.component';
import { connect } from 'react-redux';
import { fetchParentComments } from '../../redux/comments/comments-actions';

const Comments = ({ storie, fetchParentComments, comments, isFetched }) => {
    useEffect(() => {
        if (storie) {
            fetchParentComments(storie)

        }
    }, [storie])

    return (
        <React.Fragment >
            {/* {isFetched ? null : (<Spinner />)} */}
            {
                comments.map((comment, index) => <CommentComponent key={index} comment={comment} />)
            }
        </React.Fragment>

    )
}
const mapDispatchToProps = (dispatch) => ({
    fetchParentComments: (obj) => dispatch(fetchParentComments(obj))
})
const mapStateToProps = ({ comments }) => ({
    comments: comments.comments,
    isFetched: comments.isFetched
})
export default connect(mapStateToProps, mapDispatchToProps)(Comments)