import Section from '@shared/section';
import classNames from 'classnames/bind';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './image-viewer.module.scss';
import './swiper.css';
const cx = classNames.bind(styles);

export const ImageViewer = ({
  images,
  open = false,
  selectedIdx,
  onClose,
}: {
  images?: string[];
  open: boolean;
  selectedIdx: number;
  onClose: () => void;
}) => {
  if (open === false) {
    return null;
  }
  return (
    <Section className={cx('dimmed')}>
      <CloseButton className={cx('ico-close')} onClose={onClose} />
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        initialSlide={selectedIdx}
      >
        {images?.map((src, i) => {
          return (
            <SwiperSlide key={i}>
              <img src={src} alt="이미지 뷰어" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Section>
  );
};

const CloseButton = ({
  className,
  onClose,
}: {
  className: string;
  onClose: () => void;
}) => {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClose}
    >
      <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm1.41-1.41A8 8 0 1 0 15.66 4.34 8 8 0 0 0 4.34 15.66zm9.9-8.49L11.41 10l2.83 2.83-1.41 1.41L10 11.41l-2.83 2.83-1.41-1.41L8.59 10 5.76 7.17l1.41-1.41L10 8.59l2.83-2.83 1.41 1.41z" />
    </svg>
  );
};
