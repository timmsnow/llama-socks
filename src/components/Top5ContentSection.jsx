import React from 'react';

const Top5ContentSection = (props) => {
  const { sectionData, sectionNumber } = props

  return (
     <>
      <p style={{textAlign: "center", whiteSpace: "pre-wrap"}}>
        {sectionNumber === "1" ? sectionData['texts'] : ""}
      </p>
      {sectionData['section'].map((section, index) => {
          return(
            <div>
              <h4 className="align-left mt-2 mb-3">
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

export default Top5ContentSection;