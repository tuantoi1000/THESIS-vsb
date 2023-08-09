import about_us from './img/about_us.jpg';
import feature_icon_1 from './img/feature_icon_1.svg';
import feature_icon_2 from './img/feature_icon_2.svg';
import feature_icon_3 from './img/feature_icon_3.svg';
import feature_icon_4 from './img/feature_icon_4.svg';
import client from './img/client2.jpeg';
import client1 from './img/client1.jpeg';
import { useTranslation } from "react-i18next";
import { useEffect, useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useNavigate } from 'react-router-dom';

function About() {
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
            alert(t('about.messagebox'));
            // navigate to home page
            navigate('/');
        }
    };

    document.title = 'About';
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);
    return (
        <div>
            <div class="slider-area " style={{ textAlign: 'center' }}>
                <h1 style={{ color: 'black', paddingTop: 50 }}>{t('about.title')}</h1>
            </div>

            <section class="about_us padding_top" style={{ paddingTop: 50 }}>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="about_us_content">
                                <h5 style={{ color: 'black' }}>{t('about.content1')}</h5>
                                <h3>
                                    {t('about.content2')}
                                </h3>
                                <div class="about_us_video" style={{ display: 'flex', justifyContent: 'center' }}>
                                    <img src={about_us} alt="#" class="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="feature_part section_padding">
                <div class="container">
                    <div class="row justify-content-between">
                        <div class="col-lg-6">
                            <div class="feature_part_tittle">
                                <h3>{t('about.content3')}</h3>
                            </div>
                        </div>
                        <div class="col-lg-5">
                            <div class="feature_part_content">
                                <p>
                                    {t('about.content4')}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-lg-3 col-sm-6">
                            <div class="single_feature_part">
                                <img src={feature_icon_1} alt="#" />
                                <h4>{t('about.icon1')}</h4>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <div class="single_feature_part">
                                <img src={feature_icon_2} alt="#" />
                                <h4>{t('about.icon2')}</h4>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <div class="single_feature_part">
                                <img src={feature_icon_3} alt="#" />
                                <h4>{t('about.icon3')}</h4>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <div class="single_feature_part">
                                <img src={feature_icon_4} alt="#" />
                                <h4>{t('about.icon4')}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="client_review">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <OwlCarousel
                                className="client_review_slider"
                                items={1}
                                loop
                                dots
                                autoplay
                                autoplayHoverPause
                                autoplayTimeout={2000}
                                nav
                                navText={["<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"]}
                                responsive={{
                                    0: {
                                        nav: false
                                    },
                                    768: {
                                        nav: false
                                    },
                                    991: {
                                        nav: true
                                    }
                                }}
                            >
                                <div className="single_client_review">
                                    <div className="client_img">
                                        <img src={client} alt="#" />
                                    </div>
                                    <p>{t('about.client1')}</p>
                                    <h5>Nguyen Thanh Tuan</h5>
                                </div>
                                <div className="single_client_review">
                                    <div className="client_img">
                                        <img src={client1} alt="#" />
                                    </div>
                                    <p>{t('about.client2')}</p>
                                    <h5>Nguyen Thi Nu</h5>
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </section>

            <section class="subscribe_part section_padding">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="subscribe_part_content">
                                <h2>{t('about.subcribe1')}</h2>
                                <p>
                                    {t('about.subcribe2')}
                                </p>

                                <form 
                                    class="subscribe_form" 
                                    action="#" 
                                    method="post" 
                                    id="aboutForm"
                                    noValidate="novalidate" 
                                    onSubmit={handleSubmit}
                                >
                                    <input 
                                        type="email" 
                                        placeholder={t("about.email")} 
                                        name="email"
                                        value={email} 
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <button  type="submit" className="btn_1" >
                                        {t('about.subcribe3')}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;
