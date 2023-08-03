import React from 'react'
import './Carosel.css'

function Carosel() {
  return <>
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src='/images/pic.jpg' class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        {/* <p>Some representative placeholder content for the first slide.</p> */}
      </div>
    </div>
    <div class="carousel-item">
      <img src='/images/pic-1.jpeg' class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        {/* <p>Some representative placeholder content for the second slide.</p> */}
      </div>
    </div>
    <div class="carousel-item">
      <img src="/images/img-3.jpg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        {/* <p>Some representative placeholder content for the third slide.</p> */}
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>


  <img src='/images/gt-4.jpeg' className='last-img'/><br/><br/><br/>

  <div className='container'>
      <h1>Welcome to GT Holidays</h1><br/>

      <p>GT Holidays Pvt. Ltd is a subsidiary of Sangam Group of Hotels, one of the biggest hotel chains in south Tamil Nadu. The Sangam Group of Hotels founded in 1968 has for forty years provided impeccable service and 
        outstanding hospitality. It currently has 19 properties in Tamil Nadu. 
        GT Holidays Pvt. Ltd built on this strong foundation aims to provide great customer satisfaction and an exemplary holiday experience. 
        Planning a once in a lifetime holiday or a yearly corporate retreat? No problem! GT Holidays can get you what you want and in the minimal time. One of the best destination management companies in South India, 
        it has the experience and infrastructure to handle any customer demand. In addition to destination management, GT Holidays also plans corporate tours, incentive trips, college/school excursions, business travel, arranges car/railway & hotel bookings and much, much more.
</p><br/>

        <p>Discover what makes GT Holidays and its offerings distinct from the rest of the pack and indispensable to its customers.
</p>

  </div>
  </>
}

export default Carosel
