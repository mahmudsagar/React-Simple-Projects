import React, { useState } from 'react';

const Tour = ({id, image, info, price, name, removeTour}) => {
    const [reaMore, setReadMore] = useState(false)

  return (
      <article className="single-tour">
          <img src={image} alt={name} />
          <footer>
              <div className="tour-info">
                  <h4>{name}</h4>
                  <h4 className="tour-price">${price}</h4>
              </div>
              <p>
                  {reaMore ? info : `${info.substring(0,200)}....`}
                  <button onClick={() =>{setReadMore(!reaMore)}}>{reaMore ? 'show less' : 'read more'}</button>
              </p>
              <button onClick={() => {removeTour(id)}} className="delete-btn">not interested</button>
          </footer>
      </article>
  )
};

export default Tour;
