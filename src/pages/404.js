import * as React from "react";
import { Link } from "gatsby";

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};
//Esta pagina aparecerá si el link ingresado no es válido
// markup
const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <title>No se encontró</title>
      <h1 style={headingStyles}>Pagina no encontrada</h1>
      <p style={paragraphStyles}>
        Sorry{" "}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{" "}
        Esta pagina no se encuentra.
        <br />
      </p>
    </main>
  );
};

export default NotFoundPage;
