import Card from "./Card";
import img1 from '../assets/goku.jpg';
import img2 from '../assets/Naruto.jpg';
import img3 from '../assets/op.jpg';
import img4 from '../assets/aot.jpg';
import img5 from '../assets/jjk.jpg';
import img6 from '../assets/ds.jpg';
import img7 from '../assets/kaiju.jpg'
import img8 from '../assets/spy.jpg'
import img9 from '../assets/solo_leveling.jpg'
import img10 from '../assets/mashle.jpg'
import '../Test.css'
import { useState } from "react";
function Home(){
    const animes=[
        {id:1,name:'Dragon Ball',genre:"Adventure",rating:8.5,url:img1,year:1986},
        {id:2,name:"Naruto",genre:"Action",rating:8.3,url:img2,year:2002},
        {id:3,name:"One Piece",genre:"Adventure",rating:9.0,url:img3    ,year:1999},
        {id:4,name:"Attack on Titan",genre:"Drama",rating:9.1,url:img4,year:2013},
        {id:5,name:"Jujustu Kaisen",genre:"Supernatural",rating:8.0,url:img5,year:2020},
        {id:6,name:"Demon Slayer",genre:"Fantasy",rating:8.7,url:img6,year:2019},
        {id:7,name:'Kaiju No.8',genre:'supernatural',rating:8.2,url:img7,year:2020},
        {id:8,name:'Spy x Family',genre:'Action',rating:8.5,url:img8,year:2022},
        {id:9,name:'Solo Leveling',genre:'Fantasy',rating:8.9,url:img9,year:2021},
        {id:10,name:'Mashle',genre:'Comedy',rating:7.8,url:img10,year:2023}
    ]
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (e) => {
        e.preventDefault();
        setSearchTerm('');
    };
    
    return <div><div className='home'>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=search" />
        <nav
        className='navbar'>
            <h1>Anime <br/>World</h1>
            <ul className='nav-links'>
                <li><a href="#home">Home</a></li>
                <li><a href="#animes">Animes</a></li>
                <li><a href="#favorites">Favorites</a></li>
                
              <form className="search-form" onSubmit={handleSearchChange}>
                <input type="text" placeholder="Search anime..." 
                className="search-input" value={searchTerm} onChange={e => setSearchTerm(e.target.value)}/>
                <button type="submit" className="search-button"><span class="material-symbols-outlined">
search
</span></button>
            </form>
            <li><a href="#login">Login/Signup</a></li>
            </ul>

        </nav>
                  
 <div className='anime-grid'>
  {animes.filter(anime =>
    anime.name.toLowerCase().includes(searchTerm.toLowerCase())
  ).length > 0 ? (
    animes
      .filter(anime =>
        anime.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .map(anime => <Card anime={anime} key={anime.id} />)
  ) : (
    <p className="not-found-text">The results `{searchTerm}` is not founded !! </p>
  )}
</div>

    </div>
    </div>
}
export default Home;