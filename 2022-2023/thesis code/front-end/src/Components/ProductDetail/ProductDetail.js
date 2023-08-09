import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { addToCart } from '../../redux/cartSlice';
import ProductItem from '../ProductItem/ProductItem';
import './ProductDetail.css';
import axios from 'axios';
import { useTranslation } from "react-i18next";
import BuyNow from '../BuyNow/BuyNow';

function ProductDetail() {
    const { t } = useTranslation();
    const location = useLocation();
    
    const productId = location.pathname.replace('/product/', '');
    const [product, setProduct] = useState({});
    const [rating, setRating] = useState(0);
    const [open, setOpen] = useState(false);
    const [PRODUCTS, setPRODUCTS] = useState([]);
    useEffect (() => {
        axios.get('http://localhost:8000/v1/product/' + productId)
        .then((res) => {
            setProduct(res.data);
            setRating(res.data.ratting.toFixed());
        })
        .catch((err) => {
            console.log(err);
        })
    }, [productId]);

    useEffect(() => {
        axios.get('http://localhost:8000/v1/product')
            .then(res => {
                setPRODUCTS(res.data);
            })
            .catch(err => console.log(err));
    }, [product]);

    const colors = [ 'white', 'black', 'red', 'yellow'];
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);
    const [choseColor, setChoseColor] = useState('white');

    const handleColor = (color) => {
        if (choseColor !== color) {
            setChoseColor(color);
        }
    };

    const handleAdd = () => {
        if (quantity < 10) {
            setQuantity((prev) => prev + 1);
        }
    };
    const handleSub = () => {
        if (quantity > 1) {
            setQuantity((prev) => prev - 1);
        }
    };

    const showRatting = () => {
        let result = [];
        for (let i = 1; i <= rating; i++) {
            result.push(<FontAwesomeIcon icon={faStar} style={{ color: 'orange' }} />);
        }
        for (let j = 1; j <= 5 - rating; j++) {
            result.push(<FontAwesomeIcon icon={faStar} />);
        }
        return result;
    };

    return (
        <div className="detail_container">
            <div className="detail header">
                <div>product/ {productId}</div>
            </div>
            <div className="detail_inner">
                <div className="detail_left">
                    <img src={product.image} className="image_product" alt={product.nameProduct} />
                </div>
                <div className="detal_right">
                    <h1 className="name_product">{product.nameProduct}</h1>
                    <div className="detal_ratting">
                        {showRatting()}({product.countOfRatting})
                    </div>
                    <div className="price">{product.price}$</div>
                    <div className="chose-color">
                        <div className="color-header">{t('detail.color')}</div>
                        <div className="color-list">
                            {colors &&
                                colors.map((color, index) => (
                                    <span
                                        key={index}
                                        style={{ backgroundColor: color }}
                                        className={color === choseColor ? 'color-item choses-color' : 'color-item'}
                                        onClick={() => handleColor(color)}
                                    ></span>
                                ))}
                        </div>
                    </div>
                    <div className="add-to-cart">
                        <div className="quantity">
                            <div onClick={handleSub} className="sub-product-btn">
                                -
                            </div>
                            <span>{quantity}</span>
                            <div onClick={handleAdd} className="add-product-btn">
                                +
                            </div>
                        </div>
                        <div
                            className="action"
                            onClick={() =>
                                dispatch(
                                    addToCart({
                                        id: productId,
                                        nameProduct: product.nameProduct,
                                        price: product.price,
                                        image: product.image,
                                        quantity: quantity,
                                    }),
                                )
                            }
                        >
                            {t('detail.addtocart')}
                        </div>
                    </div>
                    <div className="feature">
                        <div className="feature_header">{t('detail.description')}</div>
                        <div className="feature_content">
                            {product.features &&
                                product.features.map((feature, index) => (
                                    <div key={index} className="feature_item">
                                        - {t(feature)}
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="detail_header">{t('detail.other')}</div>

            <div className="shoes_inner">
                {PRODUCTS
                    .slice(0, 4)
                    .map((item, index) => (
                        <ProductItem data={item} key={index} setOpen={setOpen} setProduct={setProduct} />
                        
                    ))
                    }
                <BuyNow 
                open={open}
                setOpen={setOpen}
                product={product}
                />

            </div>
            
        </div>
    );
}

export default ProductDetail;
