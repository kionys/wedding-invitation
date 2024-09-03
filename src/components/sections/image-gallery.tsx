import Section from '@shared/section';
import classNames from 'classnames/bind';
import styles from './image-gallery.module.scss';

const cx = classNames.bind(styles);

const ImageGallery = ({ images }: { images: string[] }) => {
  return (
    <Section className={cx('container')} title="사진첩">
      <ul className={cx('wrap-images')}>
        {images.map((src, i) => {
          return (
            <li key={i} className={cx('wrap-image')}>
              <img src={src} alt="사진첩 이미지" />
            </li>
          );
        })}
      </ul>
    </Section>
  );
};
export default ImageGallery;
