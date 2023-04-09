import React from 'react';
import MoveSection from './MoveSection.jsx';

const Move = (props) => {
  const { data } = props

  return (
    <>
      {Object.keys(data).map(section => {
            return(
              <div key={"content-" + section}>
                <h2>
                  {section === "1" ? "" : data[section]['header']}
                </h2>
                <MoveSection sectionNumber={section} sectionData={data[section]}/>
              </div>
            )
          })}
      </>
  );
}

export default Move;