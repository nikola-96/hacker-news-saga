import React, { useEffect } from 'react'
import StoriePreview from '../storie-preview/storie-preview.component'
import { connect } from 'react-redux'

const StoriesOverview = ({ stories }) => {
    return (
        < div >
            {
                stories.map(storie => < StoriePreview key={storie.id} storie={storie} />)
            }
        </div >
    )
}
export default connect()(StoriesOverview)