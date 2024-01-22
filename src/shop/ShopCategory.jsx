import React from "react";
import Data from '../products.json'

const ShopCategory = ({
  filterItem,
  setItem,
  menuItem,
  setProducts,
  setSelectedCategory,
}) => {
  return (
    <>
      <div className="witget-header">
        <h5 className="ms-2">All Category</h5>
      </div>
      <div>
      <button onClick={() => setProducts(Data)} className={`m-2 ${setSelectedCategory === "All" ? "bg-warning" : ""}`}>All</button>
        {menuItem.map((VaL, id) => {
          return (
            
            <button
              key={id}
              className={`m-2 ${setSelectedCategory === VaL ? "bg-warning" : ""}`}
              onClick={() => filterItem(VaL)}
            >
              {VaL}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default ShopCategory;
