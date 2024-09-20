import classNames from 'classnames/bind';
import { PropsWithChildren, useState } from 'react';
import styles from './accordion.module.scss';

const cx = classNames.bind(styles);

interface IPropsAccordion {
  label: string;
}

const Accordion = ({ label, children }: PropsWithChildren<IPropsAccordion>) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded((prev) => !prev);
  };
  return (
    <div className={cx('wrap-accordion', expanded ? 'open' : '')}>
      <div className={cx('wrap-header')} onClick={handleToggle}>
        <span>{label}</span>
        <IconArrowDown classNames={cx('ico-arrow-down')} />
      </div>
      <div className={cx('wrap-content')}>{children}</div>
    </div>
  );
};

export default Accordion;

const IconArrowDown = ({ classNames }: { classNames: string }) => {
  return (
    <svg fill="none" viewBox="0 0 24 24" className={classNames}>
      <path
        d="M6 9L12 15L18 9"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
