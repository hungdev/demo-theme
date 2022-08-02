import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import style from './About.module.scss';
// import './About.module.scss';

export default function About() {
  return (
    <div className={style.about}>
      <Link to='/'>Home</Link>
    </div>
  );
}
