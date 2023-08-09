import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

export default function Category(props) {
    const { t } = useTranslation();

    return (
        <div className="col-xl-4 col-lg-6">
            <div className="single-category mb-30">
                <div className="category-img">
                    <img src={props.img} alt="" />
                    <div className="category-caption">
                        <h2>{props.type}</h2>
                        <span className="best">
                            <Link to={props.Link}>{props.nameLink}</Link>
                        </span>
                        <span className="collection">{t('category.content1')}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
