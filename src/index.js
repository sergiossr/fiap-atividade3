import React from 'react';
import ReactDOM from 'react-dom';
import HomeController from './Pages/Home/HomeController';
import CardapioController from './Pages/Cardapio/CardapioController';
import * as serviceWorker from './serviceWorker';
import MuiThemes from './Utils/Common/MuiThemes';
ReactDOM.render(
  <React.StrictMode>
    <MuiThemes>
      <CardapioController/>
    </MuiThemes>
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();