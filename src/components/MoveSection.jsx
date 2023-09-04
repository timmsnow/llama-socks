import React from 'react';
import { Col, Row } from 'react-bootstrap';

const MoveSection = (props) => {
  const { sectionData, sectionNumber } = props
  return (
    <Row>
      <Col xs={2}>
      </Col>
      <Col xs={10}>
        <p style={{textAlign: "center", whiteSpace: "pre-wrap"}}>
          {sectionNumber === "1" ? sectionData['texts'] : ""}
        </p>
        {sectionData['section'].map((section, index) => {
          return(
            <div key={index}>
                <h4 className="align-left mb-3 mt-3">
                  {section}
                </h4>
                <p style={!section.length ? {whiteSpace: "pre-wrap", textAlign: "center"} : {whiteSpace: "pre-wrap", textAlign: "left"}}>
                  {sectionData['texts'][index]}
                </p>
              </div>
            )
          })
        }
      </Col>
    </Row>
  );
}

export default MoveSection;