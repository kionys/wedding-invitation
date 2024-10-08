import classNames from 'classnames/bind';
import styles from './dimmed.module.scss';

const cx = classNames.bind(styles);

const Dimmed = ({ children }: { children: React.ReactNode }) => {
  return <div className={cx('dimmed')}>{children}</div>;
};
export default Dimmed;
