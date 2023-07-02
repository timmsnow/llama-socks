import React from 'react';
import {Tab, Tabs} from 'react-bootstrap';
import MoveSection from './MoveSection.jsx';

const Move = (props) => {
  let { data } = props

  delete data[Object.keys(data)[0]]
  
  return (
    <>
    <Tabs
        defaultActiveKey={data[2]['header']}
        id="uncontrolled-tab-move"
        className="mb-3"
        >
      {Object.keys(data).map(section => {
        return(
              <Tab 
                eventKey={data[section]['header']} 
                title={section === "1" ? "" : data[section]['header']} 
                className="banner-container container"
              >
                <div key={"content-" + section}>
                  <h2>
                    {section === "1" ? "" : data[section]['header']}
                  </h2>
                  <MoveSection sectionNumber={section} sectionData={data[section]}/>
                </div>
              </Tab>
            )
          })}
          </Tabs>
      </>
  );
}

export default Move;