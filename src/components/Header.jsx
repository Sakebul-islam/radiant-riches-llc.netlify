import { CiSearch } from 'react-icons/ci';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header-section'>
      <nav className='navbar navbar-expand-lg'>
        <div className='container'>
          <Link className='navbar-brand' to='#'></Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <form className='' role='search'>
              <input
                className='form-control me-2'
                type='search'
                aria-label='Search'
              />
              <button className='btn' type='submit'>
                <CiSearch className='' size={24} />
              </button>
            </form>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <Link className='nav-link active' aria-current='page' to='#'>
                  Categories Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='#'>
                  Website Builders
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='#'>
                  Today's deals
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
