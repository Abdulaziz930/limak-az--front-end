import React, { useEffect } from "react";
import Banner from "../../common/banner/Banner";
import SectionBox from "../../common/sections/SectionBox";
import Accordion from "../../common/accordion/Accordion";
import { withRouter } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchRules, fetchRuleContents } from "../../../actions";

const Rules = (props) => {
  const dispatch = useDispatch();

  const { rules } = useSelector((state) => state.rules);
  const { ruleContent } = useSelector((state) => state.ruleContent);
  const { activeLanguage } = useSelector((state) => state.languages);
  const {
    location: { pathname },
  } = props;

  const pathNames = pathname.split("/").filter((x) => x);

  useEffect(() => {
    dispatch(fetchRules());
    dispatch(fetchRuleContents());
  }, [dispatch, activeLanguage]);

  return (
    <div className='rules-wrapper'>
      <Banner
        bannerTitle={ruleContent.ruleTitle}
        pathName={ruleContent.breadcrumbPathname}
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
