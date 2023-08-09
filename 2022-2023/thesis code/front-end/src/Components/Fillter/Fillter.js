import "./Fillter.css";
import { useState } from 'react';
import { useTranslation } from "react-i18next";


function Fillter({ handleChoicePrice, handleChoiceVote, handleClear, handleBrand }) {
    const { t } = useTranslation();

    return (
        <form className="shoes_fillter" id='form-reset'>
            <ul>
                <li>
                    <h4>
                        <i className="fas fa-filter"></i> {t('filter.price')}
                    </h4>
                </li>
                <li>
                    <input id="price-1" type="radio" name='price' onClick={
                        () => handleChoicePrice(30)
                    } />
                    <label htmlFor="price-1" >0 - 30</label>
                </li>
                <li>
                    <input id="price-2" type="radio" name='price' onClick={
                        () => handleChoicePrice(100)
                    } />
                    <label htmlFor="price-2" >30-100</label>
                </li>
                <li>
                    <input id="price-3" type="radio" name='price' onClick={
                        () => handleChoicePrice(200)
                    } />
                    <label htmlFor="price-3" >100 - 200</label>
                </li>
                <li>
                    <input id='price-4' type="radio" name='price' onClick={
                        () => handleChoicePrice(1000)
                    } />
                    <label htmlFor="price-4" >{t('filter.more')}</label>
                </li>
                
                <li>
                    <h4>
                        <i className="fas fa-filter"></i> {t('filter.review')}
                    </h4>
                </li>
                <li>
                    <input id="vote-1" type="radio" name='vote' onClick={
                        () => handleChoiceVote(1)
                    } />
                    <label htmlFor="vote-1" >⭐</label>
                </li>
                <li>
                    <input id="vote-2" type="radio" name='vote' onClick={
                        () => handleChoiceVote(2)
                    } />
                    <label htmlFor="vote-2" >⭐⭐</label>
                </li>
                <li>
                    <input id="vote-3" type="radio" name='vote' onClick={
                        () => handleChoiceVote(3)
                    } />
                    <label htmlFor="vote-3" >⭐⭐⭐</label>
                </li>
                <li>
                    <input id='vote-4' type="radio" name='vote' onClick={
                        () => handleChoiceVote(4)
                    } />
                    <label htmlFor="vote-4" >⭐⭐⭐⭐</label>
                </li>
                <li>
                    <input id='vote-5' type="radio" name='vote' onClick={
                        () => handleChoiceVote(5)
                    } />
                    <label htmlFor="vote-5" >⭐⭐⭐⭐⭐</label>
                </li>





                <li>
        <h4>
          <i className="fas fa-filter"></i> {t('filter.brand')}
        </h4>
      </li>
      <li>
        <input id="brand-1" type="radio" name='brand' onClick={() => handleBrand("Nike")} />
        <label htmlFor="brand-1" >Nike</label>
      </li>
      <li>
        <input id="brand-2" type="radio" name='brand' onClick={() => handleBrand("Adidas")} />
        <label htmlFor="brand-2" >Adidas</label>
      </li>
      <li>
        <input id="brand-3" type="radio" name='brand' onClick={() => handleBrand("Bitis")} />
        <label htmlFor="brand-3" >Bitis</label>
      </li>
      <li>
        <input id="brand-4" type="radio" name='brand' onClick={() => handleBrand("Vans")} />
        <label htmlFor="brand-4" >Vans</label>
      </li>

                <li>
                    {/* button clear */}
                    <button onClick={handleClear} className="btn btn-primary btn-clear">{t('filter.clear')}</button>
                </li>
            </ul>
        </form>
    );
}

export default Fillter;