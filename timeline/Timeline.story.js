import React from 'react';
import styled from 'styled-components';
import AvatarDetails from '../avatar/AvatarDetails';
import Avatar from '../avatar/Avatar';
import { addStories } from '../../utils/stories';
import Table from '../table/Table';
import Timeline from './Timeline';

const stories = addStories('Components', 'Timeline');

const Container = styled.div`
  width: 1400px;
  padding: 20px;
`;
const TimelineEvent = () => (
  <AvatarDetails
    firstName="Dua"
    lastName="Lipa"
    text="Bae"
    image="https://junkee.com/wp-content/uploads/2018/03/dua-bigger-head.png"
  />
);

const tableData = [
  {
    first: 'Dua',
    last: 'Lipa',
    image: 'https://junkee.com/wp-content/uploads/2018/03/dua-bigger-head.png',
  },
  {
    first: 'Dua',
    last: 'Lipa',
    image: 'https://junkee.com/wp-content/uploads/2018/03/dua-bigger-head.png',
  },
  {
    first: 'Dua',
    last: 'Lipa',
    image: 'https://junkee.com/wp-content/uploads/2018/03/dua-bigger-head.png',
  },
];

const ListDuas = () => (
  <Table leftBorder data={tableData} onClick={() => alert('hello')}>
    <Table.Column title="First Name">
      {({ image }) => <Avatar image={image} size="small" />}
    </Table.Column>
    <Table.Column title="First Name">
      {({ first }) => <>{first}</>}
    </Table.Column>
    <Table.Column title="Last Name">{({ last }) => <>{last}</>}</Table.Column>
  </Table>
);

const events = [
  { timestamp: '2017-03-17T12:22:46.587Z', component: <TimelineEvent /> },
  { timestamp: '2017-09-18T12:22:46.587Z', component: <TimelineEvent /> },
  { timestamp: '2017-10-15T12:22:46.587Z', component: <TimelineEvent /> },
  { timestamp: '2017-09-17T12:22:46.587Z', component: <TimelineEvent /> },
  { timestamp: '2017-09-17T12:22:46.587Z', component: <TimelineEvent /> },
  { timestamp: '2017-09-13T12:22:46.587Z', component: <TimelineEvent /> },
  {
    timestamp: '2017-12-13T12:22:46.587Z',
    component: <div>This is just a div with text</div>,
  },
  { timestamp: '2017-03-11T12:22:46.587Z', component: <TimelineEvent /> },
  { timestamp: '2017-02-09T12:22:46.587Z', component: <ListDuas /> },
  { timestamp: '2017-09-20T12:22:46.587Z', component: <ListDuas /> },
];

stories.add('Timeline', () => (
  <Container>
    <Timeline items={events} />
  </Container>
));
