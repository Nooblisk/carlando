
import React, { Component } from 'react';


export default class Row extends Component {
    render(){
        return (

            <div className='row'>
                <div className='col-lg-10 col-sm-10 hidden-xs col-lg-offset-2 col-sm-offset-2 lt-record'>
                    <button className='button button_type_fixed button_type_fixed_color_red' type='submit'>Забронировать автомобиль</button>
                    <button className='button button_type_fixed button_type_fixed_color_blue' type='submit'>Вернуться в каталог</button>
                </div>
                <div className='visible-xs col-xs-12 lt-record'>
                    <button className='button button_type_fixed button_type_fixed_color_red' type='submit'>Забронировать</button>
                </div>
            </div>
                )
                }}
