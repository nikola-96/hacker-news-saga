import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import TopStories from '../top-stories/topStories.component'
import Spinner from '../../components/spinner/spinner.component'

import { fetchStoriesIdsAsync } from '../../redux/stories/stories-actions'

const HomePage = ({ fetchStoriesIds }) => {
    useEffect(() => {
        fetchStoriesIds()
    }, [fetchStoriesIds])
    return (
        < div className="container bg-light p-0" >
            <TopStories />
            {/* <Spinner /> */}
        </div >
    )
}
const mapDispatchToProps = (dispatch) => ({
    fetchStoriesIds: () => dispatch(fetchStoriesIdsAsync())
})

export default connect(null, mapDispatchToProps)(HomePage)