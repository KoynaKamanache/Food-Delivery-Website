import React from 'react'

// mongoimport --uri "mongodb+srv://Food-Delivery-Website:Kaybgm2518@cluster0.0bdwwja.mongodb.net/Food-delivery" --collection food_items --jsonArray --file "C:/Users/koyna/OneDrive/Desktop/foodData2.json"

function Carousel() {
  return (
    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit:"contain "}}>
        <div className="carousel-inner" id='carousel'>
        <div className="carousel-caption" style={{zIndex:"10"}}>
        <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success text-white" type="submit">Search</button>
    </form>
            </div>
            <div className="carousel-item active">
            <img src="/burger.jpg" className="d-block w-100" alt="..." style={{filter:"brightness(30%)"}}/>
            </div>
            <div className="carousel-item">
            <img src="/biryani.jpg" className="d-block w-100" alt="..." style={{filter:"brightness(30%)"}}/>
            </div>
            <div className="carousel-item ">
            <img src="/dessert.jpg" className="d-block w-100 " alt="..." style={{filter:"brightness(30%)"}}/>
            </div>
            <div className="carousel-item ">
            <img src="/momos.jpg" className="d-block w-100" alt="..." style={{filter:"brightness(30%)"}}/>
            </div>
            <div className="carousel-item ">
            <img src="/soups.jpg" className="d-block w-100 " alt="..." style={{filter:"brightness(30%)"}}/>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
  )
}

export default Carousel