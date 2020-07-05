import React from 'react'
import StoriePreview from '../storie-preview/storie-preview.component'
import { connect } from 'react-redux'

const StoriesOverview = ({ stories, totalIdsForShowing }) => {
    return (
        < React.Fragment >
            {
                stories.map(storie => < StoriePreview key={storie.id}
                    storie={storie}
                    totalIdsForShowing={totalIdsForShowing}
                />)
            }
        </React.Fragment >

    )
}
const mapStateToProps = state => ({
    totalIdsForShowing: state.numbersOfStories
})
export default connect(mapStateToProps)(StoriesOverview)