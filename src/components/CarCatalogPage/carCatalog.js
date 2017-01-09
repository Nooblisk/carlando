
import React, { Component } from 'react';
import { Link } from 'react-router';

function findPhotoId(photoArray, photoType){
    for(var i=0; i<photoArray.length; i++){
    if (photoArray[i].type === photoType) return photoArray[i].file;
}
}

export default class CarCatalog extends Component {

    render() {
        const {cars} = this.props;
        var carList = cars.map(function (carItem) {
            var car = carItem.car;
            var photoId = findPhotoId(car.carPhotos, '3_4_front');

                return (
                <CarCard
                    key={car.id}
                    app_id={car.app_id}
                    brand = {car.brand}
                    model = {car.model}
                    year = {car.year}
                    mileage = {car.mileage}
                    photoId = {photoId}
                    warranty = {car.warranty}
                    booked = {car.booked}
                    installment = {car.Price.installment}
                    price = {car.Price.price}
                    />
                )

        });
        return (
            <div className='row CarBrowser_list'>
                {carList}
                <NotCarCard />
            </div>)
    }
}

class CarCard extends Component {

    render() {
        const {app_id, brand, model, year, mileage, photoId, warranty, booked, installment, price} = this.props;

        const photoSrc = 'http://http.carlando.ru/files/'+photoId;
        const carLink = 'car/'+brand+'/'+model+'/'+app_id;

        return <div className='col-lg-3 col-md-4 col-sm-6 col-xs-12 CarBrowserCarCard_wrapper'>
            <Link to={carLink} className='CarBrowserCarCard'>
                <div className='CarBrowserCarCard_cardata'>
                    <div className='CarBrowserCarCard_name'>
                        <span className='CarBrowserCarCard_make'>{brand}</span>
                        <span>{model}</span>
                    </div>
                    <div className='CarBrowserCarCard_name'>
                        <span className='CarBrowserCarCard_year'>{year}</span>
                        <span className='CarBrowserCarCard_mileage'>{mileage}</span>
                    </div>
                </div>
                <div className='CarBrowserCarCard_photo-container'>
                    <div className='CarBrowserCarCard_photo-wrapper'>
                        <img src={photoSrc} className='CarBrowserCarCard_photo' />
                    </div>

                    <div className='CarBrowserCarCard_state-container'>
                        {warranty && <div className='CarBrowserCarCard_state'>Гарантия</div>}
                        {booked && <div className='CarBrowserCarCard_state CarBrowserCarCard_state_booked CarBrowserCarCard_state_blue'>Забронирован</div>}
                    </div>
                </div>
                <div className='CarBrowserCarCard_price-container'>
                    <div className='CarBrowserCarCard_installment'>{installment}</div>
                    <div className='CarBrowserCarCard_price'>{price}</div>
                </div>
            </Link>
        </div>
    }
}

class NotCarCard extends Component {

    render() {
        return <div className='col-lg-3 col-md-4 col-sm-6 col-xs-12 CarBrowserCarCard_wrapper CarBrowserWL_wrapper'>
                    <a href='#' className='CarBrowserCarCard'>
                         <div className='CarBrowserCarCard_cardata CarBrowserWL_cardata'>
                         <div className='CarBrowserCarCard_name'>
                         <span className='CarBrowserCarCard_make'></span>
                         </div>
                         <div className='CarBrowserCarCard_name'>
                        <span className='CarBrowserCarCard_year CarBrowserWL_year'></span>
                         </div>
                         </div>
                            <div className='CarBrowserCarCard_photo-container'>
                             <div className='CarBrowserCarCard_photo-wrapper'></div>
                             </div>
                    </a>
                    <div className='CarBrowserWL_data'>
                        <div className='CarBrowserWL_data_intro'>Позвольте найти для вас</div>
                        <div className='CarBrowserWL_data_button'><input className='btn Carlando_Button Carlando_Button_Red' type='button' value='автомобиль с пробегом' /></div>
                        <div className='CarBrowserWL_data_benefits'>
                                 <h2>Что произойдет дальше?</h2>
                                    <ol>
                                        <li>Проверим юридическую чистоту</li>
                                        <li>Проверим техническое состояние</li>
                                        <li>Предложим справедливую цену</li>
                                        <li>Оформим все документы</li>
                                        <li>Предоставим вам гарантию</li>
                                    </ol>
                        </div>
                    </div>
                </div>
    }
}


