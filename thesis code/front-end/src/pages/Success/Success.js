import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';
import { useTranslation } from "react-i18next";

function Success() {
    const {t} = useTranslation()
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
    return (
        <div style={{ color: 'black', marginTop: 60, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <FontAwesomeIcon icon={faCircleCheck} style={{ fontSize: 28, paddingRight: 10, marginBottom: 5 }} />
            <h2 style={{ color: 'blue' }}>{t('payment.contentsucess')}</h2>
        </div>
    );
}

export default Success;
