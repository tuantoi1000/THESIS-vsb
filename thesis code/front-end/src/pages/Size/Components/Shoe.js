import React, {useState} from 'react';
import '../Size.css';
import { useTranslation } from "react-i18next";
import shoes from '../img/shoe.png'

function Shoe() {
    const {t} = useTranslation()
    const [sizes, setSizes] = useState([
        { Inch: '9.25', Cm:'23.5' },
        { Inch: '9.5' , Cm:'24.1'},
        { Inch: '9.625' , Cm:'24.4'},
        { Inch: '9.75', Cm:'24.8' },
        { Inch: '9.9375', Cm:'25.4' },
        { Inch: '10.125', Cm:'25.7' },
        { Inch: '10.25' , Cm:'26'},
        { Inch: '10.4375' , Cm:'26.7'},
        { Inch: '10.5625', Cm:'27' },
        { Inch: '10.75', Cm:'27.3' },
        { Inch: '10.9375', Cm:'27.9' },
    ]);
    const [measurements, setMeasurements] = useState([
        { label: 'EU' , sizes: [36.5, 37.5, 38, 38.5, 39, 40, 40.5, 41, 42, 42.5, 43] },
        { label: 'US' , sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11] },
        { label: 'UK', sizes: [5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5] },
    ]);

    return (
        <div className="size-chart__table">
            <div className="size-item ">
                <div className="size-chart__table">
                    <div className="size-item ">
                        <div className="size-image">
                            <div className="size-imageitle">
                                {t('header.shoe')}
                            </div>
                            <img src={shoes}/>
                        </div>
                    </div>
                </div>
                <div className="size-table">
                    <table className="size-tablechart one-whole">
                    <thead>
                        <tr>
                            <td><span>Inch to Cm/<br/>Type Size</span></td>
                            {sizes.map((size, index) => (
                                <td key={index}>
                                    <span className="table-title">
                                        {size.Inch}<br/>
                                        {size.Cm}
                                    </span>
                                </td>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {measurements.map((measurement, index) => (
                            <tr key={index}>
                                <td><span className="table-textbold">{measurement.label} {t('size.content10')}  </span></td>
                                {measurement.sizes.map((size, index) => (
                                    <td key={index}>{size}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default Shoe;