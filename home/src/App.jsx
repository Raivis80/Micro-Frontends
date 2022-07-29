import React, { Suspense } from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import "tailwindcss/dist/tailwind.min.css";
import Footer from "./Footer";
import Header from "./Header";
import HomeContent from "./HomeContent";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Header />
    <div className="my-10"><HomeContent /></div>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
