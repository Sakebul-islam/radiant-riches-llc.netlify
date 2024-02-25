import { useState } from 'react';
import { useEffect } from 'react';
import DealsCard from './DealCard';

const Deals = () => {
  const [deals, setDeals] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await fetch('./deals.json');
      const data = await res.json();
      setDeals(data);
    })();
  }, []);

  return (
    <div className='deals'>
      <div className='container'>
        <div className='deals__header'>
          <h3>Related deals you might like for</h3>
        </div>
        <div className='deals__wrapper'>
          <div className='row'>
            {deals?.map((deal) => (
              <DealsCard key={deal?._id} deal={deal} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deals;
