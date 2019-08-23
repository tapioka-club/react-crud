import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from '../components/Header';
import paths from '../constants/paths';

import App from '../pages/App';
import PostID from '../pages/posts/_id';
import NotFound from '../pages/NotFound';

function Root() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path={paths.ROOT} component={App} />
        <Route exact path={paths.POST_ID} component={PostID} />
        <Route path={paths.NOTFOUND} component={NotFound} />
      </Switch>
    </div>
  );
}

export default Root;
