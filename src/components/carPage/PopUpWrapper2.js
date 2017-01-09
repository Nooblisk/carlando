
import React, { Component } from 'react';

export default class PopUpWrapper2 extends Component {
render(){
    return (

<div className='popup-wrapper' style={{display: 'none'}}>
    <div className='container popup-container popup'>
        <div className='row'>
            <div className='col-lg-12'>
                <div className='close-popup-wrapper'>
                    <a href='' title='Закрыть' className='close close-popup'>X</a>
                </div>
                <h2 style={{color: '#e22d46'}}>Предложить свою цену</h2>
                <div className='row Carlando_Appraisal_Wrapper'>
                    <div className='col-lg-12'>
                        <div className='Input_Container'>
                            <input type='text' id='price' placeholder='Цена' />
                        </div>
                    </div>
                    <div className='col-lg-12'>
                        <div className='Input_Container'>
                            <input type='text' id='first_name' placeholder='ФИО' />
                        </div>
                    </div>
                    <div className='col-lg-12'>
                        <div className='Input_Container'>
                            <input type='text' id='phone' placeholder='Телефон' />
                        </div>
                    </div>
                    <div className='col-lg-12'>
                        <div className='Input_Container'>
                            <input type='text' id='email' placeholder='E-mail' />
                        </div>
                    </div>
                </div>
                <div className='Carlando_Appraisal_Wrapper'>
                    <div className='Appraisal_Button_Wrapper'>
                        <input className='btn Carlando_Button Carlando_Button_Red' type='button' value='Отправить заявку' />
                        </div>
                        <div className='Appraisal_Disclaimer'>
                            Нажимая на кнопку «Посмотреть результат оценки», вы соглашаетесь с условиями <a href='#'>Пользовательского соглашения</a> и <a href='#'>Положения о конфиденциальности</a>.
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    )
    }}
