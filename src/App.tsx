import { IWedding } from '@models/wedding';
import FullScreenMessage from '@shared/full-screen-message';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import styles from './App.module.scss';
import Heading from './components/sections/heading';
import Video from './components/sections/video';

const cx = classNames.bind(styles);

function App() {
  const [wedding, setWedding] = useState<IWedding | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // 1. wedding 데이터 호출
  useEffect(() => {
    setLoading(true);

    fetch('http://localhost:8888/wedding')
      .then((res) => {
        if (res.ok === false) {
          throw new Error('청첩장 정보를 불러오지 못했습니다.');
        }
        return res.json();
      })
      .then((data) => {
        setWedding(data);
      })
      .catch((e) => {
        console.log(e);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <FullScreenMessage type="loading" />;
  }
  if (error) {
    return <FullScreenMessage type="error" />;
  }
  if (wedding === null) {
    return null;
  }
  const { date } = wedding;
  return (
    <div className={cx('container')}>
      {JSON.stringify(wedding)}
      <Heading date={date} />
      <Video />
    </div>
  );
}

export default App;
