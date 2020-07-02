import React from 'react'
import { Route, Switch } from 'react-router-dom'
import homepageComponent from './pages/homepage/homepage.component'

export default function Routes() {
    return (
        <React.Fragment>
            <Switch>
                <Route path="/" exact component={homepageComponent} />
            </Switch>
        </React.Fragment>
    )
}
