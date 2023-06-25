import "./App.css";
import "./scss/app.scss";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import PizzaBlock from "./components/PizzaBlock";
import React from "react";
function App() {
  // https://64983dcb9543ce0f49e1ca37.mockapi.io/items
  const [items, setItems] = React.useState([]);
  
  React.useEffect(() => {
    
    fetch('https://64983dcb9543ce0f49e1ca37.mockapi.io/items').then(
      (response) => {
        return response.json(); 
      }
    ).then((json) => {
      setItems(json);
    });
    }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {items.map((obj) => (
              <PizzaBlock key={obj.id}
              title={obj.title} 
              price={obj.price}
              image={obj.imageUrl} 
              sizezs={obj.sizes}
              types={obj.types}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
