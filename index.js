// api key: 16915b8
// link: http://www.omdbapi.com/?i=tt3896198&apikey=16915b8
// requestUrl = `http://www.omdbapi.com/?s=${searchValue}&type=movie&apikey=16915b8`

const searchInput = document.getElementById("search-input")
const formEl = document.getElementById("form")
const filmsContainer = document.getElementById("films-container")
const addRemoveBtn = document.querySelector("add-remove-btn")

let filmsArr = []
let filmsArrDetailed = []
let requestUrl = ''
let filmsHtml = ''
let watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];

formEl.addEventListener("submit", (e) =>{
    e.preventDefault()
    let searchTerm = searchInput.value
    requestUrl = `http://www.omdbapi.com/?s=${searchTerm}&type=movie&apikey=16915b8`

    fetch(requestUrl)
        .then(res => res.json())
        .then(data => {
            filmsHtml = ''
            if(data.Response == "False"){
                renderApology()
            } else {
                filmsArr = data.Search
                for(let film of filmsArr){
                    getFilmDetails(film.imdbID)
                }
            }
        })
})

document.addEventListener("click", (e) => {
    if(e.target.dataset.id){
        const targetFilmObj = filmsArrDetailed.filter(film => film.imdbID === e.target.dataset.id)[0]
        if(!watchlist.includes(targetFilmObj)){
            watchlist.push(targetFilmObj)
        }
        localStorage.setItem('watchlist', JSON.stringify(watchlist))
    }
})



function getFilmDetails(filmId){
    requestUrl = `http://www.omdbapi.com/?i=${filmId}&type=movie&apikey=16915b8`
    fetch(requestUrl)
        .then(res => res.json())
        .then(data => {
            filmsArrDetailed.push(data)
            updateResultsHtml(data)
            renderResults()
        })
}

function updateResultsHtml(film){
    filmsHtml += `
    <div class="film">
        <div class="film-poster">
            <img src="${film.Poster}" alt="Film Poster">
        </div>
        <div class="film-body">
            <div class="film-data">
                <h2 class="film-title">${film.Title}</h2>
                <p class="film-rating">⭐️${film.imdbRating}</p>
            </div>
            <div class="film-details">
                <p class="film-runtime">${film.Runtime}</p>
                <p class="film-genres">${film.Genre}</p>
                <button class="add-remove-btn add" data-id=${film.imdbID}>
                    <i class="fa-solid fa-circle-plus"></i>
                    Watchlist
                </button>
            </div>
            <p class="film-desc">
                ${film.Plot}
            </p>
        </div>
    </div>
    <hr>
    `
}

function renderResults(){
    filmsContainer.innerHTML = filmsHtml
}

function renderApology() {
    filmsContainer.innerHTML = `
    <div class="apology">
        <h2>Unable to find what you're looking for. <br> Please try another search. </h2>
    </div>
    `
}