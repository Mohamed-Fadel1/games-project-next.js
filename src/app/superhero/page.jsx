import Image from 'next/image';
import React from 'react';
import NavBar from '../NavBar/NavBar';
import Link from 'next/link';

export default async function Page() {
  const url = 'https://free-to-play-games-database.p.rapidapi.com/api/games?category=superhero';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '47755142a3msh00047811fe623ebp125a57jsn968c763628f8',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };

  let games = [];
  
  try {
    const response = await fetch(url, options);
    games = await response.json();
  } catch (error) {
    console.error(error);
  }

  return (
    <>

<NavBar/>
   
<div className="container">
  <div className="row g-4">
  { games.map((ele)=>  <div className="col-lg-3 col-md-4 col-sm-6">


<Link className='nav-link' href={`gamesDetails/${ele.id}`}>

<div className="card" >
<Image src={ele.thumbnail} alt={ ele.title } className='w-100' width={200} height={150}  />
 
  <div className="card-body">
    <div className="d-flex justify-content-between">
      <p className='fw-bolder text-white'> {ele.title} </p>
      <span className='btn btn-primary'> free </span>
    </div>
    <p className="card-text par-desc"> {ele.short_description} </p>
   <div className="card-footer d-flex justify-content-between">
    <p className='par-ele text-white'> {ele.genre} </p>
    <p className='par-ele text-white'> {ele.platform} </p>
   </div>
  </div>
</div>

</Link>

    </div>)  }
  </div>
</div>
 
    </>
  );
}
