import React, { useEffect } from 'react'
import Comments from '../../components/comments-preview/comments-preview'
import { connect } from 'react-redux'
import { fetchSignelStorieAsync } from '../../redux/stories/stories-actions'

const CommentsPage = ({ match, fetchSingleStorie, storie }) => {
    useEffect(() => {
        fetchSingleStorie(match.params.storieId)
    }, [fetchSingleStorie])

    return (
        <Comments storie={storie} />
    )
}
const mapStateToProps = state => ({
    storie: state.stories.storie
})
const mapDispatchToProps = dispatch => ({
    fetchSingleStorie: id => dispatch(fetchSignelStorieAsync(id))
})
export default connect(mapStateToProps, mapDispatchToProps)(CommentsPage)