import React from 'react';
import ReactDOM from 'react-dom';
import HomeController from './Pages/Home/HomeController';
import CardapioView from './Pages/Cardapio/CardapioView';
import * as serviceWorker from './serviceWorker';
import MuiThemes from './Utils/Common/MuiThemes';
ReactDOM.render(
  <React.StrictMode>
    <MuiThemes>
      <HomeController/>
    </MuiThemes>
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();