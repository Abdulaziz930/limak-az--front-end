import React from "react";
import languages from "../translation/language.json";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SectionBox = () => {
  const { activeLanguage } = useSelector((state) => state.languages);

  return (
    <div className='section-box'>
      <h4>Köməkçi bölmələr</h4>
      <ul className='sections'>
        {languages[activeLanguage].auxiliarySections.map((section) => {
          return (
            <li key={section.id}>
              <Link to={`/${section.url}`}>{section.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SectionBox;
