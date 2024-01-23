import React, { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import { Link } from "react-router-dom";
import delImg from "../assets/images/shop/del.png";
const CartPage = () => {
  const [cartsItems, setCartItems] = useState([]);
  useEffect(() => {
    // fecth dat from local storagge
    const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCartItems);
  }, []);

  // calculate cart items
  const calculateTotalPrices = (item) => {
    return item.price * item.quantity;
  };
  //handle quantity increase
  const handleIncrease = (item) => {
    item.quantity += 1;
    setCartItems([...cartsItems]);

    //update local storage with new cart items
    localStorage.setItem("cart", JSON.stringify(cartsItems));
  };
  //handle quantity decrease
  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      item.quantity -= 1;
      setCartItems([...cartsItems]);

      //update local storage with new cart items
      localStorage.setItem("cart", JSON.stringify(cartsItems));
    }
  };

  //handle item remove
  const handleRemove = (item) => {
    const updateCart = cartsItems.filter(
      (cartsItems) => cartsItems.id !== item.id
    );

    //updated new cart
    setCartItems(updateCart);
    updateLocalStorage(updateCart);
  };
  const updateLocalStorage = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };
  //  cart subtotal
  const cartSubtotal = cartsItems.reduce((total, item) => {
    return total + calculateTotalPrices(item);
  }, 0);
  //order total
  const orderTotal = cartSubtotal;
  return (
    <div>
      <PageHeader title={"Shop Cart"} curpage={"cart page"} />

      <div className="shop-cart padding-tb">
        <div className="container">
          <div className="section-wrapper">
            {/* cart top */}
            <div className="cart-top">
              <table>
                <thead>
                  <tr>
                    <th className="cat-product">Product</th>
                    <th className="cat-price">Price</th>
                    <th className="cat-quantity">Quantity</th>
                    <th className="cat-total">Total</th>
                    <th className="cat-edit">Edit</th>
                  </tr>
                </thead>
                {/* table body */}
                <tbody>
                  {cartsItems.map((item, index) => (
                    <tr key={index}>
                      <td className="product-item cat-product">
                        <div className="p-thumb">
                          <Link to={"/shop"}>
                            <img src={item.img} alt="" />
                          </Link>
                        </div>
                        <div className="p-content">
                          <Link to={"/shop"}>{item.name}</Link>
                        </div>
                      </td>

                      <td className="cat-price">$ {item.price}</td>
                      <td className="cat-quantity">
                        <div className="cart-plus-minus">
                          <div
                            className="dec qtybutton"
                            onClick={() => handleDecrease(item)}
                          >
                            -
                          </div>
                          <input
                            type="text"
                            className="cart-plus-minus-box"
                            name="qtybutton"
                            value={item.quantity}
                          />
                          <div
                            className="inc qtybutton"
                            onClick={() => handleIncrease(item)}
                          >
                            +
                          </div>
                        </div>
                      </td>
                      <td className="cat-toprice">
                        $ {calculateTotalPrices(item)}
                      </td>
                      <td className="cat-edit">
                        <a href="#" onClick={() => handleRemove(item)}>
                          <img src={delImg} alt="" />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* cart top end ................ */}
            {/* cart bottom start ------------------ */}
            <div className="cart-bottom">
              {/* chekout box */}
              <div className="cart-checkout-box">
                <form className="coupon">
                  <input
                    className="cart-page-input-text"
                    type="text"
                    name="coupon"
                    id="coupon"
                    placeholder="Coupon code.."
                  />
                  <input type="submit" value={"Apply Coupon"} />
                </form>

                <from className="cart-checkout">
                  <input type="submit" value={"Update Cart"} />
                  <div>checkout page</div>
                </from>
              </div>
              {/* chekout box end*/}
            </div>
            {/* cart bottom end -------------------- */}

            {/* shoping box */}
            <div className="shiping-box">
              <div className="row">
                <div className="col-md-6 col-12">
                  <div className="calculate-shipping">
                    <h3>Calculate Shipping</h3>
                    <div className="outline-select">
                      <select>
                        <option value="JKT">Jakarta (JKT)</option>
                        <option value="JATIM">Jawa Timur (JATIM)</option>
                        <option value="JATENG">Jawa Tengah (JATENG)</option>
                        <option value="JABAR">Jawa Barat (JABAR)</option>
                        <option value="KALBAR">
                          Kalimantan Barat (KALBAR)
                        </option>
                        <option value="KALTIM">
                          Kalimantan Timur (KALTIM)
                        </option>
                        <option value="KALTENG">
                          Kalimantan Tengah (KALTENG)
                        </option>
                        <option value="KALSEL">
                          Kalimantan Selatan (KALSEL)
                        </option>
                        <option value="KALUT">Kalimantan Utara (KALUT)</option>
                        <option value="SUMBAR">Sumatera Barat (SUMBAR)</option>
                        <option value="SUMSEL">
                          Sumatera Selatan (SUMSEL)
                        </option>
                        <option value="SUMUT">Sumatera Utara (SUMUT)</option>
                      </select>
                      <span className="select-icon">
                        <i className="icofont-rounded-down"></i>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12">right side</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
