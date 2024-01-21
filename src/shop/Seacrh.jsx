import React, { useState } from "react";
import { Link } from "react-router-dom";

const Seacrh = ({ products, GridList }) => {
  const [seacrhTerm, setSearchTerm] = useState("");
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(seacrhTerm.toLocaleLowerCase())
  );
  return (
    <div className="widget widget-search">
      <form className="search-wrapper mb-3">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="search..."
          defaultValue={seacrhTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">
            <i className="icofont-search-2"></i>
        </button>
      </form>

      {/* showing serach result */}
      <div className="">
        {
          seacrhTerm && filteredProducts.map((product)=> (
            <Link key={product.id} to={`/shop/${product.id}`}>
                <div className="d-flex gap-3 p-2">
                    <div className="">
                        <div className="pro-thumb h-25">
                        <img src={product.img} alt="" width={70} className="flex-{grow|shrink|-0}"/>
                        </div>
                    </div>
                </div>
            </Link>
          ))
        }
      </div>
    </div>
  );
};

export default Seacrh;
