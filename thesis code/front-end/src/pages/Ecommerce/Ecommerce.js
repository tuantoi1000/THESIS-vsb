import React from 'react';
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./Ecommerce.css";
import background from "./img/ecommerce.jpeg";

const Ecommerce = () => {
  const { t } = useTranslation();

  useEffect(() => {
    // scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="ecommerce-page">
      <div className="ecommerce-image">
        <img src={background}/>
      </div>

      <div className="container ecommerce-description">
          {[...Array(6)].map((_, index) => (
            <p key={index}>{t(`ecommerce.content${index + 1}`)}</p>
          ))}
      </div>
    </div>
  );
};

export default Ecommerce;
