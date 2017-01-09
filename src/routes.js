
import React from 'react'
import { Route, IndexRedirect } from 'react-router'
import App from './containers/App'
import NotFound from './components/notFound'
import CarCatalogPage from './components/CarCatalogPage/CarCatalogPage'
import CarPage from './components/carPage/carPage'


export const routes = (
    <div>
        <Route path='/' component={App}>
            <IndexRedirect to='cars' />
            <Route path='cars' component={CarCatalogPage} />
            <Route path='car/:brand/:model/:carId' component={CarPage} />
        </Route>
        <Route path='*' component={NotFound} />
    </div>
)