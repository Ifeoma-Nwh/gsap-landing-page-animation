import { useState } from "react";
import "./App.scss";

import Img6 from "./assets/img6.jpg";

function App() {
  return (
    <>
      <nav>
        <div className="logo">
          <a href="#">Lgnt Vase</a>
        </div>
        <div className="nav-items">
          <a href="#">Home</a>
          <a href="#">Info</a>
          <a href="#">Products</a>
          <a href="#">Shop</a>
        </div>
        <div className="contact">
          <a href="#">Contact</a>
        </div>
      </nav>

      <div className="container">
        <div className="items">
          <div className="items-col">
            <div className="item item-side">
              <div className="item-copy">
                <div className="item-copy-wrapper">
                  <p>Lorem ipsum</p>
                </div>
                <div className="item-copy-wrapper">
                  <p>Lorem ipsum</p>
                </div>
              </div>
              <div className="item-img">
                <img src={Img6} alt="multiple-vases" />
              </div>
            </div>
            <div className="item item-side">
              <div className="item-copy">
                <div className="item-copy-wrapper">
                  <p>Lorem ipsum</p>
                </div>
                <div className="item-copy-wrapper">
                  <p>Lorem ipsum</p>
                </div>
              </div>
              <div className="item-img">
                <img src={Img6} alt="multiple-vases" />
              </div>
            </div>
            <div className="item item-side">
              <div className="item-copy">
                <div className="item-copy-wrapper">
                  <p>Lorem ipsum</p>
                </div>
                <div className="item-copy-wrapper">
                  <p>Lorem ipsum</p>
                </div>
              </div>
              <div className="item-img">
                <img src={Img6} alt="multiple-vases" />
              </div>
            </div>
          </div>
          <div className="items-col">
            <div className="item item-main">
              <div className="item-copy">
                <div className="item-copy-wrapper">
                  <p>Lorem ipsum</p>
                </div>
                <div className="item-copy-wrapper">
                  <p>Lorem ipsum</p>
                </div>
              </div>
              <div className="item-img">
                <img src={Img6} alt="multiple-vases" />
              </div>
            </div>
          </div>
          <div className="items-col">
            <div className="item item-side">
              <div className="item-copy">
                <div className="item-copy-wrapper">
                  <p>Lorem ipsum</p>
                </div>
                <div className="item-copy-wrapper">
                  <p>Lorem ipsum</p>
                </div>
              </div>
              <div className="item-img">
                <img src={Img6} alt="multiple-vases" />
              </div>
            </div>
            <div className="item item-side">
              <div className="item-copy">
                <div className="item-copy-wrapper">
                  <p>Lorem ipsum</p>
                </div>
                <div className="item-copy-wrapper">
                  <p>Lorem ipsum</p>
                </div>
              </div>
              <div className="item-img">
                <img src={Img6} alt="multiple-vases" />
              </div>
            </div>
            <div className="item item-side">
              <div className="item-copy">
                <div className="item-copy-wrapper">
                  <p>Lorem ipsum</p>
                </div>
                <div className="item-copy-wrapper">
                  <p>Lorem ipsum</p>
                </div>
              </div>
              <div className="item-img">
                <img src={Img6} alt="multiple-vases" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="header">
        <div className="header-item header-item-1">
          <div className="letter">
            <div className="letter-wrapper">L</div>
          </div>
          <div className="letter">
            <div className="letter-wrapper">G</div>
          </div>
          <div className="letter">
            <div className="letter-wrapper">N</div>
          </div>
          <div className="letter">
            <div className="letter-wrapper">T</div>
          </div>
        </div>
        <div className="header-item header-item-2">
          <div className="letter">
            <div className="letter-wrapper">V</div>
          </div>
          <div className="letter">
            <div className="letter-wrapper">A</div>
          </div>
          <div className="letter">
            <div className="letter-wrapper">S</div>
          </div>
          <div className="letter">
            <div className="letter-wrapper">E</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
