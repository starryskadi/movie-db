const API_KEY = "70699365be27b444e89363dd68f8397a"
const IMAGE_BASE = "https://image.tmdb.org/t/p/w500"

const movieTemplete = (title, rating, poster) => {
    return `<div class="col-md-3 col-6">
        <div>
            <div class="movie-poster mb-3">
                <img class="img-fluid" src="${IMAGE_BASE}${poster}" alt="Poster Image"/>
                <div class="backdrop"></div>
                <div class="rating"> <i class="bi bi-star-fill"></i> <span>${rating} </span></div>
            </div>
            <p class=" mb-4">${title}</p>
        </div>
    </div>`
}

const getMovies = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=70699365be27b444e89363dd68f8397a");
    const movies = await data.json();
    let html = "";

    movies.results.map(each => {
        html += movieTemplete(each.original_title, each.vote_average, each.poster_path); 
    });
    document.querySelector("#movies").innerHTML = html;
}

getMovies();
