import logo_footer from './logo2_footer.png';
import HotTag from './Components/HotTag';
import { useTranslation } from "react-i18next";


const Quick_Links = [
    {
        name: 'footer.about',
        to: '/about',
    },
    {
        name: 'footer.ecommerce',
        to: '/ecommerce',
    },
    {
        name: 'footer.size',
        to: '/size',
    },
    {
        name: 'footer.contact',
        to: '/contact',
    },

];

const New_Products = [
    {
        name: 'footer.clothes',
        to: '/productType/shirt',
    },
    {
        name: 'footer.shoe',
        to: '/productType/shoes',
    },
    {
        name: 'footer.hat',
        to: '/productType/hat',
    },
    {
        name: 'footer.brand',
        to: '/productType/brand',
    },
];

const Supports = [
    {
        name: 'footer.faq',
        to: '/FAQ',
    },
    {
        name: 'footer.ship',
        to: '/ship',
    },
    {
        name: 'footer.privacy',
        to: '/policy',
    },
    {
        name: 'footer.return',
        to: '/return',
    },
];



export default function Footer() {
    const { t } = useTranslation();
    const descriptions = 'NGU0120 - NGUYEN THANH TUAN';
    return (
        <>
            <footer>
                <div className="footer-area footer-padding">
                    <div className="container">
                        <div className="row d-flex justify-content-between">
                            <div className="col-xl-3 col-lg-3 col-md-5 col-sm-6">
                                <div className="single-footer-caption mb-50">
                                    <div className="single-footer-caption mb-30">
                                        <div className="">
                                            <a href="#">
                                                <img style={{ height: '70px' }} src={logo_footer} alt=""></img>
                                            </a>
                                        </div>
                                        <div className="footer-tittle">
                                            <div className="footer-pera">
                                                <p>{t('footer.topic')}</p>
                                                <p>{descriptions}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-5">
                                <HotTag name={t("footer.quick")} tags={Quick_Links} />
                            </div>

                            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-7">
                                <HotTag name={t("footer.product")} tags={New_Products} />
                            </div>

                            <div className="col-xl-3 col-lg-3 col-md-5 col-sm-7">
                                <HotTag name={t("footer.support")} tags={Supports} />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xl-7 col-lg-7 col-md-7">
                                <div className="footer-copy-right">
                                    <p>Copyright &copy; 2023</p>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-5 col-md-5">
                                <div className="footer-copy-right f-right">
                                    <div className="footer-social">
                                        <a href="https://www.fei.vsb.cz/en/" >
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                        <a href="https://www.fei.vsb.cz/en/">
                                            <i className="fab fa-facebook-f"></i>
                                        </a>
                                        <a href="https://www.fei.vsb.cz/en/">
                                            <i className="fab fa-behance"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
