import React, { useEffect } from 'react'
import StoriePreview from '../storie-preview/storie-preview.component'
import { connect } from 'react-redux'
import { fetchStoriesAsync } from '../../redux/stories/stories-actions'

const StoriesOverview = ({ storiesIds, fetchStoriesAsync }) => {
    useEffect(() => {
        fetchStoriesAsync(storiesIds)
    }, [storiesIds])
    return (
        < div >
            < StoriePreview />
        </div >
    )
}
const mapDispatchToProps = dispatch => ({
    fetchStoriesAsync: (ids) => dispatch(fetchStoriesAsync(ids))
})
export default connect(null, mapDispatchToProps)(StoriesOverview)