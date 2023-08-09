import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../redux/cartSlice';
// import { FormLogin } from "./components/FormLogin"
import { useEffect } from 'react';
import axios from 'axios';
import { useTranslation } from "react-i18next";

export default function Login() {
    const { t } = useTranslation();

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
    // set name page
    document.title = 'Login';
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users);

    const handleLogin = (e) => {
        e.preventDefault();
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.post('http://localhost:8000/v1/user/login', {
            email: email,
            password: password,
        })
        .then((res) => {
            console.log(res);
            alert('Login successfully');
            dispatch(login(res.data.account));
            navigate('/');
        })
        .catch((err) => {
            console.log(err);
            alert('Login failed');
        });

    };
    return (
        <>
            <div className="slider-area " style={{ textAlign: 'center' }}>
                <h1 style={{ color: 'black', paddingTop: 50 }}>{t('login.content1')}</h1>
            </div>

            <section className="login_part section_padding " style={{ paddingTop: 50 }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <div className="login_part_text text-center">
                                <div className="login_part_text_iner">
                                    <h2>{t('login.content2')}</h2>
                                    <p>
                                        {t('login.content3')}
                                    </p>
                                    <Link to="/register" className="btn_3">
                                        {t('login.content4')}
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="login_part_form">
                                <div className="login_part_form_iner">
                                    <h3>
                                    {t('login.content5')} <br />  {t('login.content6')}
                                    </h3>

                                    <form
                                        className="row contact_form"
                                        action="#"
                                        method="post"
                                        noValidate="novalidate"
                                        onSubmit={handleLogin}
                                    >
                                        <div className="col-md-12 form-group p_star">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="name"
                                                name="name"
                                                defaultValue=""
                                                placeholder={t('login.content7')}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>
                                        <div className="col-md-12 form-group p_star">
                                            <input
                                                type="password"
                                                className="form-control"
                                                id="password"
                                                name="password"
                                                defaultValue=""
                                                onChange={(e) => setPassword(e.target.value)}
                                                placeholder= {t('login.content8')}
                                            />
                                        </div>
                                        <div className="col-md-12 form-group">
                                            <div className="creat_account d-flex align-items-center">
                                                <input type="checkbox" id="f-option" name="selector" />
                                                <label htmlFor="f-option"> {t('login.content9')}</label>
                                            </div>
                                            <button type="submit" defaultValue="submit" className="btn_3">
                                                {t('login.content10')}
                                            </button>
                                            <Link className="lost_pass" to="#">
                                                {t('login.content11')}
                                            </Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
