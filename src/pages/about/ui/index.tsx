import React, { ReactElement } from 'react';

import { DateInput, Badge, Button } from '@mozaic-ds/react';
import { Link } from 'react-router-dom';

import TestComponent from '@/shared/ui/testComponent';

const About = (): ReactElement => (
  <div>
    <nav>
      <Link to='/'>Home Page</Link>
    </nav>
    <br />
    <br />
    <div>About Page</div>
    <TestComponent />
    <Button size='m' theme='primary-02' variant='solid' width='fit' title='Mozaic button'>
      {' '}
      MOZAIC BTN
    </Button>
    <Badge theme='success'>Badge</Badge>
    <DateInput title='date input' />
  </div>
);

export default About;
