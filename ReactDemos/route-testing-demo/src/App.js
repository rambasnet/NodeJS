
import './App.css';

import React from "react";

import Menu from './components/menu'

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

function App() {
  return (
    <Menu />
  );
}

// You can think of these components as "pages"
// in your app.

export default App