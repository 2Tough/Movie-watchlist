const search = document.getElementById('search-bar')
const movies = document.getElementById('movies-container')
let watchlist = document.getElementsByClassName('watchlist')

let savedDataID = []
let savedDataName = []

let moviesIdArray = []
let moviesNameArray = []
let moviesPositionArray = []
let moviesObject = {

}

search.addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
        searchString()
    }
})

async function searchString() {

        movies.innerHTML = ``
    
    let stringValue = search.value.replace(/\s/g, "-")
    let res = await fetch(`https://www.omdbapi.com/?apikey=8595bd5&?=${stringValue}&s=${stringValue}`)
    let data = await res.json()
    
    for(let i=0 ; i< data.Search.length ; i++) {
        
        let res = await fetch(`https://www.omdbapi.com/?apikey=8595bd5&?=${stringValue}&i=${data.Search[i].imdbID}`)
        let dataTwo = await res.json()
            //console.log(dataTwo)

        let movieObject = []


            movies.innerHTML +=    `<div class="first film">
                                    <div class="movie-placeholder">
                                    <img class='movieImg' src='${data.Search[i].Poster}'>
                                    </div> 
                                    <div>
                                        <h3 class="title">${data.Search[i].Title}</h3>
                                        <div class="text-container">
                                            <p class="time">${data.Search[i].Year}</p>
                                            <p class="rating">${dataTwo.Rated}</p>
                                            <p class="genre">${data.Search[i].Type}</p>
                                            <p class="runTime">${dataTwo.Runtime}</p>
                                            <p class="watchlist ${data.Search[i].imdbID}">Add to watchlist</p>
                                        </div>
                                    <p class="description">${dataTwo.Plot}</p>
                                        
                                    </div>
                                    </div>`
            
                moviesIdArray.unshift(data.Search[i].imdbID)
                moviesNameArray.unshift(data.Search[i].Title)
           
            }

           for (let x=0; x < watchlist.length ; x++) {
           watchlist[x].addEventListener('click', toWatchlist)  
        
                function toWatchlist() {
            moviesPositionArray.push(x)
            selectedMovie(x)
            
        } 
  
  }      
  }
         function selectedMovie(x) {
             
             savedDataID.push(moviesIdArray[9-x])
             savedDataName.push(moviesNameArray[9-x])
             
              moviesObject[moviesIdArray[9-x]] = moviesNameArray[9-x]
              window.localStorage.setItem("id", JSON.stringify(savedDataID))
              window.localStorage.setItem("movies", JSON.stringify(savedDataName))
              
              
            console.log(savedDataID) 
            console.log(savedDataName) 

              
         }   

 

