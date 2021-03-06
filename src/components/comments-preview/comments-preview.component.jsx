import React, { useState } from 'react'
import moment from 'moment'

import { connect } from 'react-redux';
import { fetchChildComments } from '../../redux/comments/comments-actions';
import { selectCommentsByParentId } from '../../redux/comments/comments.selectors';
import Subcomments from '../subcomments-preview.component/subcomments-preview.component';

import './comments-preview.style.css'


const CommentComponent = ({ comment, fetchChildComments, childComments }) => {
    const [showReplays, setReplays] = useState(false);
    const [hidden, setHidden] = useState(false)
    const [fetchedReplays, setReplayFetchStatus] = useState(true)

    const click = (comment) => {
        fetchChildComments(comment)
        setReplays(true)
        setReplayFetchStatus(false)
    }
    const commentsList = () => childComments.map((commentKid, index) => <Subcomments key={index} comment={commentKid} />)
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
                            {hidden ? `show` : `hide`}
                        </span>
                    </div>
                    {
                        hidden ? null
                            :
                            < div >
                                <div className={`pl-4  d-block`}>
                                    <div dangerouslySetInnerHTML={{ __html: comment.text }} />
                                </div>
                                {
                                    comment.hasOwnProperty('kids') && fetchedReplays ?
                                        <span className="mx-1 show-more-btn"
                                            onClick={() => click(comment)}>Show replays</span>
                                        : null
                                }
                                {
                                    showReplays ?
                                        <div className={`bg-secondary ml-4  d-block`}>
                                            {commentsList()}
                                        </div>
                                        : null
                                }
                            </div>
                    }
                </div>
            </div>
        </div >
    )
}
const mapStateToProps = (state, ownProps) => ({
    childComments: selectCommentsByParentId(ownProps.comment)(state),
})
const mapDispatchToProps = dispatch => ({
    fetchChildComments: (comments) => dispatch(fetchChildComments(comments))
})
export default connect(mapStateToProps, mapDispatchToProps)(CommentComponent)