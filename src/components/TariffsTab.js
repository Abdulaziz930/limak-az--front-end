import React from "react";
import { Tabs, Tab } from "react-bootstrap";

const TariffsTab = () => {
  return (
    <div className='content'>
      <Tabs
        defaultActiveKey='turkey'
        transition={false}
        id='uncontrolled-tab-example'>
        <Tab eventKey='turkey' title='Türkiyə'>
          <div className='tab-header'>
            <div className='flag'>
              <img
                src='http://localhost:3000/images/turkey.png'
                alt='turkey-flag'
                className='img-fluid'
              />
            </div>
            <div className='title'>
              <h4>Türkiyədən çatdırılma</h4>
            </div>
          </div>
          <div className='tab-main'>
            <div className='type'>
              <div className='type-title'>
                <h5>Standart məhsullar üçün</h5>
              </div>
              <ul>
                <li>
                  <span className='tariff-title'>0 kq - 0.1 kq dək</span>
                  <span className='tariff-price'>1 $</span>
                </li>
                <li>
                  <span className='tariff-title'>0 kq - 0.1 kq dək</span>
                  <span className='tariff-price'>2 $</span>
                </li>
                <li>
                  <span className='tariff-title'>0 kq - 0.1 kq dək</span>
                  <span className='tariff-price'>3 $</span>
                </li>
                <li>
                  <span className='tariff-title'>0 kq - 0.1 kq dək</span>
                  <span className='tariff-price'>4 $</span>
                </li>
                <li>
                  <span className='tariff-title'>0 kq - 0.1 kq dək</span>
                  <span className='tariff-price'>4.5 $</span>
                </li>
              </ul>
            </div>
            <div className='type'>
              <div className='type-title'>
                <h5>Maye məhsullar üçün</h5>
              </div>
              <ul>
                <li>
                  <span className='tariff-title'>0 kq - 0.1 kq dək</span>
                  <span className='tariff-price'>1.5 $</span>
                </li>
                <li>
                  <span className='tariff-title'>0 kq - 0.1 kq dək</span>
                  <span className='tariff-price'>2.5 $</span>
                </li>
                <li>
                  <span className='tariff-title'>0 kq - 0.1 kq dək</span>
                  <span className='tariff-price'>3.5 $</span>
                </li>
                <li>
                  <span className='tariff-title'>0 kq - 0.1 kq dək</span>
                  <span className='tariff-price'>4.5 $</span>
                </li>
                <li>
                  <span className='tariff-title'>0 kq - 0.1 kq dək</span>
                  <span className='tariff-price'>5 $</span>
                </li>
              </ul>
            </div>
          </div>
          <div className='tab-description'>
            <p>
              Şirkətimiz Türkiyə və Amerikadan yüklərin daşınması ilə məşğul
              olur. Sizin sifarişləriniz həftədə 3 dəfə Türkiyədən, 1 dəfə isə
              Amerikadan Bakıya çatdırılır. Limak Sizə bağlamalarınızın
              çəkisindən asılı olaraq, Türkiyədən 2 dollardan, ABŞ-dan isə 2.50
              dollardan başlayan qiymətlərlə sərfəli çatdırılma təklif edir.
              Sifariş olunan bağlamanın çatdırılma haqqı çəkiyə görə hesablanır.
              Ölçüsü 1 metrdən böyük olan bağlamaların kargo pulu isə həcmi
              çəkiyə görə müəyyən edilir.
            </p>
          </div>
        </Tab>
        <Tab eventKey='usa' title='Amerika'>
          <div className='tab-header'>
            <div className='flag'>
              <img
                src='http://localhost:3000/images/united-states-of-america.png'
                alt='turkey-flag'
                className='img-fluid'
              />
            </div>
            <div className='title'>
              <h4> Amerikadan çatdırılma</h4>
            </div>
          </div>
          <div className='tab-main'>
            <div className='type'>
              <div className='type-title'>
                <h5>Standart məhsullar üçün</h5>
              </div>
              <ul>
                <li>
                  <span className='tariff-title'>0 kq - 0.1 kq dək</span>
                  <span className='tariff-price'>2 $</span>
                </li>
                <li>
                  <span className='tariff-title'>0 kq - 0.1 kq dək</span>
                  <span className='tariff-price'>3 $</span>
                </li>
                <li>
                  <span className='tariff-title'>0 kq - 0.1 kq dək</span>
                  <span className='tariff-price'>4 $</span>
                </li>
                <li>
                  <span className='tariff-title'>0 kq - 0.1 kq dək</span>
                  <span className='tariff-price'>5 $</span>
                </li>
                <li>
                  <span className='tariff-title'>0 kq - 0.1 kq dək</span>
                  <span className='tariff-price'>5.5 $</span>
                </li>
              </ul>
            </div>
            <div className='type'>
              <div className='type-title'>
                <h5>Maye məhsullar üçün</h5>
              </div>
              <ul>
                <li>
                  <span className='tariff-title'>0 kq - 0.1 kq dək</span>
                  <span className='tariff-price'>2.5 $</span>
                </li>
                <li>
                  <span className='tariff-title'>0 kq - 0.1 kq dək</span>
                  <span className='tariff-price'>3.5 $</span>
                </li>
                <li>
                  <span className='tariff-title'>0 kq - 0.1 kq dək</span>
                  <span className='tariff-price'>4.5 $</span>
                </li>
                <li>
                  <span className='tariff-title'>0 kq - 0.1 kq dək</span>
                  <span className='tariff-price'>5.5 $</span>
                </li>
                <li>
                  <span className='tariff-title'>0 kq - 0.1 kq dək</span>
                  <span className='tariff-price'>6 $</span>
                </li>
              </ul>
            </div>
          </div>
          <div className='tab-description'>
            <p>
              Şirkətimiz Türkiyə və Amerikadan yüklərin daşınması ilə məşğul
              olur. Sizin sifarişləriniz həftədə 3 dəfə Türkiyədən, 1 dəfə isə
              Amerikadan Bakıya çatdırılır. Limak Sizə bağlamalarınızın
              çəkisindən asılı olaraq, Türkiyədən 2 dollardan, ABŞ-dan isə 2.50
              dollardan başlayan qiymətlərlə sərfəli çatdırılma təklif edir.
              Sifariş olunan bağlamanın çatdırılma haqqı çəkiyə görə hesablanır.
              Ölçüsü 1 metrdən böyük olan bağlamaların kargo pulu isə həcmi
              çəkiyə görə müəyyən edilir.
            </p>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default TariffsTab;
