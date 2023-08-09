import { Link } from 'react-router-dom';
import h1_hero from './hero_man.png';
import h2_hero from './summer-clothes.jpg';
import h3_hero from './nike-shoes.png';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useTranslation } from "react-i18next";
import img from './background.png';
export default function Slide() {
    const { t } = useTranslation();

    return (
        <div>
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-interval="2000">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div
                            className="single-slider slider-height"
                            style={{
                                backgroundImage:
                                `url(${img})`,                            
                            }}
                        >
                            <div className="container" style={{ paddingTop: 40 }}>
                                <div
                                    className="row d-flex align-items-center justify-content-between"
                                    style={{ overFlow: 'hidden' }}
                                >
                                    <div
                                        className="col-xl-6 col-lg-6 col-md-6 col-sm-6 d-none d-md-block"
                                        style={{ overFlow: 'hidden' }}
                                    >
                                        <div className="hero__img" data-animation="bounceIn" data-delay=".4s">
                                            <img src={h1_hero} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-xl-5 col-lg-5 col-md-5 col-sm-8">
                                        <div className="hero__caption">
                                            <span data-animation="fadeInRight" data-delay=".4s">
                                                {t('slide.content1')}
                                            </span>
                                            <h1 data-animation="fadeInRight" data-delay=".6s" style={{ fontSize: 80 }}>
                                                {t('slide.content2')} <br /> {t('slide.content3')}
                                            </h1>
                                            <p data-animation="fadeInRight" data-delay=".8s">
                                                {t('slide.content4')}
                                            </p>

                                            <div className="hero__btn" data-animation="fadeInRight" data-delay="1s">
                                                <Link to="/productType/SHIRT-sport" className="btn hero-btn">
                                                    {t('slide.content5')}
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div
                            className="single-slider slider-height"
                            style={{
                                backgroundImage:
                                `url(${img})`,                            
                            }}
                        >
                            <div className="container" style={{ paddingTop: 40 }}>
                                <div
                                    className="row d-flex align-items-center justify-content-between"
                                    style={{ overFlow: 'hidden' }}
                                >
                                    <div
                                        className="col-xl-6 col-lg-6 col-md-6 col-sm-6 d-none d-md-block"
                                        style={{ overFlow: 'hidden' }}
                                    >
                                        <div className="hero__img" data-animation="bounceIn" data-delay=".4s">
                                            <img src={h2_hero} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-xl-5 col-lg-5 col-md-5 col-sm-8">
                                        <div className="hero__caption">
                                            <span data-animation="fadeInRight" data-delay=".4s">
                                                {t('slide.content6')}
                                            </span>
                                            <h1 data-animation="fadeInRight" data-delay=".6s" style={{ fontSize: 80 }}>
                                                {t('slide.content7')} <br/> {t('slide.content8')}
                                            </h1>

                                            <div className="hero__btn" data-animation="fadeInRight" data-delay="1s">
                                                <Link to="/productType/SHIRT-coat" className="btn hero-btn">
                                                    {t('slide.content5')}
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div
                            className="single-slider slider-height"
                            style={{
                                backgroundImage:
                                `url(${img})`,                            
                            }}
                        >
                            <div className="container" style={{ paddingTop: 40 }}>
                                <div
                                    className="row d-flex align-items-center justify-content-between"
                                    style={{ overFlow: 'hidden' }}
                                >
                                    <div
                                        className="col-xl-6 col-lg-6 col-md-6 col-sm-6 d-none d-md-block"
                                        style={{ overFlow: 'hidden' }}
                                    >
                                        <div className="hero__img" data-animation="bounceIn" data-delay=".4s">
                                            <img src={h3_hero} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-xl-5 col-lg-5 col-md-5 col-sm-8">
                                        <div className="hero__caption">
                                            <span data-animation="fadeInRight" data-delay=".4s">
                                                {t('slide.content9')}
                                            </span>
                                            <h1 data-animation="fadeInRight" data-delay=".6s" style={{ fontSize: 80 }}>
                                                {t('slide.content10')} <br /> {t('slide.content3')}
                                            </h1>
                                            <p data-animation="fadeInRight" data-delay=".8s">
                                                {t('slide.content11')}
                                            </p>

                                            <div className="hero__btn" data-animation="fadeInRight" data-delay="1s">
                                                <Link to="/productType/hat" className="btn hero-btn">
                                                    {t('slide.content5')}
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" data-slide="prev">
                <span class="carousel-control-prev-icon"></span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" data-slide="next">
                <span class="carousel-control-next-icon"></span>
            </a>
        </div>
    );
}
