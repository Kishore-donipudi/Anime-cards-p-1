import '../Test.css'

// 1. Nav is now a simpler component that receives props
function Nav({ searchTerm, onSearchChange }){

    const handleSubmit = (e) => {
        e.preventDefault();
        // This can be used for more complex search logic if needed
    };

    return (<>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=search" />
        <nav className='navbar'>

            <a style={{ textDecoration: 'none', color: 'inherit' }} href="#home"><h1>Anime <br/>World</h1></a>
            <ul className='nav-links'>
                <li><a href="#home">Home</a></li>
                <li><a href="#animes">Animes</a></li>
                <li><a href="#favorites">Favorites</a></li>
                
              <form className="search-form" onSubmit={handleSubmit}>
                {/* 2. Input is now controlled by props from Home */}
                <input 
                    type="text" 
                    placeholder="Search anime..." 
                    className="search-input" 
                    value={searchTerm} 
                    onChange={onSearchChange}
                />
                <button type="submit" className="search-button"><span class="material-symbols-outlined">
search
</span></button>
            </form>
            <li><a href="#login">Login/Signup</a></li>
            </ul>
        </nav>
    </>
    );
}
export default Nav;
