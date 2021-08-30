import React from "react";
import languages from "../../../translation/language.json";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SectionBox = ({ pathName }) => {
  const { activeLanguage } = useSelector((state) => state.languages);

  return (
    <div className='section-box'>
      <h4>{languages[activeLanguage].section_box_title}</h4>
      <ul className='sections'>
        {languages[activeLanguage].auxiliarySections.map((section) => {
          return (
            <React.Fragment key={section.id}>
              {pathName === section.url ? (
                <li>
                  <Link to={`/${section.url}`} className='active'>
                    {section.name}
                  </Link>
                </li>
              ) : (
                <li>
                  <Link to={`/${section.url}`}>{section.name}</Link>
                </li>
              )}
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
};

export default SectionBox;
