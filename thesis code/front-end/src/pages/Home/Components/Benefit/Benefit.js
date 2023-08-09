import React from 'react';
import './Benefit.css';
import { useTranslation } from "react-i18next";


function Benefit() {
    const { t } = useTranslation();
    return (
        <div className="Policy-page">
            <div className="Policy-page-background">
                <svg xmlns='http://www.w3.org/2000/svg'  width='1500' height='1500' viewBox='0 0 200 200'>
                    <rect fill='#348AAA' width='200' height='200'/>
                        <g fill='none' stroke='#FFFFFF'  stroke-width='1' stroke-opacity='0.2'>
                            <rect x='-40' y='40' width='75' height='75'/>
                            <rect x='-35' y='45' width='65' height='65'/>
                            <rect x='-30' y='50' width='55' height='55'/>
                            <rect x='-25' y='55' width='45' height='45'/>
                            <rect x='-20' y='60' width='35' height='35'/>
                            <rect x='-15' y='65' width='25' height='25'/>
                            <rect x='-10' y='70' width='15' height='15'/>
                            <rect x='-5' y='75' width='5' height='5'/>
                            <rect width='35' height='35'/>
                            <rect x='5' y='5' width='25' height='25'/>
                            <rect x='10' y='10' width='15' height='15'/>
                            <rect x='15' y='15' width='5' height='5'/>
                            <rect x='40' width='75' height='75'/>
                            <rect x='45' y='5' width='65' height='65'/>
                            <rect x='50' y='10' width='55' height='55'/>
                            <rect x='55' y='15' width='45' height='45'/>
                            <rect x='60' y='20' width='35' height='35'/>
                            <rect x='65' y='25' width='25' height='25'/>
                            <rect x='70' y='30' width='15' height='15'/>
                            <rect x='75' y='35' width='5' height='5'/>
                            <rect x='40' y='80' width='35' height='35'/>
                            <rect x='45' y='85' width='25' height='25'/>
                            <rect x='50' y='90' width='15' height='15'/>
                            <rect x='55' y='95' width='5' height='5'/>
                            <rect x='120' y='-40' width='75' height='75'/>
                            <rect x='125' y='-35' width='65' height='65'/>
                            <rect x='130' y='-30' width='55' height='55'/>
                            <rect x='135' y='-25' width='45' height='45'/>
                            <rect x='140' y='-20' width='35' height='35'/>
                            <rect x='145' y='-15' width='25' height='25'/>
                            <rect x='150' y='-10' width='15' height='15'/>
                            <rect x='155' y='-5' width='5' height='5'/>
                            <rect x='120' y='40' width='35' height='35'/>
                            <rect x='125' y='45' width='25' height='25'/>
                            <rect x='130' y='50' width='15' height='15'/>
                            <rect x='135' y='55' width='5' height='5'/>
                            <rect y='120' width='75' height='75'/>
                            <rect x='5' y='125' width='65' height='65'/>
                            <rect x='10' y='130' width='55' height='55'/>
                            <rect x='15' y='135' width='45' height='45'/>
                            <rect x='20' y='140' width='35' height='35'/>
                            <rect x='25' y='145' width='25' height='25'/>
                            <rect x='30' y='150' width='15' height='15'/>
                            <rect x='35' y='155' width='5' height='5'/>
                            <rect x='200' y='120' width='75' height='75'/>
                            <rect x='40' y='200' width='75' height='75'/>
                            <rect x='80' y='80' width='75' height='75'/>
                            <rect x='85' y='85' width='65' height='65'/>
                            <rect x='90' y='90' width='55' height='55'/>
                            <rect x='95' y='95' width='45' height='45'/>
                            <rect x='100' y='100' width='35' height='35'/>
                            <rect x='105' y='105' width='25' height='25'/>
                            <rect x='110' y='110' width='15' height='15'/>
                            <rect x='115' y='115' width='5' height='5'/>
                            <rect x='80' y='160' width='35' height='35'/>
                            <rect x='85' y='165' width='25' height='25'/>
                            <rect x='90' y='170' width='15' height='15'/>
                            <rect x='95' y='175' width='5' height='5'/>
                            <rect x='120' y='160' width='75' height='75'/>
                            <rect x='125' y='165' width='65' height='65'/>
                            <rect x='130' y='170' width='55' height='55'/>
                            <rect x='135' y='175' width='45' height='45'/>
                            <rect x='140' y='180' width='35' height='35'/>
                            <rect x='145' y='185' width='25' height='25'/>
                            <rect x='150' y='190' width='15' height='15'/>
                            <rect x='155' y='195' width='5' height='5'/>
                            <rect x='160' y='40' width='75' height='75'/>
                            <rect x='165' y='45' width='65' height='65'/>
                            <rect x='170' y='50' width='55' height='55'/>
                            <rect x='175' y='55' width='45' height='45'/>
                            <rect x='180' y='60' width='35' height='35'/>
                            <rect x='185' y='65' width='25' height='25'/>
                            <rect x='190' y='70' width='15' height='15'/>
                            <rect x='195' y='75' width='5' height='5'/>
                            <rect x='160' y='120' width='35' height='35'/>
                            <rect x='165' y='125' width='25' height='25'/>
                            <rect x='170' y='130' width='15' height='15'/>
                            <rect x='175' y='135' width='5' height='5'/>
                            <rect x='200' y='200' width='35' height='35'/>
                            <rect x='200' width='35' height='35'/>
                            <rect y='200' width='35' height='35'/>
                        </g>
                </svg>
            </div>
            <div className="Policy-page-content">
                <h2>{t('benefit.content1')}</h2>

                <p>{t('benefit.content2')} <a href="/">Saigon Buffalo</a> {t('benefit.content3')}</p>
                <div className="Policy-page-benefit">
                    <ul>
                        <li>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
                                    <path d="M0 18h22V4H0zM1 5h2.858A3.995 3.995 0 011 7.858zm0 12v-2.858A3.995 3.995 0 013.858 17zm20 0h-2.858A3.995 3.995 0 0121 14.142zm0-3.899A5.016 5.016 0 0017.101 17H4.899A5.016 5.016 0 001 13.1V8.9A5.013 5.013 0 004.898 5h12.204A5.013 5.013 0 0021 8.899zm0-5.243A3.995 3.995 0 0118.142 5H21zM11 6.5a4.5 4.5 0 104.5 4.5A4.5 4.5 0 0011 6.5zm0 8a3.5 3.5 0 113.5-3.5 3.503 3.503 0 01-3.5 3.5z"></path>
                                </svg>
                            </span>
                            <span>{t('benefit.content4')}</span>
                        </li>
                        <li>
                            <span>
                                <svg width="22" height="22" viewBox="0 0 22 22" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.426 2.87l.707.707L3.577 19.133l-.707-.707L18.426 2.87zM16 12a3.5 3.5 0 110 7 3.5 3.5 0 010-7zm0 1a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM6 3a3.5 3.5 0 110 7 3.5 3.5 0 010-7zm0 1a2.5 2.5 0 100 5 2.5 2.5 0 000-5z"></path>
                                </svg>
                            </span>
                            <span>{t('benefit.content5')}</span>
                        </li>
                        <li>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
                                    <path d="M19 6.004h-1.669A2.765 2.765 0 0018 4.212a2.796 2.796 0 00-2.792-2.792A5.048 5.048 0 0011 4.458 5.048 5.048 0 006.792 1.42 2.796 2.796 0 004 4.212a2.765 2.765 0 00.669 1.792H2v6h1v8h16v-8h1v-6zM15.208 2.42a1.792 1.792 0 010 3.584h-3.67l-.018-.068.081-.294c.433-1.549 1.935-3.222 3.607-3.222zM5 4.212A1.794 1.794 0 016.792 2.42c1.672 0 3.174 1.673 3.607 3.222l.081.294-.018.068h-3.67A1.794 1.794 0 015 4.212zM3 7.004h7.5v4H3zm1 12h6.5v-7H4zm7.5 0H18v-7h-6.5zm7.5-8h-7.5v-4H19z" fill-rule="evenodd"></path>
                                </svg>
                            </span>
                            <span>{t('benefit.content6')}</span>
                        </li>
                        <li>
                            <span>
                                <svg width="22" height="22" viewBox="0 0 22 22" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.593 3l-.29.494-2.846 4.845L0 13.372v4.627h22.001V5h-4.835V3h-3.573zm.996 4.645l-1.615-1.616L14.165 4h2v2h4.836v4.94h-3.56l-3 2.559H2.04l5.744-2.763 1.857 1.858.708-.707-1.611-1.61 1.909-.919 1.115 1.115.707-.709-1.064-1.062 1.046-1.783 1.433 1.431.705-.705zM1 14.499h13.81l3-2.559h3.191v5.059H1v-2.5z"></path>
                                </svg>
                            </span>
                            <span>{t('benefit.content7')}</span>
                        </li>
                        <li>
                            <span>
                                <svg width="22" height="22" viewBox="0 0 22 22" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 19h20V3H1v16zM2.672 4h16.655L11 12.327 2.672 4zm17.329.741V18H2V4.741l9 9.001 9.001-9.001z"></path>
                                </svg>
                            </span>
                            <span>{t('benefit.content8')}</span>
                        </li>
                        <li>
                            <span>
                                <svg width="22" height="22" viewBox="0 0 22 22" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.335 3a5.63 5.63 0 00-4.007 1.657L11 4.986l-.33-.33A5.625 5.625 0 006.665 3a5.631 5.631 0 00-4.006 1.657A5.625 5.625 0 00.999 8.66c0 1.511.59 2.934 1.66 4.004l7.634 7.63L11 21l.707-.707 7.632-7.629A5.625 5.625 0 0021 8.66c0-1.511-.59-2.933-1.66-4.003A5.622 5.622 0 0015.335 3m-8.67 1c1.194 0 2.39.454 3.299 1.364L11 6.399l1.036-1.035a4.65 4.65 0 013.299-1.365c1.194 0 2.389.455 3.298 1.365A4.63 4.63 0 0120 8.66a4.633 4.633 0 01-1.367 3.297L11 19.587l-7.634-7.63A4.636 4.636 0 012 8.66c0-1.245.486-2.416 1.366-3.296a4.653 4.653 0 013.299-1.365"></path>
                                </svg>
                            </span>
                            <span>{t('benefit.content9')}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>


    );
}

export default Benefit;