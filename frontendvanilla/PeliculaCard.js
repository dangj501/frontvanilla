const PeliculaCard = (pelicula) => {
  return `
        <div class="movie">
            <div>
                <p>${pelicula.anio}</p>
            </div>

            <div>
                <a href="detalles.html?id=${pelicula.peliculaId}">
                    <img src="${
                      pelicula.poster !== "N/A"
                        ? pelicula.poster
                        : "https://via.placeholder.com/400"
                    }" alt="${pelicula.titulo}" />
                </a>
            </div>

            <div>
                <span>PELÍCULA</span>
                <h3>${pelicula.titulo}</h3>
            </div>
        </div>
    `;
};

export default PeliculaCard;
