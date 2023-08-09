import collection1 from './img/collection1.png';
import collection2 from './img/collection2.png';
import collection3 from './img/collection3.png';
import collection4 from './img/collection4.png';
import collection5 from './img/collection5.png';

import { Link } from 'react-router-dom';
import BestRightCap from '../BestRightCap/BestRightCap';
import { useTranslation } from "react-i18next";


const BestRights = [
    {
        name: 'T-shirt',
        type: 'Clothes',
        img: collection3,
        active: false,
        link: '/productType/SHIRT-tshirt',
    },
    {
        name: 'Polo',
        type: 'Clothes',
        img: collection4,
        active: true,
        link: '/productType/SHIRT-polo',
    },
    {
        name: 'Coat',
        type: 'Clothes',
        img: collection5,
        active: false,
        link: '/productType/SHIRT-coat',
    },
];

export default function BestCollection() {
    const { t } = useTranslation();
    return (
        <div className="best-collection-area section-padding2">
            <div className="container">
                <div className="row d-flex justify-content-between align-items-end">
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="best-left-cap">
                            <h2>{t('collection.content1')}</h2>
                            <p>{t('collection.content2')}</p>
                            <Link to="/productType/SHIRT-tshirt" className="btn shop1-btn">
                                {t('collection.content3')}
                            </Link>
                        </div>
                        <div className="best-left-img mb-30 d-none d-sm-block">
                            <img src={collection1} alt="" />
                        </div>
                    </div>

                    <div className="col-xl-2 col-lg-2 d-none d-lg-block">
                        <div className="best-mid-img mb-30 ">
                            <img src={collection2} alt="" />
                        </div>
                    </div>

                    <div className="col-xl-4 col-lg-6 col-md-6">
                        {BestRights.map((item, index) => {
                            return (
                                <BestRightCap
                                    key={index}
                                    index={index}
                                    link={item.link}
                                    name={item.name}
                                    type={item.type}
                                    img={item.img}
                                    active={item.active}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
