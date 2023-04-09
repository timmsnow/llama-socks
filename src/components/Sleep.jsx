import React from 'react';
import SleepSection from './SleepSection.jsx';

const Sleep = (props) => {
  const { data } = props

  return (
    <>
      {Object.keys(data).map(section => {
            return(
              <div key={"content-" + section}>
                <h2>
                  {section === "1" ? "" : data[section]['header']}
                </h2>
                <SleepSection sectionNumber={section} sectionData={data[section]}/>
              </div>
            )
          })}
      </>
  );
}

export default Sleep;