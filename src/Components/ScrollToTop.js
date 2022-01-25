import  React, { useState, useEffect } from "react";
import {FaArrowUp} from 'react-icons/fa';

const ScrollToTop = () => {

  //state of  the button
  const [showButton, setShowButton] = useState(false);


  //mounting of the button
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false)
      }
    })
  }, [])

  //function to take the user to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div>
      {/* {showButton && (<button onClick={scrollToTop} className="to-top-btn">
        <FaArrowCircleUp />
      </button>)} */}
      {showButton ? <button onClick={scrollToTop} className="to-top-btn">
        <FaArrowUp />
      </button> : false}
    </div>
  )

}
export default ScrollToTop;