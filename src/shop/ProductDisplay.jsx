import React, { useState } from "react";
import { Link } from "react-router-dom";
const desc = (
  <p>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,
    porro!
  </p>
);
const ProductDisplay = ({ item }) => {
  // console.log(item);
  const { name, id, price, seller, ratingsCount, quantity,img } = item;
  const [prequantity, setQuantity] = useState(quantity);
  const [coupon, setCoupon] = useState("");
  const [size, setSize] = useState("Select Size");
  const [color, setColor] = useState("Select Color");

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };
  const handleColorChange = (e) => {
    setColor(e.target.value);
  };
  // - qty
  const handleDecrease = () => {
    if (prequantity > 1) {
      setQuantity(prequantity - 1);
    }
  };
  const handleIncrease = () => {
    setQuantity(prequantity + 1);
  };

  // chekout handle submit untuk menambahkan semua value ke cart

  const handleSubmit = (e) => {
    e.preventDefault();
    const product = {
      id: id,
      img:img,
      name: name,
      price: price,
      size: size,
      color: color,
      coupon: coupon,
    }
    console.log(product);
  }

  return (
    <div>
      <div className="">
        <h4>{name}</h4>
        <p className="rating">
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <span>{ratingsCount}review</span>
        </p>
        <h4>${price}</h4>
        <h6>{seller}</h6>
        {desc}
      </div>
      {/* cart component option */}
      <div className="">
        <form onSubmit={handleSubmit}>
          {/* size */}
          <div className="select-product size">
            <select value={size} onChange={handleSizeChange}>
              <option>Select Size</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
            </select>
            <i className="icofont-rounded-down"></i>
          </div>
          {/* color */}
          <div className="select-product color">
            <select value={color} onChange={handleColorChange}>
              <option>Select color</option>
              <option value="Pink">Pink</option>
              <option value="Black">Black</option>
              <option value="Red">Red</option>
              <option value="White">White</option>
              <option value="Blue">Blue</option>
              <option value="Yellow">Yellow</option>
            </select>
            <i className="icofont-rounded-down"></i>
          </div>
          {/* cart plus minus */}
          <div className="cart-plus-minus">
            <div className="dec qtybutton" onClick={handleDecrease}>
              -
            </div>
            <input
              className="cart-plus-minus-box"
              type="text"
              name="qtybutton"
              id="qtybutton"
              value={prequantity}
              onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
            />
            <div className="inc qtybutton" onClick={handleIncrease}>
              +
            </div>
          </div>
          {/* cooupon fields*/}
          <div className="discount-code mb-2">
            <input type="text" placeholder="Enter coupon code" onChange={(e) => setCoupon(e.target.value)}/>
          </div>
          {/* button section */}
          <button type="submit" className="lab-btn">
           <span> Add To Cart</span>
          </button>
          <Link to="/cart-page" className="lab-btn bg-primary">
           <span>Chekcout</span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default ProductDisplay;
