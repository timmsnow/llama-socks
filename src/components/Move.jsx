import React, { useState, useEffect } from 'react';
import {Tab, Tabs} from 'react-bootstrap';
import MoveSection from './MoveSection.jsx';

const Move = (props) => {
  const { data } = props;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); 
  }, []); 
  
  if (isLoading) {
    return <div>Loading...</div>;
  }

  const filteredData = { ...data };
  delete filteredData[Object.keys(filteredData)[0]];

  return (
    <>
      <Tabs
        defaultActiveKey={filteredData[2]['header']}
        id="uncontrolled-tab-move"
        className="mb-3 tabs-right"
      >
        {Object.keys(filteredData).map((section, index) => {
          return (
            <Tab
              eventKey={filteredData[section]['header']}
              key={section + index}
              title={section === '1' ? '' : filteredData[section]['header']}
              className="container"
            >
              <div key={'content-' + section}>
                <h2>{section === '1' ? '' : filteredData[section]['header']}</h2>
                <MoveSection sectionNumber={section} sectionData={filteredData[section]} />
              </div>
            </Tab>
          );
        })}
      </Tabs>
    </>
  );
};

export default Move;