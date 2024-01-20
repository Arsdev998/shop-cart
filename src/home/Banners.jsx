import React, { useState } from "react";
import productData from "../products.json";
import { Link } from "react-router-dom";
import SecletedCategory from "../components/SelectedCategory";

const title = (
  <h2>
    Get your product <span>with</span> one click
  </h2>
);

const desc = "we have the largest collections of products ";
const bannerList = [
  {
    iconName: "icofont-users-alt-4",
    text: "1.5 Milion Costumers",
  },
  {
    iconName: "icofont-notification",
    text: "More then 2000 Marchent",
  },
  {
    iconName: "icofont-globe",
    text: "Buy Anyting online",
  },
];
const Banners = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filteresProduct, setFilteresProduct] = useState(productData);

  //filtering search funcion
  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchInput(searchTerm);

    ///filtering product based on search
    const filtered = productData.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteresProduct(filtered);
  };
  return (
    <div className="banner-section style-4">
      <div className="container">
        <div className="banner-content">
          {title}
          <form>
           <SecletedCategory/>
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search your product"
              value={searchInput}
              onChange={handleSearch}
            />
            <button type="submit">
              <i className="icofont-search-2"></i>
            </button>
          </form>
          <p>{desc}</p>
          <ul className="lab-ul">
            {searchInput &&
              filteresProduct.map((product, i) => (
                <li key={i}>
                  <Link to={`/shop/${product.id}`}>{product.name}</Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Banners;
