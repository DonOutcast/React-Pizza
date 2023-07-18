import React from "react";
import "../scss/app.scss";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/skeleton";
import Pagination from "../components/Pagination";

const Home = ({ searchValue }) => {
  // https://64983dcb9543ce0f49e1ca37.mockapi.io/items
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoyId, setCategoryId] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState(0);
  const [sortType, setSortType] = React.useState(
    {
      name: 'популярности',
      sortProperty: 'rating',
    }
  );
  
  React.useEffect(() => {
    setIsLoading(true);
    const category = categoyId > 0 ? `category=${categoyId}` : '';
    const sortBy = sortType.sortProperty;
    const search = searchValue ? `&search=${searchValue}` : '';


    fetch(`https://64983dcb9543ce0f49e1ca37.mockapi.io/items?page=${currentPage}&limit=4&${category}${search}&sortBy=${sortBy}&order=desc`)
    .then(
      (response) => {
        return response.json(); 
      }
    ).then((json) => {
      setItems(json);
      setIsLoading(false);
    });
    window.scrollTo(0, 0);
    }, [categoyId, sortType, searchValue, currentPage]);

    const pizzas = items.map((obj) => <PizzaBlock key={obj.id} {...obj}/>); 

    const skeletons =  [...new Array(6)].map((_, index) => <Skeleton key={index}/>);

    return (
      <div className="container">
            <div className="content__top">
                <Categories value={categoyId} onClickCategory={(i) => setCategoryId(i)} />
                <Sort value={sortType} onClickSort={(i) => setSortType(i)} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">{isLoading ? skeletons: pizzas}</div>
            <Pagination onChangePage={(number) => setCurrentPage(number)}/>
          </div>

    );
};

export default Home;
