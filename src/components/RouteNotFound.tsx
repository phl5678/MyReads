import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="container">
      <div className="not-found">
        <h3>Page Not Found</h3>
        <Link to="/">Return to Home page</Link>
      </div>
    </div>
  );
};
export default NotFound;
