import { Link } from 'react-router-dom';
import CartTable from './components/CartTable/CartTable';
import './Cart.css';
import Modal from '../../Components/Modal/Modal';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useTranslation } from "react-i18next";

export default function Cart() {
    const { t } = useTranslation();

    document.title = 'Cart';
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
    const cart = useSelector((state) => state.cart);
    const user = useSelector((state) => state.user);

    const [openModal, setOpenModal] = useState(false);
    return (
        <>
            <div className="slider-area " style={{ textAlign: 'center' }}>
                <h1 style={{ color: 'black', paddingTop: 50 }}>{t('cart.list')}</h1>
            </div>

            <section className="cart_area section_padding" style={{ paddingTop: 50 }}>
                <div className="container">
                    <div className="cart_inner">
                        <div className="table-responsive">
                            <CartTable />

                            <div className="checkout_btn_inner float-right pos-link">
                                <Link className="btn_1" to="/">
                                    {t('cart.continue')}
                                </Link>
                                    {user ? (
                                        <div
                                            className="btn_1 checkout_btn_1"
                                            style={{ cursor: 'pointer' }}
                                            onClick={() => setOpenModal(true)}
                                        >
                                            {t('cart.process')}
                                        </div>
                                    ): (
                                        <Link className="btn_1 checkout_btn_1" to="/login">
                                            {t('cart.login')}
                                        </Link>
                                    )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {openModal && cart.length > 0 && <Modal onOpen={setOpenModal} />}
        </>
    );
}
