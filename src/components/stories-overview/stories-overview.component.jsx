import React from 'react'
import StoriePreview from '../storie-preview/storie-preview.component'
import { connect } from 'react-redux'

const StoriesOverview = ({ stories }) => {
    return (
        < React.Fragment >
            {
                stories.map(storie => < StoriePreview key={storie.id} storie={storie} />)
            }
        </React.Fragment >

    )
}
export default connect()(StoriesOverview)