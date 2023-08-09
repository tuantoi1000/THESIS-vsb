import React, {useEffect} from 'react';
import './Policy.css';
import { useTranslation } from "react-i18next";

const PrivacyPolicy = () => {
  const { t } = useTranslation();
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (
    <div className="wrapper">
      <p className="content"><strong>{t('personal.content1')}</strong></p>
      <p className="content"><strong>(PRIVACY POLICY)</strong></p>
      <p className="content">&nbsp;</p>
      <p className="content"><span className="bold">trading company </span><strong>Saigon Buffalo</strong></p>
      <p className="content"><span className="bold">{t('personal.content2')}</span><strong>Vietnam</strong></p>
      <p className="content"><span className="bold">{t('personal.content3')}</span><strong>777 642 936</strong></p>
      <p className="content"><span className="bold">{t('personal.content4')}</span></p>
      <p>&nbsp;</p>
      <p><span className="bold">{t('personal.content5')}</span></p>
      <p>&nbsp;</p>
      <ol>
        <li><strong>{t('personal.content6')}</strong></li>
      </ol>
      <p>&nbsp;</p>
      <p><span className="bold">{t('personal.content7')}</span></p>
      <p>&nbsp;</p>
      <ol start="2">
        <li><strong>{t('personal.content8')}</strong></li>
      </ol>
      <p>&nbsp;A.&nbsp;<strong>{t('personal.content9')}</strong></p>
      <p>&nbsp;</p>
      <p><span className="bold">{t('personal.content10')} </span><strong>{t('personal.content11')}</strong><span className="bold">.</span></p>
      <p>&nbsp;</p>
      <p><span className="bold">{t('personal.content12')} </span><strong>GDPR</strong><span className="bold"> {t('personal.content13')}</span></p>
      <p>&nbsp;</p>
      <ol>
        <li className="bold"><span className="bold">{t('personal.content14')}</span></li>
        <li className="bold"><span className="bold">{t('personal.content15')}</span></li>
        <li className="bold"><span className="bold">{t('personal.content16')}</span></li>
      </ol>
      <p><span className="bold">{t('personal.content17')}</span></p>
      <p><strong>{t('personal.content18')}</strong><span className="bold">ngu0120@vsb.cz</span></p>
    </div>
  );
};

export default PrivacyPolicy;

