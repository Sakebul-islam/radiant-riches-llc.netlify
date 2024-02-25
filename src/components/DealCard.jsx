import { Link } from 'react-router-dom';

const DealsCard = ({ deal }) => {
  return (
    <div className='deal_card col-md-6 col-lg-4 mb-4 mb-lg-0'>
      <div className='card'>
        <div className='deal_card__thumb'>
          <img src={deal?.imageURL} className='card-img-top' alt='...' />
        </div>
        <div className='card-body deal_card__content'>
          <div className='card-body__top'>
            <p>
              <span>{deal?.discount}</span>
              <span>{deal?.limitedTime}</span>
            </p>
            <h6 className='title'>{deal?.title}</h6>
          </div>
          <div className='card-body__center'>
            <p className='card-text'>{deal?.description}</p>
            <span className='span-1'>${deal?.price}</span>
            <sub>
              <span className='span-2'>${deal?.discountedPrice}</span>
              <span className='span-3'>({deal?.discount})</span>
            </sub>
          </div>
          <div className='card-body__bottom'>
            <Link to='#'>View Deal</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealsCard;
