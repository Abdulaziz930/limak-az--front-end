import React, { useEffect, useState } from "react";
import Banner from "../../common/banner/Banner";
import SectionBox from "../../common/sections/SectionBox";
import Accordion from "../../common/accordion/Accordion";
import { withRouter } from "react-router";
import { useSelector } from "react-redux";
import rulesRoute from "../../../routes/pages/rule/rule.json";
import MetaDecorator from "../../utils/metaDecorator/MetaDecorator";
import { mainAPI } from "../../../api";

const Rules = (props) => {

  const { activeLanguage } = useSelector((state) => state.languages);
  const {
    location: { pathname },
  } = props;

  const [rules, setRules] = useState([]);
  const [ruleContent, setRuleContent] = useState({});

  const pathNames = pathname.split("/").filter((x) => x);

  useEffect(() => {
    const getRules = async () => {
      await mainAPI
        .get(`Rule/getRules/${activeLanguage}`)
        .then((response) => setRules(response.data));
    };

    const getRuleContent = async () => {
      await mainAPI
        .get(`Rule/getRuleContent/${activeLanguage}`)
        .then((response) => setRuleContent(response.data));
    };

    getRules();
    getRuleContent();
  }, [activeLanguage]);

  return (
    <div className='rules-wrapper'>
      <MetaDecorator
        title={rulesRoute[activeLanguage].pageTitle}
        description={rulesRoute[activeLanguage].pageDescription}
      />
      <Banner
        bannerTitle={ruleContent.ruleTitle}
        pathName={rulesRoute[activeLanguage].breadcrumbRoute}
      />
      <div className='rules-content'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-3'>
              <SectionBox pathName={pathNames[0]} />
            </div>
            <div className='col-md-9'>
              <div className='rules-content-header'>
                <h2>{ruleContent.ruleHeaderTitle}</h2>
              </div>
              <div className='rules-content-wrapper'>
                {rules.map((rule) => {
                  return (
                    <Accordion
                      key={rule.id}
                      title={rule.title}
                      content={rule.content}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Rules);
