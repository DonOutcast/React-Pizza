import "./scss/app.scss";
import Header from "./components/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import React from "react";
function App() {
  const [searchValue, setSearchValue] = React.useState("");
  console.log(searchValue);
  return (
    <div className="wrapper">
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className="content">
      
         <Routes>
          <Route path="/" element={<Home searchValue={searchValue}/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="*" element={<NotFound/>}></Route>
          </Routes>
          
      </div>
    </div>
  );
}

export default App;
