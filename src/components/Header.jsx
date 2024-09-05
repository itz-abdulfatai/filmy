import { useState, useEffect } from "react";
import { assets } from "../assets/icons";
import Navbar from "./Navbar";
import Tools from "./Tools";
import { Link } from "react-router-dom";

export default function Header() {
  const [navExpanded, setNavExpanded] = useState(false);
  const [passed, setPassed] = useState(false)


  useEffect(() => {
    const handleScroll = () => {
      setNavExpanded(false)
      // Check if the vertical scroll position is greater than 1000px
      if (window.scrollY > 500) {
        setPassed(true);
      } else {
        setPassed(false);
      }
    };



    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function handleNavExpand() {
    if (navExpanded) {
      setNavExpanded(false);

      if (window.scrollY < 500) {
        setPassed(false)

      }
    } else {
      setNavExpanded(true);
      setPassed(true)
    }
  }

  return (
    <header className={` w-full flex justify-between px-10 py-3 h-[70px] fixed top-0 left-0 right-0 z-[999] ${passed?"passed":""}`}>
      <Link to="/">
        <img className=" max-w-16" src={assets.favicon} alt="" />
      </Link>

      <Navbar navExpanded={navExpanded} />
      <Tools />
      <button className="md:hidden bg-secondary p-2 flex justify-center items-center rounded-lg border border-accent2" onClick={handleNavExpand}>
        <img src={assets.menu} alt="" />
      </button>
    </header>
  );
}
