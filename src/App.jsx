import "./App.scss";

import Img7 from "./assets/img7.jpg";
import Img6 from "./assets/img6.jpg";
import Img5 from "./assets/img5.jpg";
import Img4 from "./assets/img4.jpg";
import Img3 from "./assets/img3.jpg";
import Img2 from "./assets/img2.jpg";
import Img1 from "./assets/img1.jpg";

import { useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

function App() {
  const navContainer = useRef();
  const tl = useRef();

  useGSAP(() => {
    gsap.set(navContainer.current, { y: -100 });
    gsap.set(".letter-wrapper", { y: 400 });
    gsap.set(".item-copy-wrapper p", { y: 50 });
    gsap.defaults({ duration: 1, ease: "power3.out" });

    tl.current = gsap.timeline({ pause: true, delay: 0.5 });

    tl.current
      .to(".letter-wrapper", { y: 0, stagger: 0.1 })
      .to(".header-item-1", { left: "12vw" })
      .to(".header-item-2", { right: "8vw" }, "<")
      .to(
        ".item-main .item-img img",
        { clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)" },
        "<"
      )
      .to(".header-item-1", { left: 0, scale: 1 })
      .to(".header-item-2", { right: 0, scale: 1 }, "<")
      .to(".item-main .item-img img", { scale: 1 }, "<")
      .to(
        ".item-side .item-img",
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%",
          stagger: 0.1,
        },
        "<"
      )
      .to(".header", { bottom: "-2rem" }, "<")
      .to(".item-copy-wrapper p", { y: 0, stagger: 0.05 }, "<")
      .to("nav", { y: 0 }, "<");
  });

  return (
    <>
      <nav ref={navContainer}>
        <div className="logo">
          <a href="#">LGNT Vase</a>
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
                  <p>Vase blanc</p>
                </div>
                <div className="item-copy-wrapper">
                  <p>(Collection white)</p>
                </div>
              </div>
              <div className="item-img">
                <img src={Img1} alt="single-vase" />
              </div>
            </div>
            <div className="item item-side">
              <div className="item-copy">
                <div className="item-copy-wrapper">
                  <p>Vase gris</p>
                </div>
                <div className="item-copy-wrapper">
                  <p>(Collection grey)</p>
                </div>
              </div>
              <div className="item-img">
                <img src={Img2} alt="single-vase" />
              </div>
            </div>
            <div className="item item-side">
              <div className="item-copy">
                <div className="item-copy-wrapper">
                  <p>Vase belge</p>
                </div>
                <div className="item-copy-wrapper">
                  <p>(Collection belge)</p>
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
                  <p>Vases sky</p>
                </div>
                <div className="item-copy-wrapper">
                  <p>(Collection prime)</p>
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
                  <p>Vase pierre</p>
                </div>
                <div className="item-copy-wrapper">
                  <p>(Collection stone)</p>
                </div>
              </div>
              <div className="item-img">
                <img src={Img4} alt="single-vase" />
              </div>
            </div>
            <div className="item item-side">
              <div className="item-copy">
                <div className="item-copy-wrapper">
                  <p>Vase béton</p>
                </div>
                <div className="item-copy-wrapper">
                  <p>(Collection concrete)</p>
                </div>
              </div>
              <div className="item-img">
                <img src={Img5} alt="single-vase" />
              </div>
            </div>
            <div className="item item-side">
              <div className="item-copy">
                <div className="item-copy-wrapper">
                  <p>Vases jumeaux</p>
                </div>
                <div className="item-copy-wrapper">
                  <p>(Collection twins)</p>
                </div>
              </div>
              <div className="item-img">
                <img src={Img7} alt="single-vase" />
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
