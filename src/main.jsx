import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Router from "./router/Router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <div className='bg-gray-100'>
            <Router/>
        </div>
    </React.StrictMode>
);
