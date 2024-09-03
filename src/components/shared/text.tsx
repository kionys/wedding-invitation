import { Fragment } from 'react';

const Text = ({ children }: { children: string }) => {
  const message = children.split('\n').map((str, i, array) => {
    return (
      <Fragment key={i}>
        {str}
        {i === array.length - 1 ? null : <br />}
      </Fragment>
    );
  });

  return <div>{message}</div>;
};
export default Text;
