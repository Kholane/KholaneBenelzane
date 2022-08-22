import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import About from './routes/about';
import App from './routes/App';
import Contact from './routes/contact';
import Home from './routes/home';
import Projects from './routes/projects';
import Services from './routes/services';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <HashRouter>
    <Routes>
      <Route path="/" element={<App/>}>
        <Route index element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/contact" element={<Contact/>} />
      </Route>
    </Routes>
  </HashRouter>
  </React.StrictMode>
);

reportWebVitals();
