import React, { useEffect } from "react";
import Breadcrumbs from "./Breadcrumbs";
import SectionBox from "./SectionBox";
import Accordion from "./Accordion";
import { withRouter } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchRules, fetchRuleContents } from "../actions";

const Rules = (props) => {
  const dispatch = useDispatch();

  const { rules } = useSelector((state) => state.rules);
  const { ruleContent } = useSelector((state) => state.ruleContent);
  const {
    location: { pathname },
  } = props;

  const pathNames = pathname.split("/").filter((x) => x);

  useEffect(() => {
    dispatch(fetchRules());
    dispatch(fetchRuleContents());
  }, [dispatch]);

  return (
    <div className='rules-wrapper'>
      <div className='rules-header'>
        <div className='container'>
          <div className='rules-header-wrapper'>
            <h4>{ruleContent.ruleTitle}</h4>
            <Breadcrumbs />
          </div>
        </div>
      </div>
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
