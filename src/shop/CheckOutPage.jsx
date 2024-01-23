import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const CheckOutPage = () => {
  const [show, setShow] = useState(false);
  const [activeTab, setActiveTab] = useState("visa");

  //handle tab change
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
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
                    <a className={`nav-link ${activeTab === "visa" ? "active": "" }`} href="#visa"
                    id="visa-tab"
                    data-toggle="tab"
                    arial='tab'
                    aria-controls="visa"
                    aria-selected={activeTab === "visa"}
                    onClick={() => handleTabChange("visa")}>
                    
                      <img
                        src="https://tse3.mm.bing.net/th?id=OIP.VOMO352OP4axk11dPRMX2AAAAA&pid=Api&P=0&h=180"
                        alt=""
                        width={80}
                      />
                    </a>
                  </li>
                  {/* paypal */}
                  <li className="nav-item" role="presentation">
                    <a className={`nav-link ${activeTab === "paypal" ? "active": "" }`} href="#paypal"
                    id="visa-tab"
                    data-toggle="tab"
                    arial='tab'
                    aria-controls="paypal"
                    aria-selected={activeTab === "paypal"}
                    onClick={() => handleTabChange("paypal")}>
                    
                      <img
                        src="https://tse1.mm.bing.net/th?id=OIP.eFntJMWiAigLvftXw6GfCwHaBz&pid=Api&P=0&h=180"
                        alt=""
                        width={80}
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CheckOutPage;
