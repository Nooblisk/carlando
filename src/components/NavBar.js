
import React, { Component } from 'react'

export default class NavBar extends Component {
    render() {
        return (
            <div className='container-fluid Carlando_NavBar'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <div className='row'>
                            <div className='col-lg-2 col-md-3 col-sm-3 col-xs-5 Carlando_NavBar_Logo'>
                                <a href='#'><img src='./images/logo.svg' /></a>
                            </div>
                            <div className='col-lg-2 col-md-2 hidden-sm hidden-xs Carlando_NavBar_City'>
                                Нижний Новгород
                            </div>
                            <div className='col-lg-4 col-md-2 col-sm-3 col-xs-7 Carlando_NavBar_Phone'>
                                +7 (831) 260-10-52
                            </div>
                            <div className='col-lg-4 col-md-5 col-sm-6 hidden-xs Carlando_NavBar_Buttons'>
                                <a href='#'>Продать автомобиль</a>
                                <a href='#'>Купить автомобиль</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}