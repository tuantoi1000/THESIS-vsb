import React from 'react';
import { useTranslation } from "react-i18next";
import "./Marquee.css";
import logo from "../Footer/logo2_footer.png";

const Marquee = () => {
  const { t } = useTranslation();

  return (
    <div className="marquee-background">
      <div className="container">
        <div className="marquee-align">
          <div className="marquee-logo">
            <img src={logo} alt="Logo" />
          </div>

          <marquee>
            <div className="marquee-content">
              {[...Array(6)].map((_, index) => (
                <React.Fragment key={index}>
                  <span>{t("marquee.content1")}</span>
                  <span>{t("marquee.content2")}</span>
                </React.Fragment>
              ))}
            </div>
          </marquee>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
