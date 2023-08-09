import latest_offer from './img/latest-offer.png';
import { useTranslation } from "react-i18next";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LatestOffers() {
    const { t } = useTranslation();
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === '') {
            alert(t('contact.emailbox'));
        } else {
            // check email validation
            const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!emailRegex.test(email)) {
                alert(t('contact.messagebox1'));
                return;
            }
            alert(t('latestoffer.thankyou'));
            // navigate to home page
            navigate('/');
        }
    };
    return (
        <div className="latest-wrapper lf-padding">
            <div
                className="latest-area latest-height d-flex align-items-center"
                data-background={`url(${latest_offer})`}
                style={{ backgroundImage: `url(${latest_offer})` }}
            >
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-xl-5 col-lg-5 col-md-6 offset-xl-1 offset-lg-1">
                            <div className="latest-caption">
                                <h2 className='title-color-dark'>
                                    {t('latest.content1')}
                                    <br />
                                    {t('latest.content2')}
                                </h2>
                                <p className='title-color-dark'>{t('latest.content3')}</p>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-5 col-md-6 ">
                            <div className="latest-subscribe">
                                <form                                    
                                    class="subscribe_form" 
                                    action="#" 
                                    method="post" 
                                    id="aboutForm"
                                    noValidate="novalidate" 
                                    onSubmit={handleSubmit}>
                                    <input 
                                        className='input-color-dark'                                         
                                        type="email" 
                                        name="email"
                                        value={email} 
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder={t('latest.content4')} />
                                    <button type="submit">{t('latest.content5')}</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
