'use client';

type Props = {
  error: Error;
  reset: () => void;
};
const ErrorPage = (props: Props) => {
  return <div>{props.error.message}</div>;
};
export default ErrorPage;
