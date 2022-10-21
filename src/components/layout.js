import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
  content,
} from "./layout.module.css";

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <div className={container}>
      <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>

      <nav>
        <ul className={navLinks}>
          <header className={siteTitle}>{data.site.siteMetadata.title}</header>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Inicio
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/glosario" className={navLinkText}>
              Glosario
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/comunidades" className={navLinkText}>
              Comunidades
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        <div className={content}>{children}</div>
      </main>
    </div>
  );
};

export default Layout;
