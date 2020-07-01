import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import TopStories from '../top-stories/topStories.component'
import { fetchStoriesStartAsync } from '../../redux/stories/stories-actions'


const HomePage = ({ fetchStoriesStart }) => {
    useEffect(() => {
        fetchStoriesStart()
    }, [fetchStoriesStart])
    return (
        < div className="container bg-light p-0" >
            <TopStories />
        </div >
    )
}
const mapDispatchToProps = (dispatch) => ({
    fetchStoriesStart: () => dispatch(fetchStoriesStartAsync())
})

export default connect(null, mapDispatchToProps)(HomePage)