import ProductItem from '../../../../Components/ProductItem/ProductItem';
import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import BuyNow from '../../../../Components/BuyNow/BuyNow';
import './latestProduct.css';

export default function LatestProducts() {
    const [PRODUCTS, setPRODUCTS] = useState([]);
    const [loading, setLoading] = useState(true);
    const [open, setOpen] = useState(false);
    const [product, setProduct] = useState({});
    useEffect(() => {
        axios.get('http://localhost:8000/v1/product')
            .then(res => {
                setPRODUCTS(res.data);
                setLoading(false);
            })
            .catch(err => console.log(err));
    }, []);
        
    return (
        <section className="latest-product-area padding-bottom" style={{ marginTop: 100 }}>
            <div className="container">
                <div className="tab-content" id="nav-tabContent">
                    <div
                        className="tab-pane fade show active"
                        id="nav-home"
                        role="tabpanel"
                        aria-labelledby="nav-home-tab"
                    >
                        <div className="row">
                            {loading ? (
                                <div className="spinner-border text-primary" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                            ) : (
                                    PRODUCTS.slice(0, 6).map((product, index) => (
                                        <ProductItem 
                                            key={index} 
                                            data={product}
                                            setOpen={setOpen}
                                            setProduct={setProduct}
                                        />
                                    ))
                                )}
                        </div>
                    </div>
                </div>
            </div>
            <BuyNow 
                open={open}
                setOpen={setOpen}
                product={product}
            />
        </section>
    );
}
