import React, { useState } from "react";
import "./style.css";
import Menu from "./menuApi.js";
import Menucard from "./menucard";

const Resto = () => {
  const [menuData, setMenuData] = useState(Menu);

  const filterItem = (category) => {
      const updatedList = Menu.filter((curElem) => {
        return curElem.category === category;
      });
      setMenuData(updatedList);
  };
  return (
    <>
    <h1>Welcome to my daily Menu</h1>
      <nav className="navbar">
        <div className="btn-group">
          <button 
            className="btn-group__item" 
            onClick={() => filterItem("breakfast")}>
            Breakfast
          </button>
          <button className="btn-group__item" onClick={() => filterItem("lunch")}>Lunch</button>
          <button className="btn-group__item" onClick={() => filterItem("evening")}>Evening Eat</button>
          <button className="btn-group__item"onClick={() => filterItem("dinner")} >Dinner</button>
          <button className="btn-group__item" onClick={() => setMenuData(Menu)}>All</button>
        </div>
      </nav>

      <Menucard menuData={menuData}/>
    </>
  );
};

export default Resto;
