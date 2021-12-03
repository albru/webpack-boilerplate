import React, { useEffect, ReactElement } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import listEntity from '@/entities/list/model';
import { getList } from '@/entities/list/model/slice';
import { AppDispatch } from '@/shared/types/redux';

import styles from './index.module.css';

const Home = (): ReactElement => {
  const {
    listSelectors: { listSelector },
  } = listEntity;
  const dispatch = useDispatch<AppDispatch>();
  const listData = useSelector(listSelector);

  useEffect(() => {
    dispatch(getList());
  }, [dispatch]);

  return (
    <div>
      <nav>
        <Link className={styles.link} to='/about'>
          About
        </Link>
      </nav>
      <br />
      <br />
      <h2>Welcome</h2>
      <h3>Date :{new Date().toDateString()}</h3>
      <div>{listData && listData.toString()}</div>
    </div>
  );
};

export default Home;
