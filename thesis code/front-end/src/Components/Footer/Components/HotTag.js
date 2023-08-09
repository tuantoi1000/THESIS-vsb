import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

export default function HotTag(props) {
    const { t } = useTranslation();

    return (
        <>
            <div className="single-footer-caption mb-50">
                <div className="footer-tittle">
                    <h4>{props.name}</h4>
                    <ul>
                        {props.tags.map((tag, index) => {
                            return (
                                <li key={index}>
                                    <Link to={tag.to}>{t(tag.name)}</Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </>
    );
}
