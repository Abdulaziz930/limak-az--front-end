import React from "react";
import { Breadcrumb } from "react-bootstrap";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

const Breadcrumbs = (props, { breadcrumbs }) => {
  const {
    location: { pathname },
  } = props;

  const pathNames = pathname.split("/").filter((x) => x);

  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
          Home
        </Breadcrumb.Item>
        {pathNames.map((name, index) => {
          const routeTo = `/${pathNames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathNames.length - 1;
          return isLast ? (
            <Breadcrumb.Item active key={index}>
              <span>{name}</span>
            </Breadcrumb.Item>
          ) : (
            <Breadcrumb.Item
              linkAs={Link}
              linkProps={{ to: routeTo }}
              key={index}>
              {name}
            </Breadcrumb.Item>
          );
        })}
      </Breadcrumb>
    </>
  );
};

export default withRouter(Breadcrumbs);
