import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody,
} from 'react-accessible-accordion';

import './MySongAccordion.css';

const MySongAccordion = (props) => {
  console.log(props)
  return (
    <Accordion
      className="accordion__box"
      onChange={key => {
        console.log(key);
      }}
      accordion={false}>
      <AccordionItem className="accordion__item">
        <AccordionItemTitle className="accordion__title" id={`accordion__title-${props.itemKey}`}>
          <div className="accordion__arrow" role="presentation" />
          <sapn>{props.title}</sapn>
        </AccordionItemTitle>
        <AccordionItemBody className="accordion__body" id={`accordion__body-${props.itemKey}`}>
          {props.children}
        </AccordionItemBody>
      </AccordionItem>
    </Accordion>
  );
};

export default MySongAccordion;
