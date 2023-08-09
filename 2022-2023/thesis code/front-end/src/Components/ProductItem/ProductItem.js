import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useNavigate } from 'react-router-dom';
import './ProductItem.css';
import { useTranslation } from "react-i18next";

function ProductItem({ data, type, setOpen, setProduct }) {
    const { t } = useTranslation();

    const navigate = useNavigate();
    return (
        <div className="product_container">
            <Link
                className="content_up"
            >
                <Link to={data.to}><img className="img_1" src={data.image} alt="" /></Link>
                <Link to={data.to}><img className="img_2" src={data.imageHover} alt="" /></Link>
                <div className="buy_btn">
                    <div 
                        style={{ color: 'black' }} 
                        className="buy_btn_inner"
                        onClick={(e) => { 
                            setOpen(true);
                            setProduct(data);
                         }}
                    >
                        {t('item.buy')}
                    </div>
                </div>
                <div className="ratting" style={{ fontSize: 14, color: 'black' }}>
                    {data.ratting}
                    <span>
                        <FontAwesomeIcon icon={faStar} />
                    </span>
                    <span style={{ fontWeight: 600, fontSize: 14 }}>({data.countOfRatting})</span>
                </div>
            </Link>
            <div className="content_down">
                <Link className="name_product" to={data.to}>
                    <div style={{ 
                        fontWeight: 600, 
                        fontSize: 14,
                        // if theme is dark, color is white
                     }}>{data.nameProduct}</div>
                </Link>
                <div className="price">{data.price}$</div>
                
            </div>
            
        </div>
    );
}

export default ProductItem;
