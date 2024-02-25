import { TbError404 } from 'react-icons/tb';
import { MdArrowBackIos } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className='error_page'>
      <TbError404 size={200} color='#EF4C5D' />
      <Link to='/' className='go_back btn btn-primary'>
        <MdArrowBackIos />
        <span>Go Back</span>
      </Link>
    </div>
  );
};

export default Error;
