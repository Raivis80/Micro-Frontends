import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.scss";
import "tailwindcss/dist/tailwind.min.css";
import "remixicon/fonts/remixicon.css";

import MainLayout from "./MainLayout";

ReactDOM.render(<MainLayout />, document.getElementById("app"));
