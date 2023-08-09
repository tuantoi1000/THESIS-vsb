import React from 'react';
import './Size.css';
import { useEffect } from 'react';
import Coat from './Components/Coat'
import Shirt from './Components/Shirt'
import Polo from './Components/Polo'
import Shoe from './Components/Shoe'
import Sport from './Components/Sport'
import Tshirt from './Components/Tshirt'

import { useTranslation } from "react-i18next";

function Size() {
    const { t } = useTranslation();

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
    return (
        <div className="container">
            <div className="size-padding">
                <h1 className="size-title">
                        {t('footer.size')}
                </h1>
                <div className="size-description">
                    <p>
                        {t("size.content1")}                    
                    </p>
                </div>
                <Tshirt/>
                <Sport/>
                <Coat />
                <Polo/>
                <Shirt/>
                <Shoe/>
            </div>

        
        </div>
    );
  }
export default Size;
  
  
  


