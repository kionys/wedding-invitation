import { ILocation } from '@/models/wedding';
import Section from '@shared/section';
import classNames from 'classnames/bind';
import { useEffect, useRef } from 'react';
import styles from './map.module.scss';

declare global {
  interface Window {
    kakao: any;
  }
}
const cx = classNames.bind(styles);

const KaKaoMap = ({ location }: { location: ILocation }) => {
  const mapContainer = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_APP_KEY}&autoload=false`;
    script.async = true;
    script.defer = true;

    document.head.appendChild(script);

    script.onload = () => {
      if (window.kakao && window.kakao.maps) {
        window.kakao.maps.load(() => {
          const position = new window.kakao.maps.LatLng(
            location.lat,
            location.lng,
          );
          const options = {
            center: position,
            level: 3,
          };
          const map = new window.kakao.maps.Map(mapContainer.current, options);
          const marker = new window.kakao.maps.Marker({
            position,
          });
          marker.setMap(map);
        });
      }
    };

    // clean-up
    return () => {
      document.head.removeChild(script);
    };
  }, [location]);

  return (
    <Section
      className={cx('container')}
      title={
        <div className={cx('wrap-header')}>
          <span className={cx('txt-title')}>오시는길</span>
          <span className={cx('txt-subtitle')}>{location.name}</span>
          <span className={cx('txt-subtitle')}>{location.address}</span>
        </div>
      }
    >
      <div className={cx('wrap-map')}>
        <div ref={mapContainer} className={cx('map')}></div>
        <a
          className={cx('btn-find-way')}
          href={location.link}
          target="_blank"
          rel="noreferrer"
        >
          길찾기
        </a>
      </div>
      <div>
        <WayToCome label="버스" list={location.waytocome.bus} />
        <WayToCome label="지하철" list={location.waytocome.metro} />
      </div>
    </Section>
  );
};

export default KaKaoMap;

const WayToCome = ({
  label,
  list,
}: {
  label: React.ReactNode;
  list: string[];
}) => {
  return (
    <div className={cx('wrap-waytocome')}>
      <div className={cx('txt-label')}>{label}</div>
      <ul>
        {list.map((waytocome) => (
          <li>{waytocome}</li>
        ))}
      </ul>
    </div>
  );
};
