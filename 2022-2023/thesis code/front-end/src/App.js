import { Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom';

import React, { useState } from 'react';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Cart from './pages/Cart/Cart';
import CallJavaScript from './Components/CallJavaScript/CallJavaScript';
import Register from './pages/Register/Register';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import ProductDetail from './Components/ProductDetail/ProductDetail';
import SearchProduct from './pages/SearchProduct/SearchProduct';
import Error from './pages/Error/Error';
import Success from './pages/Success/Success';
import ProductList from './pages/Products/ProductList';
import Policy from './pages/Policy/Policy';
import FAQ from './pages/FAQ/FAQ';
import Ecommerce from './pages/Ecommerce/Ecommerce'
import Size from './pages/Size/Size';
import Return from './pages/Return/Returns'
import Ship from './pages/Ship/Ship';

function App() {
    return (
        
        <div className="App">
            
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/register" element={<Register />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/product/:productId" element={<ProductDetail />} />
                <Route path="/productType/:productType" element={<ProductList />} />
                <Route path="/product/search/keyword=:searchValue" element={<SearchProduct />} />
                <Route path="/payment" element={<Success />} />
                <Route path="/policy" element={<Policy />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/return" element={<Return />} />
                <Route path="/size" element={<Size />} />
                <Route path="/ecommerce" element={<Ecommerce/>} />
                <Route path="/ship" element={<Ship/>}/>
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
            <CallJavaScript />

        </div>

    );
}


export default App;
