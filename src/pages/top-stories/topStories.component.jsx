import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import StoriesOverview from '../../components/stories-overview/stories-overview.component'
import { fetchStoriesAsync, settingStoriesIds } from '../../redux/stories/stories-actions'
import CustomButton from '../../components/button-component/button.component'
import Spinner from '../../components/spinner/spinner.component'



const TopStories = ({ storiesIds, fetchStories,
    stories, storiesIdsForLoadingMoreStories,
    getIdForLoadingMore, isStoriesFetched }) => {
    useEffect(() => {
        if (storiesIds.length) {
            fetchStories(storiesIds)
        }
    }
        , [storiesIds])

    return (
        <>
            {isStoriesFetched ?
                <React.Fragment>
                    < StoriesOverview stories={stories} />
                    <CustomButton onClick={() =>
                        getIdForLoadingMore(storiesIdsForLoadingMoreStories)}>
                        Load more
            </CustomButton>
                </React.Fragment>
                : <Spinner />
            }
        </>

    )
}
const mapStateToProps = ({ stories }) => ({
    storiesIds: stories.loadingIds,
    stories: stories.stories,
    storiesIdsForLoadingMoreStories: stories.storiesIds,
    isStoriesFetched: stories.isFetched

})
const mapDispatchToProps = dispatch => ({
    fetchStories: ids => dispatch(fetchStoriesAsync(ids)),
    getIdForLoadingMore: ids => dispatch(settingStoriesIds(ids))/*<--with this action we getting the intial ids,
     and we use the sam action for loading more stories. When ever action is triggered, our page is re-rendering 
     with new stories*/
})

export default connect(mapStateToProps, mapDispatchToProps)(TopStories)