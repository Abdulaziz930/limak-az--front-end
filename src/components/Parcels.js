import React from "react";
import Banner from "./Banner";
import Panles from "./Panles";
import { Tabs, Tab } from "react-bootstrap";

const Parcels = () => {
  return (
    <div className='parcels-wrapper'>
      <Banner bannerTitle='Istifadəçi Paneli' pathName='Istifadəçi Paneli' />
      <div className='container'>
        <div className='row'>
          <div className='col-md-3'>
            <Panles />
          </div>
          <div className='col-md-9'>
            <div className='content'>
              <Tabs
                defaultActiveKey='Order'
                transition={false}
                id='uncontrolled-tab-example'>
                <Tab eventKey='Order' title='Sifariş edilib'>
                  <table className='table'>
                    <thead>
                      <tr>
                        <th scope='col'>#</th>
                        <th scope='col'>Code</th>
                        <th scope='col'>Price</th>
                        <th scope='col'>Link</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope='row'>1</th>
                        <td>Mark</td>
                        <td>12.21</td>
                        <td>
                          <a
                            href='https://www.gooogle.com'
                            target='_blank'
                            rel='noreferrer'
                            className='btn'>
                            Məhsulun Linki
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </Tab>
                <Tab eventKey='set-off' title='Yola düşüb'>
                  <table className='table'>
                    <thead>
                      <tr>
                        <th scope='col'>#</th>
                        <th scope='col'>Code</th>
                        <th scope='col'>Price</th>
                        <th scope='col'>Link</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope='row'>1</th>
                        <td>Mark</td>
                        <td>12.21</td>
                        <td>
                          <a
                            href='https://www.gooogle.com'
                            target='_blank'
                            rel='noreferrer'
                            className='btn'>
                            Məhsulun Linki
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </Tab>
                <Tab eventKey='office' title='Ofisdədir'>
                  <table className='table'>
                    <thead>
                      <tr>
                        <th scope='col'>#</th>
                        <th scope='col'>Code</th>
                        <th scope='col'>Price</th>
                        <th scope='col'>Link</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope='row'>1</th>
                        <td>Mark</td>
                        <td>12.21</td>
                        <td>
                          <a
                            href='https://www.gooogle.com'
                            target='_blank'
                            rel='noreferrer'
                            className='btn'>
                            Məhsulun Linki
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </Tab>
                <Tab eventKey='handed-over' title='Təhvil verilib'>
                  <table className='table'>
                    <thead>
                      <tr>
                        <th scope='col'>#</th>
                        <th scope='col'>Code</th>
                        <th scope='col'>Price</th>
                        <th scope='col'>Link</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope='row'>1</th>
                        <td>Mark</td>
                        <td>12.21</td>
                        <td>
                          <a
                            href='https://www.gooogle.com'
                            target='_blank'
                            rel='noreferrer'
                            className='btn'>
                            Məhsulun Linki
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parcels;