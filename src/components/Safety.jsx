import React from 'react';
import SafetySection from './SafetySection.jsx';

const Safety = (props) => {
  const { data } = props

  return (
    <>
      {Object.keys(data).map(section => {
            return(
              <div key={"content-" + section}>
                <h2>
                  {section === "1" ? "" : data[section]['header']}
                </h2>
                <SafetySection sectionNumber={section} sectionData={data[section]}/>
              </div>
            )
          })}
      </>
  );
}

export default Safety;