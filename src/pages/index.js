import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import "./index.css";
import { Link } from "gatsby";

const IndexPage = () => {
  return (
    <Layout pageTitle="Información">
      <b>¿Qué es un teclado mecánico?</b>
      <p>
        Un teclado mecánico es un dispositivo de entrada el cual contiene
        interruptores debajo de cada tecla con el fin de que cada una de ellas
        sea un interruptor por separado para mandar información al ordenador,
        estos interruptores son conocidos como switches.
      </p>
      <b>¿Qué partes lleva un teclado mecánico? </b>
      <p>
        Un teclado está compuesto por 7 partes principales:
        <ul>
          <li>Case (Carcasa)</li>
          <li>PCB (Circuito Impreso)</li>
          <li>Plate (Placa)</li>
          <li>Estabilizadores</li>
          <li>Switches (Interruptores)</li>
          <li>Keycaps (Teclas)</li>
          <li>Cable</li>
        </ul>
        También existen otros materiales que se pueden llegar a usar al hacer un
        teclado mecánico custom, como lo es el lubricante, washers, cinta, entre
        otras cosas para poder modificarlo.
      </p>
      <StaticImage
        alt="Superranked infografía en español."
        src="../images/Superranked infografía español_page-0001.jpg"
        placeholder="blurred"
        layout="constrained"
      />
      <h1>Partes de un teclado</h1>
      <h1>Tamaños de teclado</h1>
      <p>
        Los teclados tienen diferentes tamaños y diferentes distribuciones de
        teclas. ¿A qué nos referimos con tamaños? Un teclado puede llegar a
        tener teclado numérico o puede que no, también puede que no tenga las
        teclas de función o puede que incluso no tenga los números, esto para
        estandarizar todo se les asignó un nombre de tamaño.
      </p>
      <div className="image-block">
        <div className="img-w-caption">
          <StaticImage
            alt="Superranked infografía en español."
            src="../images/Superranked_infografa_tamaos.png"
            placeholder="blurred"
            layout="constrained"
            width={2000}
          />
          <p className="image-caption">
            Infografía de{" "}
            <a href="https://neutrone.com/projects/custom-mechanical-keyboard-infographic/">
              Custom Mechanical Keyboard Infographic - Neutrone
            </a>{" "}
            para verla en mayor resolución.
          </p>
        </div>
        <div className="text">
          <p className="concatenated-text">
            Como se muestra en la imagen anterior, existen varios formatos
            diferentes, no son todos los que hay, pero sí los más populares. Con
            cuestión a tamaño pueden tener pequeñas diferencias y seguir
            considerándose un teclado, por ejemplo podría ser un teclado como lo
            es el Vega diseñado por AIO3, que es un teclado 65% que tiene sus
            flechas y tiene otras teclas en la parte de la derecha, algo que por
            ejemplo un ikki68 las tiene en diferente forma y los dos se siguen
            considerando 65%. Otro ejemplo sería un teclado 40% que tiene
            flechas, este sigue considerándose 40% aunque esté más grande de lo
            normal.
          </p>
          <p className="concatenated-text">
            Otra cosa que podría llegar a considerarse dentro de los tamaños de
            teclados sería la distribución de teclas. La distribución de teclas
            se refiere a cómo están cada tecla puesta en el teclado, las más
            comunes son ANSI US e ISO UK. Estas se utilizan normalmente
            dependiendo el idioma en el que está pensado el teclado o por
            preferencia dentro del país en el que se está. También se puede
            diferenciar estas distribuciones dependiendo el idioma en el que se
            tienen las keycaps organizadas, un ejemplo de esto es ANSI US y ANSI
            MX que son diferentes en la simbología que se tienen en ciertas
            teclas, esto se puede hacer más notorio entre ANSI Ger y ANSI US que
            se utiliza QWERTZ en vez de QWERTY como en ANSI US.
          </p>
        </div>
      </div>

      <h1>Tipos de montura</h1>
    </Layout>
  );
};

export const Head = () => <title>Home Page</title>;

export default IndexPage;
