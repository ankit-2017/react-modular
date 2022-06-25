import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPublicIp } from 'components/Home/Home.slice';
import Features from './Features';
import Styles from './Home.module.scss';

const Home = () => {
  const { data } = useSelector((state) => state.home);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPublicIp());
  }, []);

  return (
    <div className={Styles.homeContainer}>
      <h1>Welcome to React starter Kit</h1>
      <div className={Styles.showIpAddress}>
        <p>
          public Ip:
          {' '}
          {data?.ip}
        </p>
      </div>
      <Features />
    </div>
  );
};

export default Home;
