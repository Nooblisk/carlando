

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as pageActions from '../../actions/PageActions';

import CarCatalog from './carCatalog'

class CarCatalogPage extends Component{

    render(){
        const {cars} = this.props.carReducer;

        return (

            <div className='container-fluid'>


                <div className='row Carlando_Body_Block'>

                    <div className='col-md-12 col-sm-12 Carlando_Buy_Wrapper'>

                        <div className='row'>
                            <div className='col-md-10 col-md-offset-1 Carlando_Buy_Header'>

                                <h1>Купить автомобиль с пробегом с Carlando</h1>

                                <div className='row'>
                                    <div className='col-md-4'>
                                        <div className='media Carlando_Buy_Advantage'>
                                            <div className='media-left'><i className='fa fa-search-plus fa-3x' aria-hidden='true'></i></div>
                                            <div className='media-body'>
                                                <h4>Все автомобили</h4>Прошли детальную диагностику и&nbsp;проверены нашими экспертами</div>
                                        </div>
                                    </div>
                                    <div className='col-md-4'>
                                        <div className='media Carlando_Buy_Advantage'>
                                            <div className='media-left'><i className='fa fa-certificate fa-3x' aria-hidden='true'></i></div>
                                            <div className='media-body'>
                                                <h4>Гарантия</h4>На&nbsp;автомобили из&nbsp;нашего каталога мы&nbsp;предоставляем 3-х месячную гарантию на&nbsp;основные узлы и&nbsp;агрегаты<sup>1</sup></div>
                                        </div>

                                    </div>
                                    <div className='col-md-4'>
                                        <div className='media Carlando_Buy_Advantage'>
                                            <div className='media-left'><i className='fa fa-refresh fa-3x' aria-hidden='true'></i></div>
                                            <div className='media-body'>
                                                <h4>Возврат</h4>Вы&nbsp;можете вернуть нам автомобиль в&nbsp;течение пяти дней, и&nbsp;мы&nbsp;вернем вам деньги<sup>2</sup></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>


                <div className='row Carlando_Body_Block'>

                    <div className='col-sm-12 CarBrowser_container'>

                        <div className='row'>

                            <div className='col-sm-3 col-xs-6  CarBrowser_Filter_Container shown1'>

                            </div>

                            <div className='col-sm-10 col-sm-offset-1 CarBrowser_List_Container  CarBrowser_List_Container'>

                                <div className='row'>
                                    <div className='col-lg-3 hidden-xs filter-cars filter-cars_visible'>
                                        <div className='filter-cars__select'>
                                            <span>Модель</span>
                                            <div className='select-full-size__dialog' style={{display: 'none'}}>
                                                <div className='select-full-size__list-wrapper'>
                                                    <a href='' title='Закрыть' className='close'>X</a>
                                                    <ul className='select-full-size__list'>
                                                        <li className='select-full-size__item'> <span>A</span>
                                                            <ul>
                                                                <li className='select-full-size__item-icon'>Alfa Romeo</li>
                                                                <li>Abarth</li>
                                                            </ul>
                                                        </li>
                                                        <li className='select-full-size__item'> <span>B</span>
                                                            <ul>
                                                                <li>Bugatti</li>
                                                                <li>Bentley</li>
                                                            </ul>
                                                        </li>
                                                        <li className='select-full-size__item'> <span>C</span>
                                                            <ul>
                                                                <li className='select-full-size__item-icon'>Cadillac</li>
                                                                <li>Chevrolet</li>
                                                            </ul>
                                                        </li>
                                                        <li className='select-full-size__item'> <span>D</span>
                                                            <ul>
                                                                <li>Dacia</li>
                                                            </ul>
                                                        </li>
                                                        <li className='select-full-size__item'> <span>E</span>
                                                            <ul>
                                                                <li>Elfin</li>
                                                            </ul>
                                                        </li>
                                                        <li className='select-full-size__item'> <span>F</span>
                                                            <ul>
                                                                <li>Fiat</li>
                                                            </ul>
                                                        </li>
                                                        <li className='select-full-size__item'> <span>G</span>
                                                            <ul>
                                                                <li>Gaz</li>
                                                            </ul>
                                                        </li>
                                                        <li className='select-full-size__item'> <span>H</span>
                                                            <ul>
                                                                <li>Honda</li>
                                                            </ul>
                                                        </li>
                                                        <li className='select-full-size__item'> <span>I</span>
                                                            <ul>
                                                                <li>Infiniti</li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                    <div className='filter-cars__select-button'>
                                                        <button className='btn Carlando_Button Carlando_Button_Blue'>Выбрать</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-3 hidden-xs filter-cars'>
                                        <div className='filter-cars__select'>
                                            <span>Тип трансмиссии</span>
                                            <ul className='select-standard__list' style={{display: 'none'}}>
                                                <li className='select-standard__item select-full-size__item-icon'>Автоматическая</li>
                                                <li className='select-standard__item'>Автоматическая</li>
                                                <li className='select-standard__item'>Механическая</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className='col-lg-3 hidden-xs filter-cars'>
                                        <div className='uislider'>
                                            <div className='uislider__title'><span>Год: </span><span className='example-val' id='value-min'></span> <span> - </span> <span className='example-val' id='value-max'></span></div>
                                            <div id='slider'></div>
                                        </div>
                                    </div>
                                    <div className='col-lg-3 hidden-xs filter-cars'>
                                        <div className='uislider__title'><span>Цена: </span><span id='slider-range-value'></span></div>
                                        <div id='slider-range'></div>
                                    </div>
                                </div>

                                <div className='row CarBrowser_Header'>
                                    <div className='col-lg-8 CarBrowser_Title_text'>
                                        <div className='row'>
                                            <div className='col-lg-12 col-xs-10'>
                                                <h1><span>Каталог </span><span className='hidden-xs'>автомобилей с пробегом</span> <span className='badge'>42</span> <span className='hidden-xs reset-filters'>Сбросить&nbsp;фильтры</span></h1></div>
                                            <div className='hidden-lg hidden-sm hidden-md col-xs-2 icon-filter-wrapper'>
                                                <i className='fa fa-2x fa-filter icon-filter' aria-hidden='true'></i>
                                            </div>
                                        </div>

                                    </div>
                                    <div className='col-lg-4 CarBrowser_Header_sort'>
                                        сортировать по
                                        <div className='CarBrowser_Header_sort_links'>
                                            <a href='#' className='active asc'>&nbsp;дате</a>
                                            <a href='#'>цене</a>
                                            <a href='#'>году</a>
                                            <a href='#'>пробегу</a>
                                        </div>
                                    </div>
                                </div>

                                <div className='row'>
                                    <div className='col-sm-12'>
                                        <div className='more-info'>Осмотр автомобиля по предварительной договоренности по телефону</div>
                                    </div>
                                </div>

                                <CarCatalog cars={cars}
                                    />
                            </div>


                        </div>

                    </div>

                </div>

                <div className='row  row-eq-height Carlando_Body_Block'>

                    <div className='col-sm-1 hidden-xs'>
                        <div className='row Carlando_Stripes_Left'>
                            <div className='col-lg-5 col-lg-offset-7 Carlando_Bevel'></div>
                        </div>
                    </div>

                    <div className='col-sm-10 Carlando_Appraisal_Wrapper CarPage_Application_Wrapper'>

                        <div className='row'>
                            <div className='col-md-10 col-md-offset-1'>
                                <div className='about-us'>
                                    <ul className='about-us__list-wrapper'>
                                        <li><span className='about-us__title'>О нас</span>
                                            <ul>
                                                <li><span>Мы профессионально занимаемся поиском автомобилей для наших клиентов. Каждый день мы общаемся с несколькими десятками продавцов автомобилей. Мы уверены, что оперативно найдем автомобиль для вас!</span></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-10 col-md-offset-1 Carlando_Appraisal_Header CarPage_Application_Header'>
                                <h1>Не нашли подходящий автомобиль?</h1>

                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-md-10 col-md-offset-1 CarlandoWL_Selector_Container'>
                                <div className='CarlandoWL_Selector_Wrapper CarlandoWL_Selector_Wrapper_Active'>
                            <span className='CarlandoWL_Selector_step1'>
                            Меня интересует <span className='CarWL_Selector'>укажите марку</span>

                            </span>


                            <span className='CarlandoWL_Selector_step1'>
                            с <span className='CarWL_Selector'>любой</span> коробкой передач
                            </span>


                            <span className='CarlandoWL_Selector_step3'>
                            не старше <input type='text' className='CarlandoWL_Selector_Input CarlandoWL_Selector_Input_Year' maxlength='4' /> года выпуска
                        </span>
                            <span className='CarlandoWL_Selector_step4'>
                            и не дороже <input type='text' className='CarlandoWL_Selector_Input CarlandoWL_Selector_Input_Price' maxlength='9' /> ₽
                        </span>



                                </div>
                            </div>
                        </div>


                        <div className='CarlandoWL_Selector_Popup hidden'>
                            <div className='CarlandoWL_Selector_Popup_Close'>&#10005;</div>
                            <div className='CarlandoWL_Selector_Popup_Title'>Марка автомобиля</div>
                            <div className='row CarlandoWL_Selector_Popup_Make'>
                                <div className='col-sm-2 col-sm-offset-2'>
                                    <ul>

                                        <li className='title'></li>
                                        <li>Acura</li>
                                        <li>Alfa Romeo</li>
                                        <li>Audi</li>

                                        <li className='title'></li>
                                        <li>BMW</li>
                                        <li>Brilliance</li>

                                        <li className='title'></li>
                                        <li>Cadillac</li>
                                        <li>Changan</li>
                                        <li>Chery</li>
                                        <li>Chevrolet</li>
                                        <li>Chrysler</li>
                                        <li>Citroen</li>

                                        <li className='title'></li>
                                        <li>Datsun</li>
                                        <li>Dongfeng</li>


                                    </ul>
                                </div>
                                <div className='col-sm-2'>
                                    <ul>

                                        <li className='title'></li>
                                        <li>FAW</li>
                                        <li>Fiat</li>
                                        <li>Ford</li>

                                        <li className='title'> </li>
                                        <li>Geely</li>
                                        <li>Great Wall</li>

                                        <li className='title'></li>
                                        <li>Haima</li>
                                        <li>Haval</li>
                                        <li>Hawtai</li>
                                        <li>Honda</li>
                                        <li className='selected'>Hyundai</li>

                                        <li className='title'></li>
                                        <li>Infiniti</li>

                                        <li className='title'></li>
                                        <li>Jaguar</li>
                                        <li>Jeep</li>
                                    </ul>
                                </div>

                                <div className='col-sm-2'>
                                    <ul>


                                        <li className='title'></li>
                                        <li>Kia</li>

                                        <li className='title'></li>
                                        <li>LADA</li>
                                        <li>Land Rover</li>
                                        <li>Lexus</li>
                                        <li>Lifan</li>

                                        <li className='title'></li>
                                        <li>MINI</li>
                                        <li>Mazda</li>
                                        <li>Mercedes-Benz</li>
                                        <li>Mitsubishi</li>

                                        <li className='title'></li>
                                        <li>Nissan</li>

                                        <li className='title'></li>
                                        <li>Opel</li>

                                        <li className='title'></li>
                                        <li>Peugeot</li>
                                        <li>Porsche</li>



                                    </ul>
                                </div>

                                <div className='col-sm-2'>

                                    <ul>


                                        <li className='title'></li>
                                        <li>Ravon</li>
                                        <li>Renault</li>

                                        <li className='title'></li>
                                        <li>Skoda</li>
                                        <li>SsangYong</li>
                                        <li>Subaru</li>
                                        <li>Suzuki</li>

                                        <li className='title'></li>
                                        <li>Toyota</li>

                                        <li className='title'></li>
                                        <li>UAZ</li>

                                        <li className='title'></li>
                                        <li>Volkswagen</li>
                                        <li>Volvo</li>

                                        <li className='title'></li>
                                        <li>ZAZ</li>
                                        <li>Zotye</li>


                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className='CarlandoWL_Form hidden1'>

                            <div className='row'>
                                <div className='col-sm-5  col-md-offset-1'>
                                    <div className='Input_Container'>
                                        <input type='text' id='first_name' placeholder='Имя' />
                                        <label for='first_name'>Имя</label>
                                    </div>
                                </div>

                            </div>

                            <div className='row'>
                                <div className='col-sm-5  col-md-offset-1'>
                                    <div className='Input_Container'>
                                        <input type='text' id='email' placeholder='E-mail' />
                                        <label for='email'>E-mail</label>
                                    </div>
                                </div>

                            </div>

                            <div className='row'>
                                <div className='col-md-5  col-md-offset-1'>
                                    <div className='Appraisal_Button_Wrapper'>
                                        <input className='btn Carlando_Button Carlando_Button_Red' type='button' value='Отправить запрос' />
                                        </div>

                                        <div className='Appraisal_Disclaimer'>
                                            Нажимая на кнопку «Отправить запрос», вы соглашаетесь с условиями <a href='#'>Пользовательского соглашения</a> и <a href='#'>Положения о конфиденциальности</a>.
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>

                        <div className='col-sm-1  hidden-xs'>
                            <div className='row Carlando_Stripes'>
                                <div className='col-lg-5 Carlando_Bevel'></div>
                            </div>
                        </div>


                    </div>


                </div>




        )

    }

}




function mapStateToProps (state) {
    return {
        carReducer: state.carReducer
    };
}
function mapDispatchToProps(dispatch) {
    return {
        pageActions: bindActionCreators(pageActions, dispatch)
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(CarCatalogPage);