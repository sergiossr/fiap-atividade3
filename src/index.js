import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import MuiThemes from './Utils/Common/MuiThemes';
import RouteController from './Routes/RouteController';
import {BrowserRouter} from "react-router-dom";
import {ClienteIDContextProvider} from './Store/ClienteIDContext'


ReactDOM.render(
  <React.StrictMode>
    <MuiThemes>
      <ClienteIDContextProvider>
        <BrowserRouter>
            <RouteController/>  
        </BrowserRouter>
      </ClienteIDContextProvider>
    </MuiThemes>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();