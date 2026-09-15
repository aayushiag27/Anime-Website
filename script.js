fetch("https://api.jikan.moe/v4/anime")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {

        let animeContainer = document.querySelector("#anime-container");

        data.data.forEach(function (anime) {

            animeContainer.innerHTML += `
                <div class="anime-card">

                    <img src="${anime.images.jpg.image_url}">

                    <h3>${anime.title}</h3>

                    <p>Year: ${anime.year}</p>

                </div>
            `;
        });
    });