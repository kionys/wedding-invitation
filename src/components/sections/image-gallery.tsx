import Section from '@shared/section';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { ImageViewer } from '../image-viewer/image-viewer';
import styles from './image-gallery.module.scss';

const cx = classNames.bind(styles);

const ImageGallery = ({ images }: { images: string[] }) => {
  const [selectedIdx, setSelectedIdx] = useState(-1);

  const open = selectedIdx > -1;

  const onClickImageOpen = (idx: number) => {
    setSelectedIdx(idx);
  };

  const onClickImageClose = () => {
    setSelectedIdx(-1);
  };
  return (
    <>
      <Section className={cx('container')} title="사진첩">
        <ul className={cx('wrap-images')}>
          {images.map((src, i) => {
            return (
              <li
                key={i}
                className={cx('wrap-image')}
                onClick={() => onClickImageOpen(i)}
              >
                {/* picture 태그로 이미지 성능 최적화 */}
                <picture>
                  <source srcSet={`${src}.webp`} type="image/webp" />
                  <img src={`${src}.jpg`} alt="사진첩 이미지" />
                </picture>
              </li>
            );
          })}
        </ul>
      </Section>
      <ImageViewer
        images={images}
        open={open}
        selectedIdx={selectedIdx}
        onClose={onClickImageClose}
      />
    </>
  );
};
export default ImageGallery;
