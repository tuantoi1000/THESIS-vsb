import React, { useState } from 'react';
import '../Size.css';
import { useTranslation } from "react-i18next";
import img2 from '../img/coat.png';
function Coat() {
    const {t} = useTranslation()
    const [sizes, setSizes] = useState([
        { symbol: 'XS', cm: 72, title: '1m45 - 1m54', weight:'40kg - 47kg' },
        { symbol: 'S', cm: 73, title: '1m55 - 1m59', weight:'48kg - 54kg' },
        { symbol: 'M', cm: 74, title: '1m60 - 1m65' , weight:'55kg - 61kg'},
        { symbol: 'L', cm: 75, title: '1m66 - 1m72' , weight:'62kg - 68kg'},
        { symbol: 'XL', cm: 76, title: '1m72 - 1m77', weight:'69kg - 75kg' },
        { symbol: '2XL', cm: 77, title: '1m77 - 1m83', weight:'76kg - 82kg' },
        { symbol: '3XL', cm: 78, title: '1m84 - 1m90', weight:'83kg - 90kg' }
        
    ]);
    const [measurements, setMeasurements] = useState([
        { label: t('size.content4'), sizes: [64.5, 66.5, 68.5, 70.5, 72.5, 75.5, 77.5] },
        { label: t('size.content5'), sizes: [50, 52, 54, 56, 58, 60, 62] },
        { label: t('size.content6'), sizes: [68.5, 70.5, 72.5, 74.5, 76.5, 78.5, 80.5] }
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
                    {t('header.coat')}
                </div>
                <img src={img2}/>
            </div>
        </div>
    )
}
export default Coat;
