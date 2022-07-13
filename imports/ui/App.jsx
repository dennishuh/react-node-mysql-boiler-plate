import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from './home/Home';
import TitleBar from './TitleBar';
import CurrentGame from './teams/CurrentGame';
import NotFound from './NotFound';

import '../styles/main.scss';

export const App = () => (
  <BrowserRouter>
    <TitleBar title="Score Tracker" />  
    <Routes>
      <Route path="/" element={<Home />} />
			<Route path="/games/:gameid" element={<CurrentGame />} />
			<Route path="*" element={NotFound} />
    </Routes>
  </BrowserRouter>
);
