import React, { useEffect } from 'react';
import './Returns.css';
import { useTranslation } from 'react-i18next';
import image from '../../assets/img/200w.gif';
import img from './img.png';
const Returns = () => {
  const { t } = useTranslation();

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (
    <div className="return-page">
      <section className="return-sections return-transparent">
          <div className="grid grid-twocolumns grid-center">
            <div className="grid-column ">
              <div className="return-content">
                <h1 className="return-heading ">
                  {t('return.content1')}
                  <br />
                  <span>
                    <b>60 {t('slide.content8')}</b>
                  </span>
                </h1>

                <p className="return-content">With</p>

                <div className="grid">
                  <div className="grid-column">
                    <span className="return-number">0$</span>
                    <span>{t('carttable.price')}</span>
                  </div>
                  <div className="grid-column">
                    <span className="return-number">0</span>
                    <span>{t('return.content3')}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid-column ">
              <img className="" src={img} />
            </div>
          </div>
      </section>

      <section className="return-sections return-policy">
        <div className="container">
          <div className="grid">
            <div className="grid-column eight-twelfths ">
              <p className="return-caption">{t('return.content4')}</p>

              <div className="return-caption_heading">
                <h2 className="returns-heading">60 {t('slide.content8')}</h2>
              </div>

              <h5 className="return-title">
                with <span>0$</span> {t('carttable.price')} and <span>0</span> {t('return.content3')}
              </h5>

              <div className="return-policy__description">
                <p>{t('return.content5')}</p>

                <ul>
                  <li>
                    <p>{t('return.content6')}</p>
                  </li>

                  <li>
                    <p>{t('return.content7')}</p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid-column four-twelfths ">
              <div className="return-banner">
                <img src={image} alt="Banner" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Returns;
