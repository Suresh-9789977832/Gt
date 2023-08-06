import React from 'react'
import "./Popular.css"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Popular() {
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
    
  return <>
    <div className='container'>

    <Carousel responsive={responsive}>

<div className='card_carosel'>
<img src='/images/popular/pop-1.jpg' className='group'/>
</div>

<div className='card_carosel'>
<img src='/images/popular/pop-2.jpg' className='group'/>
</div>


<div className='card_carosel'>
<img src='/images/popular/pop-3.jpg' className='group'/>
</div>


<div className='card_carosel'>
<img src='/images/popular/pop-4.jpg' className='group'/>
</div>


<div className='card_carosel'>
<img src='/images/popular/pop-5.jpg' className='group'/>
</div>


<div className='card_carosel'>
<img src='/images/popular/pop-6.jpg' className='group'/>
</div>


<div className='card_carosel'>
<img src='/images/popular/pop-7.jpg' className='group'/>
</div>


<div className='card_carosel'>
<img src='/images/popular/pop-8.jpg' className='group'/>
</div>


<div className='card_carosel'>
<img src='/images/popular/pop-9.jpg' className='group'/>
</div>


<div className='card_carosel'>
<img src='/images/popular/pop-10.jpg' className='group'/>
</div>

      
</Carousel>;

<center><button className='know'>V I E W &nbsp;A L L</button></center>

    
            


    </div>
  </>
}

export default Popular
