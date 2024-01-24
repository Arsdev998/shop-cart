import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "../components/modal.css";
import { useLocation, useNavigate } from "react-router-dom";
const CheckOutPage = () => {
  const [show, setShow] = useState(false);
  const [activeTab, setActiveTab] = useState("visa");

  //handle tab change
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  //direct to home page
  const location = useLocation();
  const navigate =  useNavigate();
  const from = location.state?.from?.pathname || "/";
  // handle order
  const handleOrderConfirm = ()=>{
    alert("Order Confirmed")
    localStorage.removeItem("cart")
    navigate(from, {replace:true})
  }
  return (
    <div className="modalcard">
      <Button variant="primary" className="py-2" onClick={handleShow}>
        Proceed to Checkout
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        animation={false}
        className="modal fade"
        centered
      >
        <div className="modal-dialog">
          <h5 className="px-3 mb-3">Select Your Payment</h5>
          <div className="modal-content">
            <div className="modal-body">
              <div className="tabs mt-3">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <a
                      className={`nav-link ${
                        activeTab === "visa" ? "active" : ""
                      }`}
                      href="#visa"
                      id="visa-tab"
                      data-toggle="tab"
                      arial="tab"
                      aria-controls="visa"
                      aria-selected={activeTab === "visa"}
                      onClick={() => handleTabChange("visa")}
                    >
                      <img
                        src="https://tse3.mm.bing.net/th?id=OIP.VOMO352OP4axk11dPRMX2AAAAA&pid=Api&P=0&h=180"
                        alt=""
                        width={80}
                      />
                    </a>
                  </li>
                  {/* paypal */}
                  <li className="nav-item" role="presentation">
                    <a
                      className={`nav-link ${
                        activeTab === "paypal" ? "active" : ""
                      }`}
                      href="#paypal"
                      id="paypal-tab"
                      data-toggle="tab"
                      arial="tab"
                      aria-controls="paypal"
                      aria-selected={activeTab === "paypal"}
                      onClick={() => handleTabChange("paypal")}
                    >
                      <img
                        src="https://tse1.mm.bing.net/th?id=OIP.eFntJMWiAigLvftXw6GfCwHaBz&pid=Api&P=0&h=180"
                        alt=""
                        width={80}
                      />
                    </a>
                  </li>
                </ul>
                {/* contents */}
                <div className="tab-content" id="myTabContent">
                  {/* visa content */}
                  <div
                    className={`tab-pane fade ${
                      activeTab === "visa" ? "show active" : ""
                    }`}
                    id="visa"
                    role="tabpanel"
                    aria-label="visa-tab"
                  >
                    {/* visa tab content */}

                    <div className="mt-4 mx-4">
                      <div className="text-center">
                        <h5>Credit Cart</h5>
                      </div>
                      <div className="form mt-3">
                        <div className="inputbox">
                          <input
                            type="text"
                            name="name"
                            id="name"
                            className="form-control-t"
                            required
                          />
                          <span>Cardholder name</span>
                        </div>
                        <div className="inputbox">
                          <input
                            id="number"
                            min={1}
                            max={999}
                            className="form-control-t"
                            required
                          />
                          <span>Card Number</span>{" "}
                          <i className="fa fa-eye "></i>
                        </div>
                        <div className="d-flex flex-row">
                          <div className="inputbox">
                            <input
                              type="number"
                              name="number"
                              id="number"
                              min={1}
                              max={999}
                              className="form-control"
                              required
                            />
                            <span>Expiration</span>{" "}
                            <i className="fa fa-eye "></i>
                          </div>
                          <div className="inputbox">
                            <input
                              type="number"
                              name="number"
                              id="number"
                              min={1}
                              max={999}
                              className="form-control"
                              required
                            />
                            <span>CVV</span> <i className="fa fa-eye "></i>
                          </div>
                        </div>
                        <div className="px-5 pay">
                          <button className="btn btn-success btn-block" onClick={handleOrderConfirm}> 
                            order
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* paypal content */}
                  <div
                    className={`tab-pane fade ${
                      activeTab === "paypal" ? "show active" : ""
                    }`}
                    id="paypal"
                    role="tabpanel"
                    aria-label="paypal-tab"
                  >
                       <div className="mt-4 mx-4">
                      <div className="text-center">
                        <h5>Paypal Account Info</h5>
                      </div>
                      <div className="form mt-3">
                        <div className="inputbox">
                          <input
                            type="text"
                            name="name"
                            id="name"
                            className="form-control-t"
                            required
                          />
                          <span>Enter Your Email</span>
                        </div>
                        <div className="inputbox">
                          <input
                            id="number"
                            min={1}
                            max={999}
                            className="form-control-t"
                            required
                          />
                          <span>Your Name</span>{" "}
                          <i className="fa fa-eye "></i>
                        </div>
                        <div className="d-flex flex-row">
                          <div className="inputbox">
                            <input
                              type="number"
                              name="number"
                              id="number"
                              min={1}
                              max={999}
                              className="form-control-t"
                              required
                            />
                            <span>Extra Info</span>{" "}
                            <i className="fa fa-eye "></i>
                          </div>
                        </div>
                        <div className="px-5 pay">
                          <button className="btn btn-success btn-block" onClick={handleOrderConfirm}>
                            order
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* paypal disclaimer */}
                <p className="mt-3 px-4 p-Disclaimer"><em> Paypal Disclaimer :</em>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CheckOutPage;
