import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='row gap-4 gap-md-0'>
          <div className='col-md-4'>
            <p className=''>Categories</p>
            <ul className='footer__list'>
              <li>
                <Link to='#'>Web Builder</Link>
              </li>
              <li>
                <Link to='#'>Hosting</Link>
              </li>
              <li>
                <Link to='#'>Data Center</Link>
              </li>
              <li>
                <Link to='#'>Robotic-Automation</Link>
              </li>
            </ul>
          </div>
          <div className='col-md-4'>
            <p className=''>Contact</p>
            <ul className='footer__list'>
              <li>
                <Link to='#'>Contact</Link>
              </li>
              <li>
                <Link to='#'>Privacy Policy</Link>
              </li>
              <li>
                <Link to='#'>Terms Of Service</Link>
              </li>
              <li>
                <Link to='#'>Categories</Link>
              </li>
              <li>
                <Link to='#'>About</Link>
              </li>
            </ul>
          </div>
          <div className='col-md-4 d-flex flex-column align-items-start justify-content-center'>
            <div className='dropdown'>
              <button
                className='btn dropdown-toggle ps-0'
                type='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                United States
              </button>
              <ul className='dropdown-menu'>
                <li>
                  <a className='dropdown-item' href='#'>
                    Bangladesh
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    India
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Japan
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
