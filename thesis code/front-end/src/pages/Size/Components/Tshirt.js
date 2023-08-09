import React, {useState} from 'react';
import '../Size.css';
import { useTranslation } from "react-i18next";
import img3 from '../img/tshirt.png'

function Tshirt() {
    const {t} = useTranslation()
    const [sizes, setSizes] = useState([
        { symbol: 'S', cm: 73, title: '1m55 - 1m59', weight:'48kg - 54kg' },
        { symbol: 'M', cm: 74, title: '1m60 - 1m65' , weight:'55kg - 61kg'},
        { symbol: 'L', cm: 75, title: '1m66 - 1m72' , weight:'62kg - 68kg'},
        { symbol: 'XL', cm: 76, title: '1m72 - 1m77', weight:'69kg - 75kg' },
        { symbol: '2XL', cm: 77, title: '1m77 - 1m84', weight:'76kg - 84kg' },
        { symbol: '3XL', cm: 77, title: '1m85 - 1m92', weight:'85kg - 92kg' }

    ]);
    const [measurements, setMeasurements] = useState([
        { label: t('size.content7'), sizes: [65, 67, 69, 71, 73, 75] },
        { label: t('size.content5'), sizes: [48, 50, 52, 54, 56, 58] },
        { label: t('size.content6'), sizes: [59, 60, 61, 62, 63, 64] },
        { label: t('size.content8'), sizes: [41.5, 43, 44.5, 46, 47.5, 49] }
    ]);

    return (
        <div className="size-item ">
            <div className="size-table">
                <table className="size-tablechart">
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
            

            <div className="size-item ">
                <div className="size-image">
                    <div className="size-imageitle">
                        {t('header.tshirt')}
                    </div>
                    <img src={img3}/>
                </div>
            </div>

        </div>
    )
}
export default Tshirt;