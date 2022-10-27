import React from 'react';
import PromoView from './PromoView';
import PromoModel from './PromoModel';

class PromoController extends React.Component {
    constructor() {
        super();
        this.promoModel = new PromoModel();//inicializando o view    
        this.promoModel.getSomeInfo(); 
    }
    render() {
        return (
    
            <PromoView/> //Chamando o View
        
        )
    }
}
export default PromoController;