import React from 'react';
import './App.css';
import Navbar from './pages/navbar/navbar.component';
import { Switch, Route, Redirect } from 'react-router-dom';
import homepageComponent from './pages/homepage/homepage.component'
import CommentsPage from './pages/comments/comments.component'



function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact component={homepageComponent} />
        <Route path="/comments/:storieId" component={CommentsPage} />
      </Switch>

    </div>
  );
}

export default App;
