import React from "react";
import "../scss/app.scss";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/skeleton";

const Home = () => {
      // https://64983dcb9543ce0f49e1ca37.mockapi.io/items
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  
  React.useEffect(() => {
    
    fetch('https://64983dcb9543ce0f49e1ca37.mockapi.io/items').then(
      (response) => {
        return response.json(); 
      }
    ).then((json) => {
      setItems(json);
      setIsLoading(false);
    });
    }, []);
    return (
        <>
            <div className="content__top">
                <Categories />
                <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                isLoading ? [...new Array(6)].map((_, index) => <Skeleton key={index}/>) 
                : items.map((obj) =>               <PizzaBlock key={obj.id}
                title={obj.title} 
                price={obj.price}
                image={obj.imageUrl} 
                sizezs={obj.sizes}
                types={obj.types}
                />
                )
            }
            </div>
        </>

    );
};

export default Home;
