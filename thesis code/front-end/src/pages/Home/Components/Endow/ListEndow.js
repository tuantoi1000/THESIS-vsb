import { useTranslation } from "react-i18next";


export default function ListEndow(props) {
    const { t } = useTranslation();

    return (
        <div className="col-xl-3 col-lg-3 col-md-6" key={props.id}>
            <div className="single-method mb-40">
                <i className={props.icon}></i>
                <h6>{t(props.name)}</h6>
                <p>{t(props.description)}</p>
            </div>
        </div>
    );
}
