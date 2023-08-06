import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./Card.css"

function Card() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 2000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 2000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  
  return (
   <>
   <div className='container'>

      <h2>Stress-Free Holidays with GT</h2>
   <Carousel responsive={responsive}>

  <div className='card_carosel'>
      <img src='/images/card-gt-1.jpg' className='img'/>
  </div>
  <div>
  <img src='/images/card-gt-2.jpg' className='img'/>
  </div>
  <div>
  <img src='/images/card-gt-5.jpg' className='img'/>
  </div>
  <div>
  <img src='/images/card-gt.jpg' className='img'/>
  </div>
  <div>
  <img src='/images/gt-5.jpg' className='img'/>
  </div>
  </Carousel>;

      <h2>GT Group Departures</h2>
        <div className='departure'>
          <img src='/images/Gt-tour-.jpeg' className='package'/>
        </div>

    </div><br/> <br/>
   </>
  )
}

export default Card
