import './MySongAccordion.css';
import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody,
} from 'react-accessible-accordion';

import SongList from '../../components/SongList/SongList';
import SVG from '../../components/SVG/SVG';

const MySongAccordion = props => {
  return (
    <Accordion
      className="accordion__box"
      onChange={key => {
        console.log(key);
      }}
      accordion={false}>
      <AccordionItem className="accordion__item">
        <AccordionItemTitle
          className="accordion__title"
          id={`accordion__title-${props.itemKey}`}>
          <div className="accordion__arrow" role="presentation" />
          <div>{`${props.title} (${props.num || 0})`}</div>
          <SVG svgName="ellipsis-v" myClass="accordion__title-right" />
        </AccordionItemTitle>
        <AccordionItemBody
          className="accordion__body"
          id={`accordion__body-${props.itemKey}`}>
          {props.children}
        </AccordionItemBody>
      </AccordionItem>
    </Accordion>
  );
};

const MySongAccordions = ({ dataSource, title, itemKey }) => (
  <MySongAccordion itemKey={itemKey} title={title} num={dataSource.length}>
    {dataSource.map((v, i) => {
      return (
        <SongList
          key={`${v.title}_${i}`}
          title={v.title}
          imgUrl={v.imgUrl}
          num={v.num}
        />
      );
    })}
  </MySongAccordion>
);

export default MySongAccordions;
