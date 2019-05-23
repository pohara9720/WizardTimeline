import React from 'react';

import styled from 'styled-components';
import T from 'prop-types';
import Button from '../button/Button';
import { addStories } from '../../utils/stories';
import Gapper from '../../layout/Gapper/Gapper';
import Heading from '../../text/heading/Heading';
import Wizard from './Wizard';

const stories = addStories('Components', 'Wizard');

const SampleComponent = styled.div`
  padding: 20px;
  background: white;
  width: 500px;
`;

const Comp = ({ step, next, prev }) => {
  return (
    <SampleComponent>
      <Heading level={2}>
        This is step {step} and i am receiving next and previous functions from
        my parent so i can navigate through the wizard
      </Heading>
      <Gapper gap={8} inline>
        <Button color="secondary" onClick={() => prev()}>
          prev
        </Button>
        <Button color="primary" onClick={() => next()}>
          next
        </Button>
      </Gapper>
    </SampleComponent>
  );
};

Comp.propTypes = {
  step: T.string.isRequired,
  next: T.func,
  prev: T.func,
};

Comp.defaultProps = {
  next: undefined,
  prev: undefined,
};

const steps = [
  <Comp step={'1'} />,
  <Comp step={'2'} />,
  <Comp step={'3'} />,
  <Comp step={'4'} />,
  <Comp step={'5'} />,
];

stories.add('Basic', () => (
  <>
    <Wizard steps={steps} />
  </>
));
