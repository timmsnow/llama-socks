import React from 'react';
import BudgetSection from './BudgetSection.jsx';

const Budget = (props) => {
  const { data } = props

  return (
    <>
      {Object.keys(data).map(section => {
            return(
              <div key={"content-" + section}>
                <h2>
                  {section === "1" ? "" : data[section]['header']}
                </h2>
                <BudgetSection sectionNumber={section} sectionData={data[section]}/>
              </div>
            )
          })}
      </>
  );
}

export default Budget;