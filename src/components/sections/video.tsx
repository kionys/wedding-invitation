import Section from '@shared/section';
import classNames from 'classnames/bind';
import styles from './video.module.scss';

const cx = classNames.bind(styles);

const Video = () => {
  return (
    <Section className={cx('container')}>
      <video
        autoPlay={true}
        muted={true}
        loop={true}
        // controls={true}
        poster={'/assets/poster.jpg'}
      >
        {/* 
          source 태그 방식은 여러 확장자를 가진 영상을 대체제로 사용이 가능하도록합니다.
          ex) mp4 영상을 사용하지못하는 브라우저이다? webm 형식의 영상으로 자동으로 대체해준다.
        */}
        <source src="/assets/main.webm" type="video/webm" />
        <source src="/assets/main.mp4" type="video/mp4" />
      </video>
    </Section>
  );
};
export default Video;
