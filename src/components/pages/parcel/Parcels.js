import React, { useEffect, useState } from "react";
import Banner from "../../common/banner/Banner";
import Panles from "../../common/panels/Panles";
import { Tabs, Tab } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import language from "../../../translation/language.json";
import { useSelector } from "react-redux";
import { mainAPI } from "../../../api";

const Parcels = (props) => {
  const {
    location: { pathname },
  } = props;

  const { activeLanguage } = useSelector((state) => state.languages);
  const { user } = useSelector((state) => state.user);

  const [orders, setOrders] = useState([]);
  const [tableContent, setTableContent] = useState({});

  const pathNames = pathname.split("/").filter((x) => x);

  useEffect(() => {
    const getOrders = async () => {
      await mainAPI
        .get(
          `https://localhost:44393/api/Order/getOrders/${activeLanguage}/${user}`,
          {
            headers: {
              Authorization: `Bearer ${
                localStorage.getItem("token") || sessionStorage.getItem("token")
              }`,
            },
          }
        )
        .then((response) => setOrders(response.data));

      await mainAPI
        .get(
          `https://localhost:44393/api/Order/getOrderContent/${activeLanguage}`,
          {
            headers: {
              Authorization: `Bearer ${
                localStorage.getItem("token") || sessionStorage.getItem("token")
              }`,
            },
          }
        )
        .then((response) => setTableContent(response.data));
    };

    getOrders();
  }, [activeLanguage, user]);

  return (
    <div className='parcels-wrapper'>
      <Banner
        bannerTitle={language[activeLanguage].userPanelBannerHeader}
        pathName={language[activeLanguage].userPanelBannerHeader}
      />
      <div className='container'>
        <div className='row'>
          <div className='col-md-3'>
            <Panles pathName={pathNames[0]} />
          </div>
          <div className='col-md-9'>
            <div className='content'>
              <Tabs
                defaultActiveKey='Sifariş edilib'
                transition={false}
                id='uncontrolled-tab-example'>
                {orders?.map((order) => {
                  let count = 0;
                  return (
                    <Tab eventKey={order.statusTitle} title={order.statusTitle}>
                      <table className='table'>
                        <thead>
                          <tr>
                            <th scope='col'>#</th>
                            <th scope='col'>{tableContent.codeTitle}</th>
                            <th scope='col'>{tableContent.priceTitle}</th>
                            <th scope='col'>{tableContent.countTitle}</th>
                            <th scope='col'>{tableContent.linkTitle}</th>
                          </tr>
                        </thead>
                        <tbody>
                          {order.orders?.map((orderItem) => {
                            count++;
                            return (
                              <tr>
                                <th scope='row'>{count}</th>
                                <td>{orderItem.code}</td>
                                <td>{orderItem.price}</td>
                                <td>{orderItem.count}</td>
                                <td>
                                  <a
                                    href={orderItem.url}
                                    target='_blank'
                                    rel='noreferrer'
                                    className='btn'>
                                    Məhsulun Linki
                                  </a>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </Tab>
                  );
                })}
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Parcels);
