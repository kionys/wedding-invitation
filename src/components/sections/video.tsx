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
        <source src="/assets/main.mp4" type="video/mp4" />
      </video>
    </Section>
  );
};
export default Video;
