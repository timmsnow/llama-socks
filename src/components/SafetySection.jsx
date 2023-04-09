import React from 'react';

const SafetySection = (props) => {
  const { sectionData, sectionNumber } = props
  return (
     <>
      <p style={{textAlign: "center", whiteSpace: "pre-wrap"}}>
        {sectionNumber === "1" ? sectionData['texts'] : ""}
      </p>
      {sectionData['section'].map((section, index) => {
          return(
            <div key={index}>
              <h4 className="align-left">
                {section}
              </h4>
              <p style={!section.length ? {whiteSpace: "pre-wrap", textAlign: "center"} : {whiteSpace: "pre-wrap", textAlign: "left"}}>
                {sectionData['texts'][index]}
              </p>
            </div>
          )
        })
      }
    </>
  );
}

export default SafetySection;