import React from 'react';
import {Switch, Route} from 'react-router-dom';
import paths from '../constants/paths';

import App from '../App';

function Root() {
  return (
    <div>
      <Switch>
        <Route exact path={paths.ROOT} component={App} />
      </Switch>
    </div>
  );
}

export default Root;
