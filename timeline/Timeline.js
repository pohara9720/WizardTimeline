import React from 'react';
import T from 'prop-types';
import moment from 'moment';
import styled from 'styled-components';
import { color } from '@clubware/hexcalibur';

const TimelineContainer = styled.div``;

const TimeLabel = styled.li`
  margin-left: 40px;
  font-size: 12px;
  padding: 10px;
  display: inline-block;
  color: ${color('monochromeMix50')};
`;

const TimelineList = styled.ul`
  position: relative;
  margin: 0 0 0px 0;
  padding: 0;
  list-style: none;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: -35px;
    width: 2px;
    background: ${color('theme.monochromeMix35')};
    left: 32px;
    border-radius: 2px;
  }
`;

const TimelineEvent = styled.div`
  margin: 0 15px 8px 50px;
`;

const Indicator = styled.i`
  position: absolute;
  border-radius: 50%;
  width: 8px;
  height: 8px;
  left: 29px;
  top: 14px;
  background: white;
  border: 2px solid ${color('theme.monochromeMix35')};
  display: inline-block;
  box-sizing: border-box;
`;

const formatItems = items => {
  const sortedItems = items.sort(
    (a, b) => moment(a.timestamp) - moment(b.timestamp)
  );
  const records = {};
  sortedItems.forEach(({ timestamp, component }, key) => {
    const date = moment(timestamp).format("DD MMMM 'YY");
    const list = records[date] || [];
    list.push({
      date,
      component,
      key,
    });
    records[date] = list;
  });
  return records;
};

const Timeline = ({ items }) => {
  const records = formatItems(items);
  const dates = Object.keys(records);
  return (
    <TimelineContainer>
      {dates.map((date, i) => (
        <TimelineList key={i}>
          <TimeLabel>{date}</TimeLabel>
          {records[date].map(({ component }, j) => (
            <TimelineEvent key={j}>
              <Indicator />
              {component}
            </TimelineEvent>
          ))}
        </TimelineList>
      ))}
    </TimelineContainer>
  );
};

Timeline.propTypes = {
  items: T.arrayOf(
    T.shape({
      timestamp: T.string.isRequired,
      component: T.node.isRequired,
    })
  ).isRequired,
};

export default Timeline;
