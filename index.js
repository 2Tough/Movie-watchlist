const search = document.getElementById('search-bar')
const movies = document.getElementById('movies-container')





search.addEventListener('input', searchString)


async function searchString() {
    
    
        movies.innerHTML = ``
    
    let stringValue = search.value.replace(/\s/g, "-")

    let res = await fetch(`https://www.omdbapi.com/?apikey=8595bd5&?=${stringValue}&s=${stringValue}`)
    let data = await res.json()
        
    
    for(let i=0 ; i< data.Search.length ; i++) {

        
        let res = await fetch(`https://www.omdbapi.com/?apikey=8595bd5&?=${stringValue}&i=${data.Search[i].imdbID}`)
        let dataTwo = await res.json()
            
            movies.innerHTML +=    `<div class="first film">
                                    <div class="movie-placeholder">
                                    <img class='movieImg' src='${data.Search[i].Poster}'>
                                    </div> 
                                    <div>
                                        <h3 class="title">${data.Search[i].Title}</h3>
                                        <div class="text-container">
                                            <p class="time">${data.Search[i].Year}</p>
                                            <p class="genre">${data.Search[i].Type}</p>
                                            <p class="watchlist">Watchlist</p>
                                        </div>
                                    <p class="description">${dataTwo.Plot}</p>
                                        
                                    </div>
                                    </div>`
        
            
            }
            }

