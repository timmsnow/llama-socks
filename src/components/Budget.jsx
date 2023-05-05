import React from 'react';
import { Container, Row, Col, Card } from "react-bootstrap";
import BudgetSection from './BudgetSection.jsx';

const Budget = (props) => {
  const { data } = props
  const firstParagraph = data[1]["texts"]
  const keys = Object.keys(data)
  const lastParagraph = data[keys.slice(-1)]["texts"]
  const budgetType = data[keys.slice(-1)]["section"]
  const budgetTypeKeys = Object.keys(budgetType)
  const lastParagraphHeader = data[keys.slice(-1)]["header"]
  const budgetKeys = keys.slice(1, -1)

  return (
    <>
    <Container>
      <Row className="center">
        <div className="budget-intro">
        {firstParagraph}
        </div>
          {budgetKeys.map(section => {
            return(
                  <Col xs={12} md={6} lg={6} key={"content-" + section}>
                    <Card className="budget-container">
                      <h2>
                        {section === "1" ? "" : data[section]['header']}
                      </h2>
                      <BudgetSection sectionNumber={section} sectionData={data[section]}/>
                    </Card>
                  </Col>
            )
          })}
          </Row>
          <Container>
            <h2 className="budget-intro">
              {lastParagraphHeader}
            </h2>
            <Row className="budget-row">
              {budgetType.map((type, index) => {
                return(
                  <div key={index}>
                    <h4 className="mb-3 mt-5">
                      {type}
                    </h4>
                      {lastParagraph[index].map((block, index) => {
                        return (
                          <p className="compact-text" key={index}>
                            {block}
                          </p>
                          )
                      })}
                  </div>
                )
              })}
            </Row>
          </Container>
        </Container>
      </>
  );
}

export default Budget;