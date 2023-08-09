import ButtonMore from '../../Components/ButtonMore/ButtonMore';
import ProductItem from '../../Components/ProductItem/ProductItem';
import Fillter from '../../Components/Fillter/Fillter';
import './Shirt.css';
import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BuyNow from '../../Components/BuyNow/BuyNow';
import { useTranslation } from "react-i18next";

function MenShirt() {
    const { productType } = useParams();
    const [PRODUCTS, setPRODUCTS] = useState([]);
    const [nameApp, setNameApp] = useState('');
    const [visible, setVisible] = useState(6);
    const [loadMore, setLoadMore] = useState(true);
    const [open, setOpen] = useState(false);
    const [product, setProduct] = useState({});
    
    useEffect(() => {
            // 👇️ scroll to top on page load
            window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
          }, []);

    const [priceFilter, setPriceFilter] = useState(0);
    const [vodeFilter, setVoteFilter] = useState(0);
    const [brandFilter, setBrandFilter] = useState('');

    const handleChoicePrice = (price) => {
        setPriceFilter(price);
    };
      
    const handleChoiceVote = (vote) => {
        setVoteFilter(vote);
    };

    const handleClear = (e) => {
        e.preventDefault();
        setPriceFilter(0);
        setVoteFilter(0);
        setBrandFilter('');
        document.getElementById('form-reset').reset();
    }
    const handleBrand = (brand) => {
        setBrandFilter(brand);
    };
    const setVisibleProduct = () => {
        console.log(visible);
        setVisible(visible + 6);
        if (visible + 6 >= PRODUCTS.length) {
            setLoadMore(false);
        }
    };
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setNameApp(productType); 
        document.title = `Product | ${productType}`;
        setLoading(true);
        axios.get('http://localhost:8000/v1/product?Category=' + productType)
            .then(res => {
                setPRODUCTS(res.data);
                if (res.data.length <= 6) {
                    setLoadMore(false);
                }else{
                    setLoadMore(true);
                }
                setLoading(false);
                setVisible(6);
            })
            .catch(err => console.log(err));
    }, [productType]);

    return (
        <div className="shirt_container">
            <div className="shirt_header">
                <h3 style={{ color: 'black', paddingTop: 50 }}>{ nameApp }</h3>
            </div>
            <div className="shoes_content">
            <Fillter handleChoicePrice={handleChoicePrice} handleChoiceVote={handleChoiceVote} handleClear={handleClear} handleBrand={handleBrand} />                
                <div className="shirt_inner">
                    { loading ? <div className="loading">Loading...</div> : 
                    /*Filter here */
                    PRODUCTS.filter((item) => {
                                    if (priceFilter === 0) {
                                        return item;
                                    } else {
                                        if (priceFilter === 30) {
                                            if (item.price <= priceFilter) {
                                                return item;
                                            }
                                        }else if (priceFilter === 100) {
                                            if (item.price <= priceFilter && item.price >= 30) {
                                                return item;
                                            }
                                        } else if (priceFilter === 200) {
                                            if (item.price <= priceFilter && item.price >= 100) {
                                                return item;
                                            }
                                        } else if (priceFilter === 1000) {
                                            if (item.price >= 200) {
                                                return item;
                                            }
                                        }
                                    }
                                })
                                .filter((item) => {
                                    if (vodeFilter === 0) {
                                        return item;
                                    } else if (Math.round(item.ratting) === vodeFilter) {
                                        return item;
                                    }
                                }).filter((item) => {
                                    if (brandFilter !== '') {
                                        return item.category.includes(`BRAND-${brandFilter.toLowerCase()}`);
                                    }
                                    return true;
                                }).slice(0, visible).map((item, index) => { 
                            return <ProductItem 
                                data={item} 
                                key={index} 
                                setOpen={setOpen}
                                setProduct={setProduct}
                            />;
                        })
                        
                    }
                    
                    </div>
                </div>
            <div className="button-show-more">
                {
                    loadMore ? <ButtonMore onClick={ setVisibleProduct } /> : ''
                }
            </div>
            <BuyNow 
                open={open}
                setOpen={setOpen}
                product={product}
            />
        </div>
    );
}

export default MenShirt;


