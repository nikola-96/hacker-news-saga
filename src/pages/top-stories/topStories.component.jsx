import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import StoriesOverview from '../../components/stories-overview/stories-overview.component'
import { fetchStoriesAsync } from '../../redux/stories/stories-actions'


const TopStories = ({ storiesIds, fetchStories, stories }) => {
    useEffect(() =>
        fetchStories(storiesIds)
        , [storiesIds])
    return (
        < StoriesOverview stories={stories} />
    )
}
const mapStateToProps = ({ stories }) => ({
    storiesIds: stories.loadingIds,
    stories: stories.stories

})
const mapDispatchToProps = dispatch => ({
    fetchStories: ids => dispatch(fetchStoriesAsync(ids))
})

export default connect(mapStateToProps, mapDispatchToProps)(TopStories)