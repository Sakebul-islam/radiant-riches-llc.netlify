import { Link } from 'react-router-dom';

import { IoIosArrowDown } from 'react-icons/io';
import check from '../assets/images/icons/check.svg';
import info from '../assets/images/icons/update-icon-2.svg';

import { IoIosStarHalf, IoIosStar } from 'react-icons/io';

const BuilderCard = ({ builder }) => {
  const isFraction = (num) => Number.isFinite(num) && !Number.isInteger(num);

  return (
    <div className='builder_card col-12'>
      <span className='builder_id'>{builder?.id}</span>
      <figure className='builder_card__thumb'>
        <img src={builder?.imageURL} className='card-img-top' alt='...' />
        <span className='thumb_title'>{builder?.imageTitle}</span>
      </figure>
      <div className='builder_card__body'>
        <div
          className='content-top'
          dangerouslySetInnerHTML={{ __html: builder?.contentTop }}
        />
        <h6 className='content-title'>{builder?.contentTitle}</h6>
        {builder?.content ? (
          <div className='content'>
            <p>{builder?.content}</p>
          </div>
        ) : (
          <div
            className='content-list'
            dangerouslySetInnerHTML={{ __html: builder?.contentList }}
          ></div>
        )}
        {builder?.wishTitle && (
          <div className='wish'>
            <h6 className='wish-title'>{builder?.wishTitle}</h6>
            <div className='wish-list'>
              <ul>
                {builder.wishList.map((item, index) => (
                  <li key={index}>
                    <img src={check} alt='check' />
                    <p key={index}>{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
        <Link className='see-more' to='/'>
          <span>Show more</span>
          <IoIosArrowDown />
        </Link>
      </div>
      <div className='builder_card__footer'>
        <div className='review'>
          <div className='review_container'>
            <img className='info' src={info} alt='info' />
            <h3>{builder?.rating}</h3>
            <span>{builder?.ratingStatus}</span>
            <div className='ratings'>
              {Array.from({ length: Math.floor(builder?.stars) }).map(
                (_, index) => (
                  <IoIosStar color='#FFB80F' key={index} />
                )
              )}
              {isFraction(builder?.stars) && <IoIosStarHalf color='#FFB80F' />}
            </div>
          </div>
          <button>View</button>
        </div>
      </div>
    </div>
  );
};

export default BuilderCard;
