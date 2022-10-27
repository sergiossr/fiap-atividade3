import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import MuiThemes from './Utils/Common/MuiThemes';
import RouteController from './Routes/RouteController';
import {BrowserRouter} from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <MuiThemes>
          <RouteController/>
        </MuiThemes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();