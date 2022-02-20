import React from "react";
import Navbar from "../components/navbar/navbar";
import Head from "next/head";
function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Instagram</title>
      </Head>
      <header>
        <Navbar
          person={{ username: "vito", porofile_img: "../Assists/porofile.jpg" }}
        />
      </header>
      <main>{children}</main>
    </div>
  );
}

export default Layout;
