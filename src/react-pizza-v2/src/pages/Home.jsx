import React from "react";
import "../scss/app.scss";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/skeleton";

const Home = ({ searchValue }) => {
      // https://64983dcb9543ce0f49e1ca37.mockapi.io/items
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoyId, setCategoryId] = React.useState(0);
  const [sortType, setSortType] = React.useState(
    {
      name: 'популярности',
      sortProperty: 'rating',
    }
  );
  
  React.useEffect(() => {
    setIsLoading(false);
    fetch(`https://64983dcb9543ce0f49e1ca37.mockapi.io/items?${categoyId > 0 ? `category=${categoyId}` : '' }&sortBy=${sortType.sortProperty}&order=desc`)
    .then(
      (response) => {
        return response.json(); 
      }
    ).then((json) => {
      setItems(json);
      setIsLoading(false);
    });
    window.scrollTo(0, 0);
    }, [categoyId, sortType]);

    const pizzas = items.filter(
      (obj) => {
        if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
          return true;
        }
         return false;
      }).map((obj) => <PizzaBlock key={obj.id} {...obj}/>); 

    const skeletons =  [...new Array(6)].map((_, index) => <Skeleton key={index}/>);

    return (
      <div className="container">
            <div className="content__top">
                <Categories value={categoyId} onClickCategory={(i) => setCategoryId(i)} />
                <Sort value={sortType} onClickSort={(i) => setSortType(i)} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                isLoading ? skeletons: pizzas
            }
            </div>
            </div>

    );
};

export default Home;
