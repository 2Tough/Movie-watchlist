

const movies = document.getElementById('movies-container')


let localStorageId = JSON.parse(localStorage.getItem('id')) 
let localStorageMovie = JSON.parse(localStorage.getItem('movies'))


console.log(localStorageId[1])
console.log(localStorageMovie[1])

localStorage.getItem('movies')[0]    


async function retrieveMovie() {
    for (let i=0 ; i < localStorageId.length; i++) {
        
    const res  = await fetch(`https://www.omdbapi.com/?apikey=8595bd5&?=${localStorageMovie[i]}&i=${localStorageId[i]}`)
    const data = await res.json()

   
    movies.innerHTML +=    `<div class="first film">
                                    <div class="movie-placeholder">
                                    <img class='movieImg' src='${data.Poster}'>
                                    </div> 
                                    <div>
                                        <h3 class="title">${data.Title}</h3>
                                        <div class="text-container">
                                            <p class="time">${data.Year}</p>
                                            <p class="rating">${data.Rated}</p>
                                            <p class="genre">${data.Type}</p>
                                            <p class="runTime">${data.Runtime}</p>
                                            
                                                
                                                <p class="watchlist remove-btn ${data.imdbID}">Remove</p>
                                            
                                        </div>
                                    <p class="description">${data.Plot}</p>
                                        
                                    </div>
                                    </div>`



     let removeMovie = document.getElementsByClassName('remove-btn')
     
     for (let i=0 ; i < removeMovie.length; i++) {  
              
        removeMovie[i].addEventListener('click',()=> {
        
        let newStorageMovie = localStorageMovie.splice(i,1)
        let newStorageId = localStorageId.splice(i,1)
        
         localStorage.setItem("movies", JSON.stringify(localStorageMovie))
         localStorage.setItem("id", JSON.stringify(localStorageId))
        
        console.log(localStorageMovie)
        console.log(localStorageId)
        window.location.reload()
        
        
      })
      
      }


                }
 
                }
  

retrieveMovie()

