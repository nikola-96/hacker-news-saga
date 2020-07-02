import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import StoriesOverview from '../../components/stories-overview/stories-overview.component'
import { fetchStoriesAsync } from '../../redux/stories/stories-actions'

const TopStories = ({ storiesIds, fetchStories }) => {

    return (
        storiesIds ? < StoriesOverview storiesIds={storiesIds} /> : null

    )
}
const mapStateToProps = ({ stories }) => ({
    storiesIds: stories.loadingIds
})
const mapDispatchToProps = dispatch => ({
    fetchStories: ids => dispatch(fetchStoriesAsync(ids))
})

export default connect(mapStateToProps, mapDispatchToProps)(TopStories)