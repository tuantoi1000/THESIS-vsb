import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
import CartProduct from '../CartProduct/CartProduct';
import { useTranslation } from "react-i18next";

export default function CartTable() {
    const { t } = useTranslation();

    const cart = useSelector((state) => state.cart);
    const [checkAll, setCheckAll] = useState(true);
    const [valueChecked, setValueChecked] = useState(cart.length);
    
    const getTotal = () => {
        let totalQuantity = 0;
        let totalPrice = 0;
        cart.forEach((item) => {
            totalQuantity += item.quantity;
            totalPrice += item.price * item.quantity;
        });
        return { totalPrice, totalQuantity };
    };

    useEffect (()=>{
        if (valueChecked === cart.length){
            setCheckAll(true)
        }else{
            setCheckAll(false)
        }
    }, [valueChecked])

    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">
                        <input 
                            type="checkbox" 
                            checked = {checkAll}
                            onClick = {
                                () =>{
                                    checkAll ? setCheckAll(false) : setCheckAll(true)
                                }
                            }
                        />
                    </th>
                    <th scope="col">{t('carttable.product')}</th>
                    <th scope="col">{t('carttable.price')}</th>
                    <th scope="col">{t('carttable.quantity')}</th>
                    <th scope="col">{t('carttable.total')}</th>
                    <th scope="col" style={{ textAlign: 'center' }}>
                        {t('carttable.action')}
                    </th>
                </tr>
            </thead>
            <tbody>
                {cart?.map((cart, index) => {
                    return <CartProduct key={cart.id} props={cart} setValueChecked={setValueChecked} checkAll={checkAll} />;
                })}
                <tr className="bottom_button"></tr>
                <tr className="subtotal">
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                        <h5>{t('carttable.subtotal')}</h5>
                    </td>
                    <td>
                        <h5>{getTotal().totalPrice}$</h5>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}
