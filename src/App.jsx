import { useState } from "react";
import "./App.scss";

import Img6 from "./assets/img6.jpg";
import Img5 from "./assets/img5.jpg";
import Img4 from "./assets/img4.jpg";
import Img3 from "./assets/img3.jpg";
import Img2 from "./assets/img2.jpg";
import Img1 from "./assets/img1.jpg";

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
                <img src={Img1} alt="single-vase" />
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
                <img src={Img2} alt="single-vase" />
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
                <img src={Img3} alt="single-vase" />
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
                <img src={Img4} alt="single-vase" />
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
                <img src={Img5} alt="single-vase" />
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
                <img src={Img6} alt="single-vase" />
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
      </div>
    </>
  );
}

export default App;
