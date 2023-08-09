import React, {useEffect} from 'react';
import './FAQ.css';
import { useTranslation } from "react-i18next";

function FAQ() {
  const { t } = useTranslation();
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (
      <div className="container">
        <div className="faq">
          <h1 className="center">{t('faq.content1')}</h1>
          <h2>{t('faq.content2')}</h2>
          <h3>{t('faq.content3')}</h3>
          <p className="faq-text">{t('faq.content4')}</p>
          <p className="faq-text">{t('faq.content5')}</p>
          <p>{t('faq.content6')}</p>
          <div className="faq-box">
            {t('faq.content7')}
          </div>
          <h3>{t('faq.content8')}</h3>
          <p>
            {t('faq.content9')} <a href="http://localhost:3000/FAQ">SGB</a> {t('faq.content20')}
          </p>
          <h3>{t('faq.content10')}</h3>
          <p>{t('faq.content11')}</p>
          <h2>{t('faq.content12')}</h2> 
          <h3>{t('faq.content13')}</h3> 
          <p>{t('faq.content14')}</p> 
          <p>{t('faq.content21')}</p> 
          <p>{t('faq.content15')}</p>
          <p>{t('faq.content22')}</p> 
          <p>{t('faq.content16')}</p> 
          <h3>{t('faq.content17')}</h3> 
          <p>{t('faq.content18')}</p> 
          <h3>{t('faq.content23')}</h3> 
          <p>{t('faq.content19')}</p> 
        </div>
      </div>
  );
}

export default FAQ;
