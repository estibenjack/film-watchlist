// api key: 16915b8
// link: http://www.omdbapi.com/?i=tt3896198&apikey=16915b8
// requestUrl = `http://www.omdbapi.com/?s=${searchValue}&type=movie&apikey=16915b8`

/* 
const searchInput = document.getElementById("search-input")
const formEl = document.getElementById("form")
const filmsContainer = document.getElementById("films-container")

let requestUrl = ''
let filmsHtml = ''
let filmsArray = []
let filmsArrayDetailed = []
let watchlist = JSON.parse(localStorage.getItem('watchlist') || "[]")


formEl.addEventListener('submit', (e) => {
    e.preventDefault()
    let searchValue = searchInput.value
    requestUrl = `http://www.omdbapi.com/?s=${searchValue}&type=movie&apikey=16915b8`

    fetch(requestUrl)
        .then(res => res.json())
        .then(data => {
            filmsHtml = ''
            if(data.Response == "False"){
                renderApology()
            } else {
                filmsArray = data.Search
                for(let film of filmsArray){
                    getFilmDetails(film.imdbID)
                }
            }
        })
    }
)

document.addEventListener('click', (e)=>{
    if(e.target.dataset.id){
        const targetMovieObj = moviesArrayDetailed.filter(movie => movie.imdbID === e.target.dataset.id)[0]
        if(!watchlist.includes(targetMovieObj)){
            watchlist.push(targetMovieObj)
        }
        localStorage.setItem('watchlist', JSON.stringify(watchlist))
    }
})

function getFilmDetails(filmId) {
    requestUrl = `http://www.omdbapi.com/?i=${filmId}&type=movie&apikey=16915b8`
    fetch(requestUrl)
        .then(res => res.json())
        .then(data => {
            filmsArrayDetailed.push(data)
            updateResultsHtml(data)
            renderResults()
        })
}   

function updateResultsHtml(film){
    filmsHtml += `
    <div class="film">
        <div class="film-poster">
            <img src=${film.Poster}  alt="film-poster"> 
        </div>
        <div class="film-body">
            <div class="film-data">
                <h2 class="film-title">${film.Title}</h2>
                <p class="film-rating">⭐${film.imdbRating}</p>
            </div>
            <div class="film-details">
                <p class="film-runtime">${film.Runtime}</p>
                <p class="film-genres">${film.Genre}</p>
                <button class="add-remove-btn" data-id=${film.imdbID}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="https://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM9 5C9 4.44772 8.55228 4 8 4C7.44772 4 7 4.44772 7 5V7H5C4.44772 7 4 7.44771 4 8C4 8.55228 4.44772 9 5 9H7V11C7 11.5523 7.44772 12 8 12C8.55228 12 9 11.5523 9 11V9H11C11.5523 9 12 8.55228 12 8C12 7.44772 11.5523 7 11 7H9V5Z" fill="white"/>
                    </svg>
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
        <div>
            <h2>Unable to find what you're looking for 😢 <br> Please try another search. </h2>
        </div>
    `
}

document.addEventListener('click', (e)=>{
    if(e.target.dataset.id){
        const targetFilmObj = filmsArrayDetailed.filter(film => film.imdbID === e.target.dataset.id)[0]
        if(!watchlist.includes(targetFilmObj)){
            watchlist.push(targetFilmObj)
        }
        localStorage.setItem('watchlist', JSON.stringify(watchlist))
    }
})

/* lets doooo thissss 

const searchInput = document.getElementById("search-input")
const formEl = document.getElementById("form")
const filmsContainer = document.getElementById("films-container")

let requestUrl = ''
let filmsHtml = ''
let filmsArray = []
let filmsArrayDetailed = []
let watchlist = JSON.parse(localStorage.getItem('watchlist') || "[]")
*/

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
    <div>
        <h2>Unable to find what you're looking for. <br> Please try another search. </h2>
    </div>
    `
}