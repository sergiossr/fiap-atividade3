import React from 'react';
import MonteView from './MonteView';
import MonteModel from './MonteModel'

class MonteController extends React.Component {
    constructor() {
        super();
        this.monteModel = new MonteModel();//inicializando o view    
        this.monteModel.getSomeInfo(); 
    }
    render() {
        return (
    
            <MonteView/> //Chamando o View
        
        )
    }
}
export default MonteController;