
"use client"

import Link from 'next/link';
import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

export default async function Page(props) {

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    arrows: false, 
    autoplaySpeed: 1000,
  };
  


  const id = props.params.id;

  async function getDetails() {
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '47755142a3msh00047811fe623ebp125a57jsn968c763628f8',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
    };

    try {
      const res = await fetch(url, options);
      const data = await res.json();
      console.log(data , "daaaataaa");
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  const dataa = await getDetails();

  return (
    <>

     
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <img src={dataa && dataa.thumbnail} className='w-100 mt-5' alt="gameImage" />
              <Slider {...settings} className='my-4'>
              {dataa && dataa.screenshots.map((screenshot, index) => (
  <img key={index} src={screenshot.image} className='w-100' alt={`Screenshot ${index}`} />
  

))}
    </Slider>

            </div>
            <div className="col-md-8 mt-5 text-white">
              <ol className='nav-list'>
                <div className="d-flex">
                  <li>
                    <Link className='nav-link text-decoration-none' href="/mmorpg">
                      <span className='text-white fw-bolder'> Home </span>
                    </Link>
                  </li>
                  <li> <span className='titleGame fw-bolder'> / {dataa.title} </span> </li>
                </div>
              </ol>
              <div className="item">
                <h1 className='mt-5 fw-bolder'> {dataa.title} </h1>
                <h3> about : {dataa.title} </h3>
                <p> {dataa.description} </p>
              </div>
            </div>
          </div>
        </div>
   
    </>
  )
}
