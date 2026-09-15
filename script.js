let search = document.querySelector("#search");

let animeList = [];

let currentPage = 1;

let animePerPage = 8;

fetch("https://api.jikan.moe/v4/anime")

    .then(function(response) {

        return response.json();

    })

    .then(function(data) {

        animeList = data.data;

        showAnime();

    })

    .catch(function(error) {

        let animeContainer = document.querySelector("#anime-container");

        animeContainer.innerHTML = "<p>Unable to load anime. Please try again.</p>";

    });


function showAnime() {

    let animeContainer = document.querySelector("#anime-container");

    animeContainer.innerHTML = "";

    let start = (currentPage - 1) * animePerPage;

    let end = start + animePerPage;

    let pageAnime = animeList.slice(start, end);

    pageAnime.forEach(function(anime) {

        animeContainer.innerHTML += `

            <div class="anime-card" onclick="openDetails(${anime.mal_id})">

                <img src="${anime.images.jpg.image_url}">

                <h3>${anime.title}</h3>

                <p>Year: ${anime.year}</p>

            </div>

        `;

    });

    document.querySelector("#page-number").innerText = "Page " + currentPage;

}


search.addEventListener("input", function() {

    let searchText = search.value.toLowerCase();

    animeList = animeList.filter(function(anime) {

        return anime.title.toLowerCase().includes(searchText);

    });

    currentPage = 1;

    showAnime();

});


document.querySelector("#next").addEventListener("click", function() {

    if (currentPage * animePerPage < animeList.length) {

        currentPage++;

        showAnime();

    }

});


document.querySelector("#prev").addEventListener("click", function() {

    if (currentPage > 1) {

        currentPage--;

        showAnime();

    }

});


function openDetails(id) {

    window.location.href = `details.html?id=${id}`;

}