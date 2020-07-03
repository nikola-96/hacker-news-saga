import React, { useEffect } from 'react'
import Comments from '../../components/comments-preview/comments-preview'
import { connect } from 'react-redux'
import { fetchSignelStorieAsync } from '../../redux/stories/stories-actions'

const CommentsPage = ({ match, fetchSingleStorie }) => {
    useEffect(() => {
        fetchSingleStorie(match.params.storieId)
    }, [match.params.storieId])

    return (
        <Comments />
    )
}
const mapDispatchToProps = dispatch => ({
    fetchSingleStorie: id => dispatch(fetchSignelStorieAsync(id))
})
export default connect(null, mapDispatchToProps)(CommentsPage)