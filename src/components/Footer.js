import React from "react";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-3'>
            <div className='logo-box'></div>
            <div className='description'>
              <p>
                "Limak VM" MMC sürətli poçtdaşıma və kuryer şirkətidir. Fiziki
                və hüquqi şəxslərin sifariş etdikləri yükləri xaricdəki
                anbarlarına qəbul edir, onların Azərbaycana daşınıb, müştəriyə
                təhvil verilməsini təmin edir.
              </p>
            </div>
            <div className='social-media-box'>
              <h5>Bizi sosial şəbəkələrdən izləyin</h5>
              <ul className='social-medias'>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='sections'>
              <div className='section-title'>
                <h4>Bölmələr</h4>
              </div>
              <div className='section-content'>
                <ul>
                  <li>Ölkələr</li>
                  <li>Mağazalar</li>
                  <li>Gizlilik Şərləri</li>
                  <li>Kalkulayor</li>
                  <li>Haqqımızda</li>
                  <li>Əlaqə</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='col-md-5'>
            <div className='contact'>
              <p>
                Səbail rayonu, Lermontov küç. 40A (İçərişəhər metrostansiyasının
                yaxınlığı, "Azeurotel" baş ofisinin yanı) Bakı/Azərbaycan
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
