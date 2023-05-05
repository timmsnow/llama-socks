import React from 'react';

const InfoSection = (props) => {
  const { sectionData, sectionNumber } = props
  return (
     <>
      <p style={{textAlign: "center", whiteSpace: "pre-wrap"}}>
        {sectionNumber === "1" ? sectionData['texts'] : ""}
      </p>
      {sectionData['section'].map((section, index) => {
        const lastIndex = sectionData['section'].length - 1;
          return(
            <div key={index}>
              <h4 style={lastIndex ? {textAlign: "center"} : {textAlign: "left"}}>
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

export default InfoSection;