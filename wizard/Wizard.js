import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { color, ifNotProp, switchProp } from '@clubware/hexcalibur';
import T from 'prop-types';

const WizardContainer = styled.div``;

const WizardList = styled.div`
  display: flex;
  flex-direction: row;
`;

const Steps = styled.div`
  width: 67px;
`;

const StepContent = styled.div`
  margin-top: 16px;
`;

const Indicator = styled.div`
  position: relative;
  height: 8px;
  width: 8px;
  border-radius: 50%;
  ${switchProp('state', {
    active: css`
      border: 2px solid ${color('branding.main')};
      background-color: ${color('branding.main')};
    `,
    complete: css`
      border: 2px solid ${color('branding.main')};
      background-color: ${color('branding.main')};
    `,
    next: css`
      background-color: transparent;
      border: 2px solid ${color('theme.monochromeMix75')};
    `,
    inactive: css`
      background-color: ${color('theme.monochromeMix75')};
      border: 2px solid ${color('theme.monochromeMix75')};
    `,
  })}
  &:after {
    ${ifNotProp(
      'last',
      css`
        content: '';
        position: absolute;
        height: 2px;
        width: ${260 / 4}px;
        top: 1px;
        left: 6px;
        ${switchProp('state', {
          inactive: css`
            background-color: ${color('theme.monochromeMix75')};
          `,
          active: css`
            background-color: ${color('branding.main')};
            left: 0px;
          `,
          complete: css`
            background-color: ${color('branding.main')};
            left: 0px;
          `,
          next: css`
            background-color: ${color('theme.monochromeMix75')};
          `,
        })};
      `
    )}
  }
`;

const Wizard = ({ steps }) => {
  const [active, setActive] = useState(0);

  const activeComponent = steps[active];

  const prev = () => (active === 0 ? null : setActive(active - 1));
  const next = () =>
    active === steps.length - 1 ? null : setActive(active + 1);

  return (
    <WizardContainer>
      <WizardList>
        {steps.map((step, i, array) => {
          const last = i === array.length - 1;
          const current = i === active || i < active;
          const next = i === active + 1;
          return (
            <div key={i}>
              <Steps>
                <Indicator
                  state={current ? 'active' : next ? 'next' : 'inactive'}
                  last={last}
                />
              </Steps>
            </div>
          );
        })}
      </WizardList>
      <StepContent>
        {React.cloneElement(activeComponent, { next, prev })}
      </StepContent>
    </WizardContainer>
  );
};

Wizard.propTypes = {
  steps: T.arrayOf(T.node).isRequired,
};

export default Wizard;
