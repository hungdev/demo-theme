import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import style from './Home.module.scss';
// import './Home.module.scss';

export default function Home() {
  return (
    <div className={style.home}>
      <Link to='/about'>About</Link>
    </div>
  );
}
