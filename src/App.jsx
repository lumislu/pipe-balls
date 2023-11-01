import React, { Suspense, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FaBarsStaggered } from "react-icons/fa6";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillTwitterCircle,
} from "react-icons/ai";
import "./App.css";

const Spline = React.lazy(() => import("@splinetool/react-spline"));

function App() {
  const show = useRef([]);

  useEffect(() => {
    show.current.forEach((element) => {
      fadeInAnimation(element);
    });
  }, []);

  function fadeInAnimation(element) {
    gsap.to(element, {
      opacity: 1,
      duration: 3,
      ease: "power2.inOut",
      stagger: 0.2,
    });
  }
  return (
    <div className="container">
      <nav className="nav">
        <span>logo</span>
        <span>
          <FaBarsStaggered />
        </span>
      </nav>
      <div className="header" ref={(el) => show.current.push(el)}>
        <h1>
          <span> 3D </span>
          <br />
          physics <br />
          with <br />
          Spline <br />
        </h1>
      </div>
      <div className="balls">
        <Suspense fallback={<div>Loading...</div>}>
          <Spline scene="https://prod.spline.design/yUUccaAGSIZvv4Sd/scene.splinecode" />
        </Suspense>
      </div>
      <footer className="footer">
        <div>- Learn More -</div>
        <div className="icon">
          <AiFillInstagram />
          <AiFillFacebook />
          <AiFillTwitterCircle />
        </div>
      </footer>
      <div className="bg" ref={(el) => show.current.push(el)}>
        <div className="image">
          <img src="./images/img.png" />
          <a href="https://prod.spline.design/yUUccaAGSIZvv4Sd/scene.splinecode"></a>
        </div>
      </div>
    </div>
  );
}

export default App;
