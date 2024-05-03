import { API_URL } from "./App.js";
import getElemento from "./lib/getElemento.js";
import PeliculaCard from "./PeliculaCard.js";

const Detalles = () => {
  let id;
  const { search } = document.location;
  const urlParams = new URLSearchParams(search);
  urlParams.has(`id`) ? (id = urlParams.get(`id`)) || null : (id = null);

  const buscarPeliculas = async (id) => {
    let data = null;
    const response = await fetch(`${API_URL}/${id}`);
    if (response.ok) data = await response.json();
    const resultados = await getElemento(".resultados");
    resultados.innerHTML = dibujaPeliculas(data);
  };

  const dibujaPeliculas = (pelicula) => {
    return `
      ${
        pelicula !== null
          ? `
          <div class="container">
            ${PeliculaCard(pelicula)}
            <div class="movie-desc">${pelicula.sinopsis}</div>
          </div>
        `
          : `
          <div class="empty">
              <h2>No se encontraron resultados.</h2>
          </div>
        `
      }
    `;
  };

  buscarPeliculas(id);

  return `
    <div class="resultados">
    </div>`;
};

export default Detalles;
