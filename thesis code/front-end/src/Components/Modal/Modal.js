import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { payment } from '../../redux/cartSlice';
import './Modal.css';
import { useTranslation } from "react-i18next";

function Modal({ onOpen }) {
    const { t } = useTranslation();

    const cities = [
        { name: 'Prague', districts: ['Prague 1', 'Prague 2', 'Prague 3', 'Prague 4', 'Prague 5', 'Prague 6', 'Prague 7', 'Prague 8', 'Prague 9', 'Prague 10'] },
        { name: 'Ostrava', districts: ['Hošťálkovice', 'Hrabová', 'Krásné Pole', 'Lhotka', 'Mariánské Hory a Hulváky', 'Martinov','Michálkovice', 'Moravská Ostrava a Přívoz','Nová Bělá','Nová Ves','Poruba','Plesná','Pustkovec','Stará Bělá','Svinov','Třebovice','Vítkovice','Radvanice a Bartovice','Petřkovice','Ostrava-Jih','Polanka nad Odrou'] },
        { name: 'Brno', districts: ['Bohunice, Bosonohy', 'Bystrc', 'Centre', 'Černovice', 'Chrlice', 'Ivanovice', 'Jehnice', 'Jundrov', 'Kníničky', 'Kohoutovice', 'Komín', 'Královo Pole', 'Lesná', 'Líšeň', 'Maloměřice and Obřany', 'Medlánky', 'North', 'Nový Lískovec', 'Ořešín', 'Řečkovice and Mokrá Hora', 'Slatina', 'South', 'Starý Lískovec', 'Tuřany', 'Útěchov', 'Vinohrady', 'Žabovřesky', 'Žebětín', 'Židenice'] },
        { name: 'Karlovy Vary', districts: ['Karlovy Vary','Bohatice','Čankov','Cihelny','Doubí','Drahovice', 'Dvory', 'Hůrky', 'Olšová Vrata', 'Počerny', 'Rosnice', 'Rybáře', 'Sedlec', 'Stará Role', 'Tašovice']}
    ];
    const [selectedCity, setSelectedCity] = useState(cities[0]);
    const [selectedDistrict, setSelectedDistrict] = useState(selectedCity.districts[0]);

    const handleCityChange = (event) => {
        const selectedCity = cities.find(city => city.name === event.target.value);
        setSelectedCity(selectedCity);
        setSelectedDistrict(selectedCity.districts[0]);
    };

    const handleDistrictChange = (event) => {
        setSelectedDistrict(event.target.value);
    };

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handlePay = (e) => {
        e.preventDefault();
        setTimeout(() => {
            dispatch(payment());
            navigate('/payment');
        }, 500);
    };

    return (
        <div className="dark-bg" onClick={() => onOpen(false)}>
            <div
                className="modal_container"
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <div className="modal_header">
                    <div className="modal_title">{t('modal.address')}</div>
                </div>
                <form className="modal_content" onSubmit={handlePay}>
                    <input placeholder={t("modal.fullname")} className="content_2" required/>
                    <div className="choose">
                        <div className="content_1">
                        <select className="select_1" value={selectedCity.name} onChange={handleCityChange}>
                            {cities.map(city => (
                                <option key={city.name} value={city.name}>{city.name}</option>
                            ))}
                        </select>
                        </div>
                        <select className="select_1" value={selectedDistrict} onChange={handleDistrictChange}>
                                {selectedCity.districts.map(district => (
                                    <option key={district} value={district}>{district}</option>
                                ))}
                            </select>


                    </div>
                    <input placeholder={t("modal.fulladdress")} className="content_4" required/>
                    <input placeholder={t("modal.note")} className="content_2" required/>
                    <input placeholder={t("modal.pay")} className="content_3" required/>
                    <input placeholder={t("modal.code")} className="content_3" required/>

                    <button className="btn_1 checkout_btn_1 pay">
                        {t('modal.checkout')}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Modal;

