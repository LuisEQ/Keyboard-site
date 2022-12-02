import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import { Link } from "gatsby";
import "./comunidades.css";

const Comunidades = () => {
  return (
    //Retorna información respecto a las diferentes comunidades que hay en teclados y los contactos de los que se encargan de darle mantenimiento a la pagina
    <Layout pageTitle="Comunidades y contactos">
      <p>
        ¡Hola! aquí podrás encontrar todos nuestros links a diferentes
        comunidades, así como a nuestras redes sociales y grupo de Facebook.
        Nuestro grupo de Facebook está pensado para todo contenido de teclados
        mecánicos custom, como lo es preguntas, fotos, reseñas, entre otras
        cosas. El grupo de Discord es del streamer KatanaxKaji, el cual se
        dedica a ensamblar teclados custom y dar reviews, en su discord podrás
        encontrar una de las comunidades más grandes hispanohablantes. El grupo
        de Quark Works es una comunidad hispanohablante que se dedica a diseño
        de PCB’s. En nuestras redes sociales como en Instagram y Facebook podrás
        encontrar información útil de los teclados mecánicos custom, así como
        noticias de la página y anuncios de nuevos artículos en ella.
      </p>
      <ul className="contact-box">
        <li>Discord (Katanakaji)</li>
        <li>Discord (Quark Works)</li>
        <li>Grupo de Facebook </li>
        <li>Pagina de Facebook </li>
        <li>Mercadito Mecánico MX</li>
        <li>FerPL | rheset.mx#0970</li>
        <li>Novelflyer15#0626</li>
        <li>Instagram</li>
      </ul>
      <div>
        <h1>Otras comunidades importantes</h1>
        <ul className="community-box">
          <li className="box">
            <p className="title">Geekhack</p>
            <p className="description">
              Geekhack es la página de teclados más importante que hay hoy en
              día, en ella se publican los Interest Check y se ponen las
              noticias de estos mismos, así como los nuevos group buys que salen
              día con día. En ella podrás explorar y ver lo que la comunidad
              piensa de cierto producto o servicio que se ofrece, en ella
              también puedes comentar respecto al tema y dar tu opinión.
            </p>
          </li>
          <li className="box">
            <p className="title">r/MechanicalKeyboards</p>
            <p className="description">
              En Reddit se encuentran tres grupos diferentes de teclados
              mecánicos populares, los cuales son r/mechanicalkeyboards,
              r/mechmarket y r/customkeyboards.
            </p>
            <p>
              En este subreddit se habla de cualquier cosa relacionada a
              teclados mecánicos, no es en específico de teclados mecánicos
              custom, sino que también es de teclados preensamblados. Este más
              que nada es para preguntas e imágenes de teclados.
            </p>
          </li>
          <li className="box">
            <p className="title">r/MechMarket</p>
            <p className="description">
              Este subreddit es un mercado de teclados y piezas de ello, así
              como servicios de ensamblado o de lubricación. También se pueden
              ver IC (Interest Check) o también rifas de artisans, pero más que
              nada es para compra - venta de productos o servicios relacionados
              a teclados.
            </p>
          </li>
          <li className="box">
            <p className="title">r/CustomKeyboards</p>
            <p className="description">
              Es un subreddit que intenta ser más específico que
              r/mechanicalkeyboards ya que en el otro se puede publicar
              cualquier teclado aunque no sea custom, también en
              r/mechanicalkeyboards es permitido publicar imágenes con keycaps o
              carcasas clon, que en el caso de este subreddit no se permite.
              Este grupo solo es para mostrar teclados custom, no se puede hacer
              publicaciones de preguntas y debe ser forzosamente un teclado
              custom lo que publicas.
            </p>
          </li>
        </ul>
      </div>
    </Layout>
  );
};

export const Head = () => <title>Comunidades</title>;

export default Comunidades;
