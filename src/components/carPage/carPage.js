
import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as pageActions from '../../actions/PageActions';

import ContainerFluid1 from './ContainerFluid1'
import ContainerFluid2 from './ContainerFluid2'
import Row from './Row'
import PopUpWrapper1 from './PopUpWrapper1'
import PopUpWrapper2 from './PopUpWrapper2'



class CarPage extends Component {
    render() {
        //const carId = this.props.params.carId;
        const carId = 1762; //заглушка
        const {car} = this.props.carReducer;
        const myCar = car[carId];
        return (
            <div>
                <ContainerFluid1
            myCar={myCar}
            />
                <ContainerFluid2 />
                <Row />
                <PopUpWrapper1 />
                <PopUpWrapper2 />
            </div>
        )
    }
}



function mapStateToProps (state) {
    return {
        flightReducer: state.flightReducer,
        carReducer: state.carReducer
    };
}


function mapDispatchToProps(dispatch) {
    return {
        pageActions: bindActionCreators(pageActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CarPage);