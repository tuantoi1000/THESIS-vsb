import './Contact.css';
import Map from '../../Components/Map/Map';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useTranslation } from "react-i18next";

function Contact() {
    const { t } = useTranslation();

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
    const navigate = useNavigate();
    document.title = 'Contact';
    const [message, setMessage] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (message === '') {
            alert(t('contact.messagebox'));
        } else if (name === '') {
            alert(t('contact.namebox'));
        } else if (email === '') {
            alert(t('contact.emailbox'));
        } else if (subject === '') {
            alert(t('contact.subjectbox'));
        } else {
            // check email validation
            const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!emailRegex.test(email)) {
                alert(t('contact.messagebox1'));
                return;
            }
            alert(t('contact.thankyou'));
            // navigate to home page
            navigate('/');
        }
    };
    return (
        <main>
            <div className="slider-area " style={{ textAlign: 'center', paddingTop: 50 }}>
                <h1 style={{ color: 'black', paddingTop: 50 }}>{t('contact.title')}</h1>
            </div>

            <section className="contact-section" style={{ paddingTop: 50 }}>
                <div className="container">
                    <Map />
                    <div className="row">
                        <div className="col-12">
                            <h2 className="contact-title">{t('contact.touch')}</h2>
                        </div>
                        <div className="col-lg-8">
                            <form
                                className="form-contact contact_form"
                                action="#"
                                method="post"
                                id="contactForm"
                                noValidate="novalidate"
                                onSubmit={handleSubmit}
                            >
                                <div className="row">
                                    <div className="col-12">
                                        <div className="form-group">
                                            <textarea
                                                className="form-control w-100"
                                                name="message"
                                                id="message"
                                                cols="30"
                                                rows="9"
                                                placeholder={t("contact.message")}
                                                value={message}
                                                onChange={(e) => setMessage(e.target.value)}
                                            ></textarea>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <input
                                                className="form-control valid"
                                                name="name"
                                                id="name"
                                                type="text"
                                                placeholder={t("contact.name")}
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <input
                                                className="form-control valid"
                                                name="email"
                                                id="email"
                                                type="email"
                                                placeholder={t("contact.email")}
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <input
                                                className="form-control"
                                                name="subject"
                                                id="subject"
                                                type="text"
                                                placeholder={t("contact.subject")}
                                                value={subject}
                                                onChange={(e) => setSubject(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <button type="submit" className="button button-contactForm boxed-btn">
                                        {t("contact.send")}
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-3 offset-lg-1">
                            <div className="media contact-info">
                                <span className="contact-info__icon">
                                    <i className="ti-home"></i>
                                </span>
                                <span className="media-body">
                                    <h3>Poruba-Ostrava</h3>
                                    <p>Moravian-Silesian, Czech Republic</p>
                                </span>
                            </div>
                            <div className="media contact-info">
                                <span className="contact-info__icon">
                                    <i className="ti-tablet"></i>
                                </span>
                                <span className="media-body">
                                    <h3>+420 777 642 936</h3>
                                    <p>{t("contact.time")}</p>
                                </span>
                            </div>
                            <div className="media contact-info">
                                <span className="contact-info__icon">
                                    <i className="ti-email"></i>
                                </span>
                                <span className="media-body">
                                    <h3> 
                                        <h3>
                                            ngu0120@vsb.cz
                                        </h3>
                                    </h3>
                                    <p>{t("contact.sendus")}</p>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Contact;
