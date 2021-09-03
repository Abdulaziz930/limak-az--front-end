import React, { useEffect } from "react";
import Banner from "../../common/banner/Banner";
import SectionBox from "../../common/sections/SectionBox";
import Accordion from "../../common/accordion/Accordion";
import { withRouter } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuestions, fetchQuestionsContents } from "../../../actions";
import MetaDecorator from "../../utils/metaDecorator/MetaDecorator";
import questionsRoute from "../../../routes/pages/question/question.json";

const Questions = (props) => {
  const dispatch = useDispatch();

  const { questions } = useSelector((state) => state.questions);
  const { questionContent } = useSelector((state) => state.questionContent);
  const { activeLanguage } = useSelector((state) => state.languages);
  const {
    location: { pathname },
  } = props;

  const pathNames = pathname.split("/").filter((x) => x);

  useEffect(() => {
    dispatch(fetchQuestions());
    dispatch(fetchQuestionsContents());
  }, [dispatch, activeLanguage]);

  return (
    <div className='questions-wrapper'>
      <MetaDecorator
        title={questionsRoute[activeLanguage].pageTitle}
        description={questionsRoute[activeLanguage].pageDescription}
      />
      <Banner
        bannerTitle={questionContent.questionTitle}
        pathName={questionsRoute[activeLanguage].breadcrumbRoute}
      />
      <div className='questions-content'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-3'>
              <SectionBox pathName={pathNames[0]} />
            </div>
            <div className='col-md-9'>
              <div className='questions-content-header'>
                <h2>{questionContent.questionHeaderTitle}</h2>
              </div>
              <div className='questions-content-wrapper'>
                {questions.map((question) => {
                  return (
                    <Accordion
                      key={question.id}
                      title={question.title}
                      content={question.content}
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

export default withRouter(Questions);
