import Section from '@shared/section';
import classNames from 'classnames/bind';
import { format, getDay, parseISO } from 'date-fns';
import styles from './heading.module.scss';

const cx = classNames.bind(styles);

const DAYS = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const Heading = ({ date }: { date: string }) => {
  const weddingDate = parseISO(date);
  const weddingDay = getDay(weddingDate);
  return (
    <Section className={cx('container')}>
      <div className={cx('txt-date')}>{format(weddingDate, 'yy.MM.dd')}</div>
      <div className={cx('txt-day')}>{DAYS[weddingDay]}</div>
    </Section>
  );
};
export default Heading;
