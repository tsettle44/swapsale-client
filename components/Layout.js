import Head from "next/head";
import Navbar from "./Navbar";

const Layout = props => (
  <div>
    <Head>
      <title>SwapSale</title>
      <link
        href="http://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/css/materialize.min.css"
        rel="stylesheet"
      />
    </Head>
    <Navbar />
    <div className="container">{props.children}</div>
    <script src="https://code.jquery.com/jquery-2.1.1.min.js" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/js/materialize.min.js" />
    <script src="path/to/your/bundle.js" />
  </div>
);

export default Layout;
