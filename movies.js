

let retrievedId = JSON.parse(localStorage.getItem('movies'));
console.log(Object.keys(retrievedId))
console.log(Object.values(retrievedId))





async function retrieveMovie() {
    const ressum = await fetch(`https://www.omdbapi.com/?apikey=8595bd5&?=${stringValue}&i=${data.Search[i].imdbID}`)
    const datasum = await ressum.json()
    
   
}