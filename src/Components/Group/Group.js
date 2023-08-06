import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Group.css'

function Group() {
    const responsive = {
        superLargeDesktop: {
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

<h2>Stress-Free Holidays with GT</h2>
<Carousel responsive={responsive}>

<div className='card_carosel'>
<img src='/images/group/group-1.jpg' className='group'/>
</div>

<div className='card_carosel'>
<img src='/images/group/group-2.jpg' className='group'/>
</div>


<div className='card_carosel'>
<img src='/images/group/group-3.jpg' className='group'/>
</div>


<div className='card_carosel'>
<img src='/images/group/group-4.jpg' className='group'/>
</div>


<div className='card_carosel'>
<img src='/images/group/group-5.jpg' className='group'/>
</div>


<div className='card_carosel'>
<img src='/images/group/group-6.jpg' className='group'/>
</div>


<div className='card_carosel'>
<img src='/images/group/group-7.jpg' className='group'/>
</div>

  
</Carousel>;

<center><button className='know'>K N O W  &nbsp;M O R E</button></center>

<h2>GT Exclusive Collection</h2><br/>

<p>GT’s exclusive collection of hotels and resorts are selected carefully and hand picked such that they are unique on their own stay. All these premium properties will deliver the best vacation to the guests.
</p><br/>

</div>


  </>
}

export default Group
