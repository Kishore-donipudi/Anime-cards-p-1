import'../Test.css'
function Card({anime}) {
    function Favorite(){
        alert(`${anime.name} added to favorites!`);
    }
    return <div className='card'>
        <div className='anime-img'>
            < img src={anime.url} alt={anime.name}/>
        </div>
        <div className='anime-actions'>
            <button className='fav-btn' onClick={Favorite}>🤍</button>
        </div>
        <div className='anime-info'>
            <h3>{anime.name}</h3>
            <p>Genre: {anime.genre}</p>
            <p>Rating: {anime.rating}</p>
            <p>Release Year : {anime.year}</p>
        </div>
    </div>
}
export default Card;