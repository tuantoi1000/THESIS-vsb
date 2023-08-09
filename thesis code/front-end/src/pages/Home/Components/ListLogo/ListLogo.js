import './ListLogo.css'
import gallery1 from './img/adidas.png';
import gallery2 from './img/converse.png';
import gallery3 from './img/nike.png';
import gallery4 from './img/vans.png';
import gallery5 from './img/mlb.png';
import gallery6 from './img/coolmate.png';
import gallery7 from './img/thenorthface.png'
import gallery8 from './img/columbia.png'
import gallery9 from './img/reebok.png'
import gallery10 from './img/bitis.png'
import { Link, useNavigate } from 'react-router-dom';

const imgList = [
    {
        id: 1,
        img: gallery1,
        alt: 'gallery1',
        links: '/productType/brand-adidas',
    },
    {
        id: 2,
        img: gallery2,
        alt: 'gallery2',
        links: '/productType/brand-converse',
    },
    {
        id: 3,
        img: gallery3,
        alt: 'gallery3',
        links: '/productType/brand-nike',
    },
    {
        id: 4,
        img: gallery4,
        alt: 'gallery4',
        links: '/productType/brand-vans',
    },
    {
        id: 5,
        img: gallery5,
        alt: 'gallery5',
        links: '/productType/brand-mlb',
    },
    {
        id: 6,
        img: gallery6,
        alt: 'gallery6',
        links: '/productType/brand-coolmate',
    },
    {
        id: 7,
        img: gallery7,
        alt: 'gallery7',
        links: '/productType/brand-thenorthface',
    },
    {
        id: 8,
        img: gallery8,
        alt: 'gallery8',
        links: '/productType/brand-columbia',
    },
    {
        id: 9,
        img: gallery9,
        alt: 'gallery9',
        links: '/productType/brand-reebok',
    },
    {
        id: 10,
        img: gallery10,
        alt: 'gallery10',
        links: '/productType/brand-bitis',
    },

];
function ListLogo() {
    return (
        <section className="padding-bottomss">
            <div className="container">
                <div className="tab-content">
                    <div
                        className="tab-pane fade show active">
                        <div className="row browsers">
                            {imgList.map((item, index) => (
                                <div className="col-md-2-10" key={index}>
                                        <div className="image">
                                            <Link to={item.links}>
                                                <img src={item.img} alt={item.alt}></img>
                                            </Link>
                                        </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default ListLogo;
