export function filterAnimes(animes, searchTerm) {
    // If the search term is empty, return the full list
    if (!searchTerm.trim()) {
        return animes;
    }

    // Otherwise, return the filtered list
    return animes.filter(anime => 
        anime.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
}
