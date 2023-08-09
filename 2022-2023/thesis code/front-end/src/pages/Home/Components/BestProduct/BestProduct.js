import { Link } from 'react-router-dom';
import cart from './img/card.png';
import cart_man from './img/card-man.png';
import { useTranslation } from "react-i18next";

export default function BestProduct() {
    const { t } = useTranslation();

    return (
        <div className="best-product-area lf-padding">
            <div className="product-wrapper bg-height" style={{ backgroundImage: `url(${cart})` }}>
                <div className="container position-relative">
                    <div className="row justify-content-between align-items-end">
                        <div className="product-man position-absolute  d-none d-lg-block">
                            <img src={cart_man} alt="" />
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-2 d-none d-lg-block">
                            <div className="vertical-text">
                                <span>{t('bestproduct.content1')}</span>
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-8">
                            <div className="best-product-caption">
                                <h2 className='title-color-dark'>
                                    {t('bestproduct.content2')}
                                    <br /> {t('bestproduct.content3')}
                                </h2>
                                <p className='title-color-dark'>{t('bestproduct.content4')}</p>
                                <Link to="/productType/SHIRT-tshirt" className="black-btn">
                                    {t('bestproduct.content5')}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
