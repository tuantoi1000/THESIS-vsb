import './ButtonMore.css';
import { useTranslation } from "react-i18next";

function ButtonMore({ onClick }) {
    const { t } = useTranslation();

    return (
        <div className="button_container">
            <div className="button_more" onClick={onClick}>
                {t('buttonmore.more')}
            </div>
        </div>
    );
}

export default ButtonMore;
