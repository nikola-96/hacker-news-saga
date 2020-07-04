import React, { useEffect } from 'react'
import Comments from '../../components/comments-overview/comments-overview'
import { connect } from 'react-redux'
import { fetchSignelStorieAsync } from '../../redux/stories/stories-actions'
import StoriePreview from '../../components/storie-preview/storie-preview.component'

const CommentsPage = ({ match, fetchSingleStorie, storie }) => {
    useEffect(() => {
        fetchSingleStorie(match.params.storieId)
    }, [fetchSingleStorie])

    return (
        <div className="container bg-light p-0">
            <div>
                <StoriePreview storie={storie} />
                <div className="mx-5">
                    <textarea className="d-block col-12 col-sm-8" />
                    <input type="button" value="Add comment" />
                </div>
            </div>
            <Comments storie={storie} />
        </div>
    )
}
const mapStateToProps = state => ({
    storie: state.stories.storie
})
const mapDispatchToProps = dispatch => ({
    fetchSingleStorie: id => dispatch(fetchSignelStorieAsync(id))
})
export default connect(mapStateToProps, mapDispatchToProps)(CommentsPage)