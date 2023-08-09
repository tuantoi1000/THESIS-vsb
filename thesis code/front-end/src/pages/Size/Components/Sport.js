import React, {useState} from 'react';
import '../Size.css';
import img4 from '../img/sport.png'

import { useTranslation } from "react-i18next";

function Sport() {
    const {t} = useTranslation()
    const [sizes, setSizes] = useState([
        { symbol: 'S', cm: 73, title: '1m55 - 1m59', weight:'48kg - 54kg' },
        { symbol: 'M', cm: 74, title: '1m60 - 1m65' , weight:'55kg - 61kg'},
        { symbol: 'L', cm: 75, title: '1m66 - 1m72' , weight:'62kg - 68kg'},
        { symbol: 'XL', cm: 76, title: '1m72 - 1m77', weight:'69kg - 75kg' },
        { symbol: '2XL', cm: 77, title: '1m77 - 1m83', weight:'76kg - 82kg' },
        { symbol: '3XL', cm: 77, title: '1m84 - 1m92', weight:'83kg - 90kg' }

    ]);
    const [measurements, setMeasurements] = useState([
        { label: t('size.content7'), sizes: [65, 67, 69, 71, 73, 75] },
        { label: t('size.content5'), sizes: [48, 50, 52, 54, 56, 58] },
        { label: t('size.content6'), sizes: [18, 18.5, 19, 19.5, 20, 20.5] },
        { label: t('size.content8'), sizes: [40, 41, 42, 43, 44, 45] }
    ]);
    return (
        <div className="size-item ">
            <div className="size-image">
                <div className="size-imageitle">
                {t('header.sportshirt')}
                </div>
                <img src={img4}/>
            </div>
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
        </div>
    )
}
export default Sport;