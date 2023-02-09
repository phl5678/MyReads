import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="list-books-title">
      <h1>
        <Link to="/" className="list-books-title-link">
          MyReads
        </Link>
      </h1>
    </div>
  );
};

export default Header;
