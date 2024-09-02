import classNames from 'classnames/bind';
import styles from './section.module.scss';

const cx = classNames.bind(styles);

const Section = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <section className={cx(['container', className])}>{children}</section>;
};
export default Section;
