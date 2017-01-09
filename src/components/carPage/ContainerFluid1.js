

import React, { Component } from 'react';



export default class ContainerFluid1 extends Component {
    render(){
        const {myCar}=this.props;
        return (

            <div className='container-fluid'>

                <div className='row row-eq-height Carlando_Body_Block'>
                    <div className='col-sm-2 hidden-xs CarPage_Photo_Side CarPage_Photo_Side_left' style={{backgroundImage: 'url(http://http.carlando.ru/files/97)'}}></div>

                    <div className='col-sm-8 CarPage_Photo_Wrapper'>
                        <div className='CarPage_Loader'>
                            <div>
                                <div>
                                    <div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img src='http://http.carlando.ru/files/98' className='CarPage_Photo_photo' />
                        <div className='CarPage_Photo_Nav CarPage_Photo_Nav_left'><i className='fa fa-angle-left fa-3x' aria-hidden='true'></i></div>
                        <div className='CarPage_Photo_Nav CarPage_Photo_Nav_right'><i className='fa fa-angle-right  fa-3x' aria-hidden='true'></i></div>
                        <div className='CarPage__state'>
            {myCar.sold && <div className='CarPage__state-inner CarPage__state-inner_color_blue'>Продан</div>}
                        </div>
                    </div>

                    <div className='col-sm-2 hidden-xs CarPage_Photo_Side CarPage_Photo_Side_right' style={{backgroundImage: 'url(http://http.carlando.ru/files/99)'}}></div>
                </div>

                <div className='row'>
                    <div className='visible-xs col-xs-12 button_wrapper'>
                        <button className='button button_type_fixed button_type_fixed_color_blue' type='submit'>Вернуться в каталог</button>
                    </div>
                </div>

                <div className='row CarPage_CoreData_Container CarPage_CoreData_Container_fix_top1'>
                    <div className='col-sm-2 hidden-xs'></div>

                    <div className='col-sm-8 CarPage_CoreData_Wrapper'>
                        <div className='row'>
                            <div className='col-xs-6 col-sm-6 CarPage_CoreData_Make_Model'>
                                <h1 className='make'>Mecedes-Benz E-className coupe </h1>
                                <span className='version'>3.5 (E350) (306HP) 4MATIC ОС (2016) 7AT, 2011 г.в., 120 000 км</span>
                            </div>
                            <div className='col-xs-3 col-sm-4 CarPage_CoreData_Price_Installment'>
                                <h1 className='price'>1 200 000</h1>
                                <span className='installment'>120 000</span>
                            </div>
                        </div>
                    </div>

                    <div className='col-sm-2 hidden-xs'></div>
                </div>

                <div className='row Carlando_Body_Block'>

                    <div className='col-sm-2 hidden-xs'></div>

                    <div className='col-sm-8'>

                        <div className='row'>
                            <div className='col-md-4'>
                                <div className='media CarPage_Benefit'>
                                    <div className='media-left'><i className='fa fa-check-circle fa-3x' aria-hidden='true'></i></div>
                                    <div className='media-body'>
                                        <h4>Этот автомобиль</h4>прошел проверку юридической чистоты</div>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='media CarPage_Benefit'>
                                    <div className='media-left'><i className='fa fa-certificate fa-3x' aria-hidden='true'></i></div>
                                    <div className='media-body'>
                                        <h4>На&nbsp;этот автомобиль с&nbsp;пробегом</h4>предоставляется гарантия на&nbsp;основные узлы и&nbsp;агрегаты<sup>1</sup> и&nbsp;гарантия возврата денег в&nbsp;течение 5-ти дней<sup>2</sup></div>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='media CarPage_Benefit'>
                                    <div className='media-left'><i className='fa fa-rub fa-3x' aria-hidden='true'></i></div>
                                    <div className='media-body'>
                                        <h4>Кредит</h4>этот автомобиль с&nbsp;пробегом вы&nbsp;можете приобрести в&nbsp;кредит</div>
                                </div>
                            </div>
                        </div>

                        <div className='row'>

                        </div>

                    </div>

                    <div className='col-sm-2 hidden-xs'></div>
                </div>

                <div className='row Carlando_Body_Block'>

                    <div className='col-lg-2 col-md-1 col-sm-1 hidden-xs'></div>

                    <div className='col-lg-8 col-md-10 col-sm-10 CarPage_Tabs'>

                        <div className='CarPage_Description'></div>

                        <div className='CarPage_Number'>Номер автомобиля в каталоге: <span>25</span></div>
                        <div className='more-info more-info_card'>Осмотр автомобиля по предварительной договоренности по телефону</div>


                        <ul className='nav nav-tabs CarPage_Tabs_nav'>
                            <li className='active'><a href='#equipment'>Оборудование автомобиля</a></li>
                            <li><a href='#check' aria-controls='check' role='tab' data-toggle='tab'>Результаты диагностики</a></li>
                            <li><a href='#damages' aria-controls='damages' role='tab' data-toggle='tab'>Повреждения</a></li>
                        </ul>

                        <div className='tab-content'>
                            <div role='tabpanel' className='tab-pane active' id='equipment'>
                                <div className='row CarPage_Tab_Block'>
                                    <div className='col-sm-4 CarPage_Tab_Block_Header'>
                                        <h4>Экстерьер</h4>
                                    </div>

                                    <div className='col-sm-8'>
                                        <div className='row'>
                                            <div className='col-md-6'>
                                                <ul>
                                                    <li>Электропривод зеркал</li>
                                                    <li>Электрообогрев зеркал</li>
                                                    <li>Зимняя резина</li>
                                                    <li>Центральный замок с дистанционным управлением на ключе или пульте</li>

                                                </ul>
                                            </div>
                                            <div className='col-md-6'>
                                                <ul>
                                                    <li>Охранная сигнализация с дистанционным управлением</li>
                                                    <li>Охранная сигнализация с дистанционным управлением и двусторонней связью</li>
                                                    <li>Корректор уровня фар (гидравлический или электрический)</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='row CarPage_Tab_Block'>
                                    <div className='col-sm-4 CarPage_Tab_Block_Header'>
                                        <h4>Интерьер</h4>
                                    </div>

                                    <div className='col-sm-8'>
                                        <div className='row'>
                                            <div className='col-md-6'>
                                                <ul>
                                                    <li>Электропривод зеркал</li>
                                                    <li>Электрообогрев зеркал</li>
                                                    <li>Зимняя резина</li>
                                                    <li>Центральный замок с дистанционным управлением на ключе или пульте</li>

                                                </ul>
                                            </div>
                                            <div className='col-md-6'>
                                                <ul>
                                                    <li>Охранная сигнализация с дистанционным управлением</li>
                                                    <li>Охранная сигнализация с дистанционным управлением и двусторонней связью</li>
                                                    <li>Корректор уровня фар (гидравлический или электрический)</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div role='tabpanel' className='tab-pane' id='check'>
                                <div className='row CarPage_Tab_Block'>
                                    <div className='col-sm-6 CarPage_Tab_Block_Header'>
                                        <h4>Индикаторы ошибок приборной панели</h4>
                                    </div>

                                    <div className='col-sm-6'>
                                        <div className='media CarPage_Check CarPage_Check_Ok'>
                                            <div className='media-left'><i className='fa fa-check-circle fa-lg' aria-hidden='true'></i></div>
                                            <div className='media-body'>Ошибки отсутствуют</div>
                                        </div>
                                    </div>
                                </div>

                                <div className='row CarPage_Tab_Block'>
                                    <div className='col-sm-6 CarPage_Tab_Block_Header'>
                                        <h4>Диагностические ошибки</h4>
                                        <span className='comment'>Для проверки работы систем автомобиля, мы подключаем профессиональные компьютерные диагностические приборы</span>
                                    </div>

                                    <div className='col-sm-6'>
                                        <div className='media CarPage_Check CarPage_Check_Fail'>
                                            <div className='media-left'><i className='fa fa-exclamation-circle fa-lg' aria-hidden='true'></i></div>
                                            <div className='media-body'>Есть ошибки</div>
                                        </div>
                                    </div>
                                </div>

                                <div className='row CarPage_Tab_Block'>
                                    <div className='col-sm-6 CarPage_Tab_Block_Header'>
                                        <h4>Состояние жидкостей и заряд батареи</h4>
                                        <span className='comment'>Для проверки состояния жидкостей мы используем профессиональные анализаторы</span>
                                    </div>

                                    <div className='col-sm-6'>
                                        <div className='media CarPage_Check CarPage_Check_Ok'>
                                            <div className='media-left'><i className='fa fa-check-circle fa-lg' aria-hidden='true'></i></div>
                                            <div className='media-body'>Аккумуляторная батарея</div>
                                        </div>

                                        <div className='media CarPage_Check CarPage_Check_Fail'>
                                            <div className='media-left'><i className='fa fa-exclamation-circle fa-lg' aria-hidden='true'></i></div>
                                            <div className='media-body'>Моторное масло</div>
                                        </div>

                                        <div className='media CarPage_Check CarPage_Check_Fail'>
                                            <div className='media-left'><i className='fa fa-exclamation-circle fa-lg' aria-hidden='true'></i></div>
                                            <div className='media-body'>Жидкость сцепления</div>
                                        </div>

                                        <div className='media CarPage_Check CarPage_Check_Fail'>
                                            <div className='media-left'><i className='fa fa-exclamation-circle fa-lg' aria-hidden='true'></i></div>
                                            <div className='media-body'>Охлаждающая жидкость</div>
                                        </div>

                                        <div className='media CarPage_Check CarPage_Check_NotChecked'>
                                            <div className='media-left'><i className='fa fa-minus fa-lg' aria-hidden='true'></i></div>
                                            <div className='media-body'>Жидкость АКПП</div>
                                        </div>

                                        <div className='media CarPage_Check CarPage_Check_NotChecked'>
                                            <div className='media-left'><i className='fa fa-minus fa-lg' aria-hidden='true'></i></div>
                                            <div className='media-body'>Тормозная жидкость</div>
                                        </div>

                                        <div className='media CarPage_Check CarPage_Check_Fail'>
                                            <div className='media-left'><i className='fa fa-exclamation-circle fa-lg' aria-hidden='true'></i></div>
                                            <div className='media-body'>Жидкость гидроусилителя</div>
                                        </div>
                                    </div>
                                </div>

                                <div className='row CarPage_Tab_Block'>
                                    <div className='col-sm-6 CarPage_Tab_Block_Header'>
                                        <h4>Проблемы двигателя</h4>
                                    </div>

                                    <div className='col-sm-6'>
                                        <div className='media CarPage_Check CarPage_Check_Ok'>
                                            <div className='media-left'><i className='fa fa-check-circle fa-lg' aria-hidden='true'></i></div>
                                            <div className='media-body'>Проблемы отсутствуют</div>
                                        </div>
                                    </div>
                                </div>

                                <div className='row CarPage_Tab_Block'>
                                    <div className='col-sm-6 CarPage_Tab_Block_Header'>
                                        <h4>Проблемы под днищем</h4>
                                    </div>

                                    <div className='col-sm-6'>
                                        <div className='media CarPage_Check CarPage_Check_Ok'>
                                            <div className='media-left'><i className='fa fa-check-circle fa-lg' aria-hidden='true'></i></div>
                                            <div className='media-body'>Проблемы отсутствуют</div>
                                        </div>
                                    </div>
                                </div>

                                <div className='row CarPage_Tab_Block'>
                                    <div className='col-sm-6 CarPage_Tab_Block_Header'>
                                        <h4>Результаты тест-драйва</h4>
                                        <span className='comment'>Тест-драйв проводят наши профессиональные оценщики с большим опытом</span>
                                    </div>

                                    <div className='col-sm-6'>
                                        <div className='row CarPage_Check_KeyVal'>
                                            <div className='col-xs-6 key'>Коробка передач / Сцепление</div>
                                            <div className='col-xs-6 val'>М: Скрип при нажатии на педаль сцепления</div>
                                        </div>

                                        <div className='row CarPage_Check_KeyVal'>
                                            <div className='col-xs-6 key'>Рулевое управление</div>
                                            <div className='col-xs-6 val'>Стук при покачивании рулевого колеса вправо-влево</div>
                                        </div>

                                        <div className='media CarPage_Check CarPage_Check_Ok'>
                                            <div className='media-left'><i className='fa fa-check-circle fa-lg' aria-hidden='true'></i></div>
                                            <div className='media-body'>Проблемы отсутствуют</div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                            <div role='tabpanel' className='tab-pane ' id='damages'>
                                <div className='row CarPage_Tab_Block'>
                                    <div className='col-sm-3 CarPage_Tab_Block_Header'>
                                        <h4>Дефекты интерьера</h4>
                                    </div>

                                    <div className='col-sm-9'>
                                        <div className='media CarPage_Check CarPage_Check_Ok'>
                                            <div className='media-left'><i className='fa fa-check-circle fa-lg' aria-hidden='true'></i></div>
                                            <div className='media-body'>Дефекты отсутствуют</div>
                                        </div>
                                    </div>
                                </div>

                                <div className='row CarPage_Tab_Block'>
                                    <div className='col-sm-3 CarPage_Tab_Block_Header'>
                                        <h4>Дефекты экстерьера</h4>
                                    </div>

                                    <div className='col-sm-9'>
                                        <div className='row CarPage_Check_KeyVal'>
                                            <div className='col-sm-4 col-xs-12 key'>ЛЕВЫЙ БОК / ПЕРЕДНЕЕ КРЫЛО</div>
                                            <div className='col-sm-2 col-xs-12 val damage'>
                                                Отверстие
                                            </div>

                                            <div className='col-sm-5 col-xs-12'>Порез до корда. Рекомендована замена передних колес</div>
                                            <div className='col-sm-1 col-xs-12 val damage'>
                                                <a>
                                                    <i className='fa fa-camera fa-2x' aria-hidden='true'></i>
                                                    <img src='http://http.carlando.ru/files/112' />
                                                </a>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-2 col-md-1 col-sm-1 hidden-xs'></div>
                </div>

                <div className='row Carlando_Body_Block'>

                    <div className='col-sm-1 hidden-xs'>
                        <div className='row Carlando_Stripes_Left'>
                            <div className='col-lg-5 col-lg-offset-7 Carlando_Bevel'></div>
                        </div>
                    </div>

                    <div className='col-sm-10 Carlando_Appraisal_Wrapper CarPage_Application_Wrapper'>

                        <div className='row'>
                            <div className='col-md-10 col-md-offset-1 Carlando_Appraisal_Header CarPage_Application_Header'>
                                <h1>Остались вопросы по этому автомобилю?</h1>
                                <div className='comment WL_Disclaimer'>Отправьте нам запрос,&nbsp;мы&nbsp;перезвоним&nbsp;и, с&nbsp;радостью, ответим на&nbsp;все ваши вопросы</div>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-sm-5  col-md-offset-1'>
                                <div className='Input_Container'>
                                    <input type='text' id='first_name' placeholder='Имя' />
                                    <label for='first_name'>Имя</label>
                                </div>
                            </div>
                            <div className='col-sm-5'>
                                <div className='Input_Container Input_Active'>
                                    <input type='text' id='last_name' placeholder='Фамилия' value='Воробьев' />
                                    <label for='last_name'>Фамилия</label>


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
                            <div className='col-sm-5'>
                                <div className='Input_Container'>
                                    <input type='text' id='phone' placeholder='Телефон' />
                                    <label for='phone'>Телефон</label>
                                </div>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-sm-10  col-md-offset-1'>
                                <div className='Input_Container'>
                                    <textarea className='form-control' wrap='off' id='comment' rows='3' placeholder='Ваш вопрос'></textarea>
                                    <label for='comment'>Ваш вопрос</label>
                                </div>
                            </div>
                        </div>


                        <div className='row'>
                            <div className='col-md-6  col-md-offset-1'>
                                <div className=' WL_Button_Wrapper'>
                                    <input className='btn Carlando_Button Carlando_Button_Red' type='button' value='Отправить запрос' />
                                    </div>

                                    <div className='Appraisal_Disclaimer WL_Disclaimer'>
                                        Нажимая на кнопку «Отправить запрос», вы соглашаетесь с условиями <a href='#'>Пользовательского соглашения</a> и <a href='#'>Положения о конфиденциальности</a>.
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

                    <div className='row Carlando_Body_Block'>

                        <div className='col-md-12 col-sm-12 CarBrowser_container'>


                            <div className='row CarBrowser_Title'>
                                <div className='col-sm-2 hidden-xs'></div>
                                <div className='col-xs-12 col-sm-8 CarBrowser_Title_text'>
                                    <h1>Похожие автомобили с пробегом</h1>
                                </div>
                                <div className='col-sm-2 hidden-xs'></div>
                            </div>

                            <div className='row CarBrowser_list'>
                                <div className='col-sm-2 hidden-xs'></div>
                                <div className='col-sm-8'>
                                    <div className='row'>
                                        <div className='col-lg-4 col-md-4 col-sm-4 col-xs-12 CarBrowserCarCard_wrapper'>
                                            <a href='#' className='CarBrowserCarCard'>
                                                <div className='CarBrowserCarCard_cardata'>
                                                    <div className='CarBrowserCarCard_name'>
                                                        <span className='CarBrowserCarCard_make'>Mercedes-Benz</span>
                                                        <span>Viano</span>
                                                    </div>
                                                    <div className='CarBrowserCarCard_name'>
                                                        <span className='CarBrowserCarCard_year'>2011</span>
                                                        <span className='CarBrowserCarCard_mileage'>124 000</span>
                                                    </div>
                                                </div>
                                                <div className='CarBrowserCarCard_photo-container'>
                                                    <div className='CarBrowserCarCard_photo-wrapper'>
                                                        <img src='http://http.carlando.ru/files/297' className='CarBrowserCarCard_photo' />
                                                    </div>

                                                    <div className='CarBrowserCarCard_state-container'>
                                                        <div className='CarBrowserCarCard_state'>Гарантия</div>
                                                    </div>
                                                </div>
                                                <div className='CarBrowserCarCard_price-container'>
                                                    <div className='CarBrowserCarCard_installment'>67 000</div>
                                                    <div className='CarBrowserCarCard_price'>3 567 000</div>
                                                </div>
                                            </a>
                                        </div>

                                        <div className='col-lg-4 col-md-4 col-sm-4 col-xs-12 CarBrowserCarCard_wrapper'>
                                            <a href='#' className='CarBrowserCarCard'>
                                                <div className='CarBrowserCarCard_cardata'>
                                                    <div className='CarBrowserCarCard_name'>
                                                        <span className='CarBrowserCarCard_make'>Mercedes-Benz</span>
                                                        <span>Viano</span>
                                                    </div>
                                                    <div className='CarBrowserCarCard_name'>
                                                        <span className='CarBrowserCarCard_year'>2011</span>
                                                        <span className='CarBrowserCarCard_mileage'>124 000</span>
                                                    </div>
                                                </div>
                                                <div className='CarBrowserCarCard_photo-container'>
                                                    <div className='CarBrowserCarCard_photo-wrapper'>
                                                        <img src='http://http.carlando.ru/files/234' className='CarBrowserCarCard_photo' />
                                                    </div>

                                                </div>
                                                <div className='CarBrowserCarCard_price-container'>
                                                    <div className='CarBrowserCarCard_installment'>67 000</div>
                                                    <div className='CarBrowserCarCard_price'>567 000</div>
                                                </div>
                                            </a>
                                        </div>


                                    </div>
                                </div>
                                <div className='col-sm-2 hidden-xs'></div>


                            </div>

                            <div className='row CarBrowser_All'>
                                <div className='col-sm-2 hidden-xs'></div>
                                <div className='col-sm-8 col-xs-12 CarBrowser_All_button-container'>
                                    <button className='btn Carlando_Button Carlando_Button_Red' type='submit'>Все автомобили</button>
                                    <button className='btn Carlando_Button Carlando_Button_Blue' type='submit'>Поиск автомобиля с пробегом</button>
                                </div>
                                <div className='col-sm-2 hidden-xs'></div>
                            </div>

                        </div>

                    </div>

                </div>
                )
                }}
