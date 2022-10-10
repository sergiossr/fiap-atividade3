import React from 'react';
import HomeView from './HomeView'
import HomeModel from './HomeModel'

class HomeController extends React.Component {
    constructor() {
        super();
        this.homeModel = new HomeModel();//inicializando o view    
        this.homeModel.getSomeInfo(); 
    }
    render() {
        return (
    
            <HomeView/> //Chamando o View
        
        )
    }
}
export default HomeController;