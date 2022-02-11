import React from 'react';
import Header from "./Header";
import Counter from "./Counter";
import "./App.css";
import Posts from "./Posts";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
      <div className="app">
<Router>
    <Header/>
    <Routes>
        <Route path="/counter" element={<Counter/>}/>
        <Route path="/posts" element={<Posts/>}/>
    </Routes>
</Router>
      </div>
  );
}

export default App;
