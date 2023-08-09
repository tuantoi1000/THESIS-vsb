import { faMinus, faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { decrementQuantity, incrementQuantity, removeItem } from '../../../../redux/cartSlice';
import './CartProduct.css';

export default function CartProduct({ props, setValueChecked, checkAll }) {
    const [totalPrice, setTotalPrice] = useState(props.price * props.quantity);
    const [check, setCheck] = useState(true);
    const [quantity, setQuantity] = useState(props.quantity);
    const dispatch = useDispatch();

    useEffect(()=>{
        if (checkAll === true){
            setCheck(true);
        }
    }, [checkAll])

    const changeQuantity = (type) => {
        if (type === 'minus') {
            if (quantity > 1) {
                setTotalPrice(totalPrice - props.price);
                setQuantity(quantity - 1);
                dispatch(decrementQuantity(props.id));
            }
        } else {
            if (quantity < 10) {
                setTotalPrice(totalPrice + props.price);
                setQuantity(quantity + 1);
                dispatch(incrementQuantity(props.id));
            }
        }
    };

    const handleChecked = () => {
        if (check === true){
            setCheck(false);
            setValueChecked(prevState => prevState - 1)
        }else{
            setCheck(true);
            setValueChecked(prevState => prevState + 1);
        }
    }

    return (
        <tr key={props.id} className="tr-body">
            <td>
                <div className="cart-checkbox">
                    <input 
                        type="checkbox" 
                        checked={check}
                        onClick={handleChecked}
                    />
                </div>
            </td>
            <td>
                <div className="media">
                    <div className="d-flex">
                        <img src={props.image} alt="" className="cart-item-img" />
                    </div>
                    <div className="media-body">
                        <span>{props.nameProduct}</span>
                    </div>
                </div>
            </td>
            <td className="cart-price">
                <h5>{props.price}$</h5>
            </td>
            <td style={{ textAlign: 'center' }} className="btn-quantity">
                <div className="count-product-cart">
                    <div
                        onClick={() => {
                            changeQuantity('minus');
                        }}
                        className="sub-btn"
                    >
                        <FontAwesomeIcon icon={faMinus} />
                    </div>
                    <span className="product_quantity-cart">{quantity}</span>
                    <div
                        onClick={() => {
                            changeQuantity('plus');
                        }}
                        className="add-btn"
                    >
                        <FontAwesomeIcon icon={faPlus} />
                    </div>
                </div>
            </td>
            <td className="total-price">
                <h5>{totalPrice}$</h5>
            </td>
            <td className="btn-delete">
                <div style={{ textAlign: 'center', cursor: 'pointer' }} 
                    onClick={() => {
                        dispatch(removeItem(props.id));
                        // remove use state quantity and totalPrice
                        
                    }}>
                    <FontAwesomeIcon icon={faXmark} />
                </div>
            </td>
        </tr>
    );
}
