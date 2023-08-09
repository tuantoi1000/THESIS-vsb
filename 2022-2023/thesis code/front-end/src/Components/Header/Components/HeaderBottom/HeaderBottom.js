import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import logo from '../../../Footer/logo2_footer.png';
import './HeaderBottom.css';
import { useDispatch, useSelector } from 'react-redux';
import AVATAR_IMG from './avatar.jpg';
import { logout } from '../../../../redux/cartSlice';
import { useTranslation } from "react-i18next";
import Flag from 'react-world-flags'


export default function HeaderBottom() {
    const { t } = useTranslation();

    const navigate = useNavigate();
    const defaultFn = () => { };
    const dispatch = useDispatch();

    const handleLogOut = () => {
        dispatch(logout());
    };

    const showMenu = () => {
        if (document.getElementById('myDropdown').style.display === 'block') {
            active = false;
            document.getElementById('myDropdown').style.display = 'none';
        } else {
            active = true;
            document.getElementById('myDropdown').style.display = 'block';
        }
        console.log(active);
    };

    const numberCart = useSelector((state) => state.numberCart);
    const user = useSelector((state) => state.user);
    const login = true;
    let active = false;

    const [searchValue, setSearchValue] = useState('');
    const [isDarkMode, setDarkMode] = useState(false);

    const toggleDarkMode = (checked) => {
        setDarkMode(checked);
    };

    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };
    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.body.className = theme;
        if (theme === 'dark') {
            toggleDarkMode(true);
        } else {
            toggleDarkMode(false);
        }
        document.getElementById('navigation').className = theme;
        // add class in class name_product
        const products = document.getElementsByClassName('name_product');
        for (let i = 0; i < products.length; i++) {
            products[i].className = 'name_product ' + theme;
        }
        document.getElementById('header-sticky').className = 'row align-items-center ' + theme;
        document.getElementById('header1').style.backgroundColor = theme === 'light' ? '#fff' : '#333';
        document.getElementsByClassName('slicknav_menu').className = theme;
        document.getElementById('search-submit').className = 'form-box f-right ' + theme;
        document.getElementById('dark-mode-btn').className = theme;
        document.getElementById('shopping-card-color').className = 'shopping-card ' + theme;
        // document.getElementById('favorit-items-color').className = 'favorit-items ' + theme;
        // const bestProductColor = document.getElementsByClassName('');
        // get all class name content_down and add class theme
        const contentDown = document.getElementsByClassName('content_down');

        const sliderArea = document.getElementsByClassName('slider-area');
        for (let i = 0; i < sliderArea.length; i++) {
            sliderArea[i].className = 'slider-area ' + theme;
        }
        window.onclick = function (event) {
            if (!event.target.matches('.avatar-show-active') && !event.target.matches('.account-list')) {
                var dropdowns = document.getElementsByClassName('dropdown-content');
                var i;
                for (i = 0; i < dropdowns.length; i++) {
                    var openDropdown = dropdowns[i];
                    if (active === true) {
                        openDropdown.style.display = 'none';
                        console.log('close');
                    }
                }
            }
        };
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchValue.trim()) {
            navigate(`/product/search/keyword=${searchValue}`);
            setSearchValue('');
        } else {
            navigate('/');
        }
    };

    return (
        <div id="header1" className="header-bottom header-sticky sticky-bar sticky">
            <div className="container-fluid">
                <div id="header-sticky" className="row align-items-center">
                    <div className="col-xl-1 col-lg-1 col-md-1 col-sm-3">
                        <div className="logo">
                            <Link to="/">
                                <img style={{ height: '80px' }} src={logo} alt="" />
                            </Link>
                        </div>
                    </div>

                    <div className="col-xl-6 col-lg-8 col-md-7 col-sm-5">
                        <div className="main-menu f-right d-none d-lg-block">
                            <nav>
                                <ul id="navigation">
                                    <li>
                                        <Link className="link-to" to="/">
                                        {t("header.home")}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="link-to" to="productType/shirt">
                                        {t("header.titleshirt")}
                                        </Link>
                                        <ul className="submenu">
                                            <li>
                                                <Link to="/productType/SHIRT-tshirt">{t("header.tshirt")}</Link>
                                            </li>
                                            <li>
                                                <Link to="/productType/SHIRT-shirt">{t("header.shirt")}</Link>
                                            </li>
                                            <li>
                                                <Link to="/productType/SHIRT-polo">{t("header.poloshirt")}</Link>
                                            </li>
                                            <li>
                                                <Link to="/productType/SHIRT-sport">{t("header.sportshirt")}</Link>
                                            </li>
                                            <li>
                                                <Link to="/productType/SHIRT-coat">{t("header.coat")}</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    

                                    <li>
                                        <Link className="link-to" to="/productType/shoes">
                                            {t("header.shoe")}
                                        </Link>
                                        <ul className="submenu">
                                            <li>
                                                <Link to="/productType/shoes-hightop">
                                                    {t("header.hightop")}

                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/productType/shoes-boots">
                                                    {t("header.boots")}

                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/productType/shoes-sneaker">
                                                    {t("header.sneaker")}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/productType/shoes-running">
                                                    {t("header.running")}

                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/productType/shoes-sport">
                                                    {t("header.sport")}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/productType/shoes-sandals">
                                                    {t("header.sandals")}

                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link className="link-to" to="/productType/hat">
                                            {t("header.hat")}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="link-to" to="/productType/brand">
                                            {t("header.brand")}
                                        </Link>
                                        <ul className="submenu">
                                            <li>
                                                <Link to="/productType/BRAND-nike">Nike</Link>
                                            </li>
                                            <li>
                                                <Link to="/productType/BRAND-adidas">Adidas</Link>
                                            </li>
                                            <li>
                                                <Link to="/productType/BRAND-columbia">Columbia</Link>
                                            </li>
                                            <li>
                                                <Link to="/productType/BRAND-reebok">Reebok</Link>
                                            </li>
                                            <li>
                                                <Link to="/productType/BRAND-coolmate">Coolmate</Link>
                                            </li>
                                            <li>
                                                <Link to="/productType/BRAND-bitis">Bitis</Link>
                                            </li>
                                            <li>
                                                <Link to="/productType/BRAND-vans">Vans</Link>
                                            </li>
                                            <li>
                                                <Link to="/productType/BRAND-thenorthface">The North Face</Link>
                                            </li>
                                            <li>
                                                <Link to="/productType/BRAND-mlb">MLB</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link className="link-to" to="/about">
                                            {t("header.about")}

                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="link-to" to="/contact">
                                            {t("header.contact")}

                                        </Link>
                                    </li>
                                    <li >
                                        <Link className="link-to">
                                            <i className="fas fa-globe fa-spin fa-2xl"></i>
            
                                        </Link>
                                        <ul className="submenu">
                                            <li>
                                                <Link to="/?lng=en" onClick={() => {window.location.href="/?lng=en"}}>
                                                    <Flag code={'gb'} />

                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/?lng=cs" onClick={() => {window.location.href="/?lng=cs"}}>
                                                    <Flag code={'cz'} />

                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>

                    
                    <div className="col-xl-5 col-lg-2 col-md-3 col-sm-3 fix-card">
                        <ul className="header-right f-right d-none d-lg-block d-flex justify-content-between">
                            <li className="d-none d-xl-block" style={{ marginTop: 9 }}>
                                <form id="search-submit" className="form-box f-right" onSubmit={handleSubmit}>
                                    <input
                                        id="search-id"
                                        type="text"
                                        name="Search"
                                        placeholder={t("header.search")}
                                        value={searchValue}
                                        onChange={(e) => setSearchValue(e.target.value)}
                                    />
                                    <button
                                        className="search-icon"
                                        type="submit"
                                        style={{ border: 'none', backgroundColor: 'white' }}
                                    >
                                        <i className="fas fa-search special-tag"></i>
                                    </button>
                                </form>
                            </li>

                            <div
                                id="dark-mode-btn"
                                style={{ display: 'flex', alignItems: 'center', marginLeft: 20 }}
                                onClick={toggleTheme}
                            >
                                <DarkModeSwitch
                                    className="dark-mode-btn-icon"
                                    checked={isDarkMode}
                                    onChange={toggleDarkMode}
                                    size={35}
                                />
                            </div>




                            <li style={{ marginTop: 9 }}>
                                <div className="shopping-card" id='shopping-card-color'>
                                    <div className="count-of-product">{numberCart}</div>
                                    <Link to="/cart">
                                        <i className="fas fa-shopping-cart"></i>
                                    </Link>
                                </div>
                            </li>



                            
                            
                            <li className="d-none d-lg-block" style={{ marginTop: 9 }}>
                                {' '}
                                {user ? (
                                    <div className="dropdown">
                                        <div className="dropbtn" onClick={showMenu} >
                                            <img className='avatar-show-active' src={AVATAR_IMG} alt={user.fullname} />
                                        </div>
                                        <div id="myDropdown" className="dropdown-content">
                                            <div className='account-list'>{user.fullname}</div>
                                            <div className='account-list'>Profile</div>
                                            <div onClick={handleLogOut}>Log Out</div>
                                        </div>
                                    </div>
                                ) : (
                                    <Link to="/login" className="btn header-btn">
                                        {t("header.login")}
                                    </Link>
                                )}
                            </li>
                        </ul>
                    </div>
                    <div className="col-12">
                        <div className="mobile_menu d-block d-lg-none">
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}
