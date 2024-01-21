import React, { useState } from "react";
import PageHeader from "../components/PageHeader";
const showResult = "Showing 1–12 of 139 Results";
import Data from "../products.json";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";
const Shop = () => {
  const [GridList, SetGridList] = useState(true);
  const [products, setProducts] = useState(Data);

  // pagionation
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const currentProduct = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // function to change the current page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <PageHeader title={"Our Shop Page"} curpage={"shop"} />
      {/* shop page */}
      <div className="shop-page padding-tb">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                {/* layout and title here */}
                <div className="shop-title d-flex justify-content-between">
                  <p>{showResult}</p>
                  <div
                    className={`product-view-mode ${
                      GridList ? "gridActive" : "listActive"
                    }`}
                  >
                    <a className="grid" onClick={() => SetGridList(!GridList)}>
                      <i className="icofont-ghost "></i>
                    </a>
                    <a className="list" onClick={() => SetGridList(!GridList)}>
                      <i className="icofont-listine-dots"></i>
                    </a>
                  </div>
                </div>
                {/* product cards here */}
                <div>
                  <ProductCard GridList={GridList} product={currentProduct} />
                </div>
                <Pagination
                  productsPerPage={productsPerPage}
                  totalProducts={products.length}
                  paginate={paginate}
                  activePage={currentPage}
                />
              </article>
            </div>
            <div className="col-lg-4 col-12">right side</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
