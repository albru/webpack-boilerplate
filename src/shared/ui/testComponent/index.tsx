import React, { ReactElement } from 'react';

import { getSum } from '@/shared/lib/helpers/getSum';

import styles from './styles.module.css';
import { Test } from './types';

const TestComponent = (): ReactElement => {
  const a: Test = {
    E: 'one',
    A: 'four',
  };

  return (
    <>
      <div>{JSON.stringify(a, null, 2)}</div>
      <div className={styles.red}>TEST COMPONENT 444</div>
      <div className={styles.yellow}>TEST COMPONENT</div>
      {getSum(1, 4)}
      <br />
      <br />
      <br />
    </>
  );
};

export default TestComponent;
