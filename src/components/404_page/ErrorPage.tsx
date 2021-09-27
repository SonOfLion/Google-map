import { Link } from 'react-router-dom';

import './ErrorPage.scss';

const ErrorPage = () => {
  return (
    <>
      <div className="wrapper-error-page">
        <h1>Page not found</h1>
        <Link to="/">Go to back</Link>
      </div>
    </>
  )
};

export default ErrorPage;