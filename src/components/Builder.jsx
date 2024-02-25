import { Link } from 'react-router-dom';
import updateIcon1 from '../assets/images/icons/update-icon-1.svg';
import updateIcon2 from '../assets/images/icons/update-icon-2.svg';
import breadcrumb from '../assets/images/icons/breadcrumb.svg';
import { useEffect, useState } from 'react';
import BuilderCard from './BuilderCard';

const Builder = () => {
  const [builders, setBuilders] = useState();
  useEffect(() => {
    (async () => {
      const res = await fetch('./builders.json');
      const data = await res.json();
      setBuilders(data);
    })();
  }, []);

  return (
    <div className='builder'>
      <div className='container'>
        <div className='builder__header'>
          <h2>Best Website builders in the US</h2>
          <hr className='divider' />
          <div className='builder__updates d-flex flex-column flex-md-row justify-content-between align-items-center'>
            <div className='d-flex flex-column flex-md-row'>
              <div className='d-flex flex-row align-items-center'>
                <img src={updateIcon1} alt='' />
                <p>Last Updated - February 22, 2020</p>
              </div>
              <div className='d-flex flex-row align-items-center'>
                <img src={updateIcon2} alt='' />
                <p>Advertising Disclosure</p>
              </div>
            </div>
            <div className='dropdown'>
              <button
                className='btn dropdown-toggle ps-0'
                type='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Top Relevant
              </button>
              <ul className='dropdown-menu'>
                <li>
                  <a className='dropdown-item' href='#'>
                    Relevant-1
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Relevant-2
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Relevant-3
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr className='divider' />
          <div className='builder__tag'>
            <span>Tools</span>
            <span>AWS Builder</span>
            <span>Start Build</span>
            <span>Build Supplies</span>
            <span>Tooling</span>
            <span>BlueHosting</span>
          </div>
          <div className='builder__breadcrumb'>
            <nav
              aria-label='breadcrumb'
              style={{
                '--bs-breadcrumb-divider': `url(${breadcrumb})`,
              }}
            >
              <ol className='breadcrumb'>
                <li className='breadcrumb-item'>
                  <Link to='#'>Home</Link>
                </li>
                <li className='breadcrumb-item'>
                  <Link to='#'>Hosting for all</Link>
                </li>
                <li className='breadcrumb-item'>
                  <Link to='#'>Hosting</Link>
                </li>
                <li className='breadcrumb-item'>
                  <Link to='#'>Hosting6</Link>
                </li>
                <li className='breadcrumb-item active' aria-current='page'>
                  Hosting5
                </li>
              </ol>
            </nav>
          </div>
          <div className='builder__cards row'>
            {builders?.map((builder) => (
              <BuilderCard key={builder?.id} builder={builder} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Builder;
