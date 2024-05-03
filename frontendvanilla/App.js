import Layout from "./Layout.js";
import Home from "./Home.js";
import Detalles from "./Detalles.js";
import NotFound from "./NotFound.js";
const API_URL = "https://localhost:7114/api/peliculas";

const App = () => {
  let contenido;

  const { pathname, search } = document.location;
  const componente = pathname.split(".html")[0];

  const urlParams = new URLSearchParams(search);

  let layout = Layout();

  const routes = {
    "/": Home,
    "/index": Home,
    "/detalles:id": Detalles,
  };

  urlParams.has("id")
    ? (contenido = routes["${componente}:id"])
    : (contenido = routes[componente]);
  return layout.replace("<Outlet />", contenido) || NotFound();
};

export default App;
export { API_URL };
