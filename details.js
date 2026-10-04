let params = new URLSearchParams(window.location.search);

let id = params.get("id");

let details = document.querySelector("#anime-details");

if (!id) {

    details.innerHTML = "<p>Anime not found.</p>";

} else {

    fetch(`https://api.jikan.moe/v4/anime/${id}`)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {

            let anime = data.data;

            details.innerHTML = `

                <img src="${anime.images.jpg.large_image_url}">

                <h2>${anime.title}</h2>

                <p>
                    <b>Producers:</b>
                    ${anime.producers.map(function(producer) {
                        return producer.name;
                    }).join(", ") || "N/A"}
                </p>

                <p>
                    <b>Year:</b>
                    ${anime.year || "N/A"}
                </p>

                <p>
                    <b>Duration:</b>
                    ${anime.duration || "N/A"}
                </p>

                <p>
                    <b>Rating:</b>
                    ${anime.rating || "N/A"}
                </p>

                <p>
                    <b>Rank:</b>
                    ${anime.rank || "N/A"}
                </p>

                <p>
                    <b>Synopsis:</b>
                    ${anime.synopsis || "No synopsis available."}
                </p>

                <p>
                    <b>Background:</b>
                    ${anime.background || "No background available."}
                </p>

                <p>
                    <b>Themes:</b>
                    ${anime.themes.map(function(theme) {
                        return theme.name;
                    }).join(", ") || "N/A"}
                </p>

                <a href="${anime.url}" target="_blank">
                    View Original Page
                </a>
            `;
        })
        .catch(function(error) {

            details.innerHTML =
                "<p>Something went wrong. Please try again.</p>";
        });
}