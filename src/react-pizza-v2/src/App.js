import "./scss/app.scss";
import Header from "./components/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import {
  Routes,
  Route,
} from "react-router-dom";

import React from "react";

export const SearchContext = React.createContext('');



function App() {
  const [searchValue, setSearchValue] = React.useState("");
  console.log(searchValue);
  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header  />
        <div className="content">
        
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/cart" element={<Cart/>}></Route>
            <Route path="*" element={<NotFound/>}></Route>
            </Routes>
            
        </div>
      </SearchContext.Provider>

    </div>
  );
}

export default App;
