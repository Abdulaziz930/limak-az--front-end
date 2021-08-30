import React from "react";
import { Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import languages from "../../../translation/language.json";

const Breadcrumbs = (props, { breadcrumbs }) => {
  const { activeLanguage } = useSelector((state) => state.languages);

  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
          {languages[activeLanguage].breadcrumb_path}
        </Breadcrumb.Item>
        <Breadcrumb.Item active>
          <span>{props.pathName}</span>
        </Breadcrumb.Item>
      </Breadcrumb>
    </>
  );
};

export default Breadcrumbs;
