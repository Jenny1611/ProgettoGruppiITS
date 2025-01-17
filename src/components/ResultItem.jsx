/* eslint-disable react/prop-types */

import React from "react";
import parse from "html-react-parser";

const ResultItem = ({children, group}) => {
  return (
    <div className="list-group-item" id={group.id}>
      {React.Children.map(children, (child, index) => {
        return (
          <div id={`${group.id}${index + 1}`} className="container">
            <div className="card bg-light my-2">
              <div className="card-header">
                <b>{group.name ? group.name : group.projects[index].groupSubName}</b>
              </div>
              <div className="card-body">
                <h4 className="card-title">{group.projects[index].title}</h4>
                <div className="card-text">
                  <span className="d-block">
                    1° anno:{" "}
                    {group.firstYearMembers ? group.firstYearMembers : group.projects[index].firstYearSubMembers}
                  </span>
                  <span className="d-block">
                    2° anno:{" "}
                    {group.secondYearMembers ? group.secondYearMembers : group.projects[index].secondYearSubMembers}
                  </span>
                  <br />
                </div>
                <div>{parse(group.projects[index].description)}</div>
              </div>
            </div>
            <div key={index} style={{paddingBottom: 50}}>
              <div className="container border border rounded mb-2" style={{padding: 0}}>
                {child}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ResultItem;
