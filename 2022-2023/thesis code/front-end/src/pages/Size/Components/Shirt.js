import React, { useState } from 'react';
import '../Size.css';
import { useTranslation } from "react-i18next";
import img5 from '../img/shirt.png';
const Shirt = () => {
    const { t } = useTranslation();
    const [sizes, setSizes] = useState([
        { symbol: 'S', cm: 73, title: '1m55 - 1m59', weight:'48kg - 54kg' },
        { symbol: 'M', cm: 74, title: '1m60 - 1m65' , weight:'55kg - 61kg'},
        { symbol: 'L', cm: 75, title: '1m66 - 1m72' , weight:'62kg - 68kg'},
        { symbol: 'XL', cm: 76, title: '1m72 - 1m77', weight:'69kg - 75kg' },
        { symbol: '2XL', cm: 77, title: '1m77 - 1m83', weight:'76kg - 82kg' }
    ]);
    const [measurements, setMeasurements] = useState([
        { label: t('size.content7'), sizes: [73, 74, 75, 76, 77] },
        { label: t('size.content5'), sizes: [49, 51, 53, 55, 57] },
        { label: t('size.content6'), sizes: [58, 59, 60, 61, 62] },
        { label: t('size.content8'), sizes: [44, 45, 46, 47, 48] }
    ]);

    return (
        <div className="size-item ">
            <div className="size-table">
                <table className="size-tablechart one-whole">
                    <thead>
                        <tr>
                            <td><span>SYMBOL/<br/>PARAMETER(cm)</span></td>
                            {sizes.map((size, index) => (
                                <td key={index}>
                                    <span>{size.symbol}</span>
                                    <span className="table-title">
                                        {size.title}<br/>
                                        {size.weight}
                                    </span>
                                </td>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {measurements.map((measurement, index) => (
                            <tr key={index}>
                                <td><span className="table-textbold">{measurement.label}</span></td>
                                {measurement.sizes.map((size, index) => (
                                    <td key={index}>{size}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="size-image">
                <div className="size-imageitle">
                    {t('header.shirt')}
                </div>
                <img src={img5}/>
            </div>
        </div>
    );
};

export default Shirt;
