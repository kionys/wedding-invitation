import { Fragment } from 'react';

const styles = { fontSize: '17px' };

const Text = ({ children }: { children: string }) => {
  const message = children.split('\n').map((str, i, array) => {
    return (
      <Fragment key={i}>
        {str}
        {i === array.length - 1 ? null : <br />}
      </Fragment>
    );
  });

  return <div style={styles}>{message}</div>;
};
export default Text;
