let params = new URLSearchParams(window.location.search);

let id = params.get("id");

fetch(`https://api.jikan.moe/v4/anime/${id}`)

    .then(function(response) {

        return response.json();

    })

    .then(function(data) {

        let anime = data.data;

        let details = document.querySelector("#anime-details");

        details.innerHTML = `

            <img src="${anime.images.jpg.large_image_url}">

            <h2>${anime.title}</h2>

            <p><b>Producers:</b> ${anime.producers.map(function(producer) {
                return producer.name;
            }).join(", ")}</p>

            <p><b>Year:</b> ${anime.year}</p>

            <p><b>Duration:</b> ${anime.duration}</p>

            <p><b>Rating:</b> ${anime.rating}</p>

            <p><b>Rank:</b> ${anime.rank}</p>

            <p><b>Synopsis:</b> ${anime.synopsis}</p>

            <p><b>Background:</b> ${anime.background}</p>

            <p><b>Themes:</b> ${anime.themes.map(function(theme) {
                return theme.name;
            }).join(", ")}</p>

            <a href="${anime.url}" target="_blank">
                View Original Page
            </a>

        `;

    })

    .catch(function(error) {

        let details = document.querySelector("#anime-details");

        details.innerHTML = "<p>Something went wrong. Please try again.</p>";

    });