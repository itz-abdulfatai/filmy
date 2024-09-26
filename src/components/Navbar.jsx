import { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom"
import { UserContext } from "../contexts/UserContext";


function Navbar({navExpanded}) {
  const location = useLocation();
  console.log(location);
  const {loggedIn} = useContext(UserContext)
  


  return (
    <nav className={` flex md:ring-2 md:relative md:h-[unset] md:top-[unset] md:right-[unset] md:left-[unset] bg-primary ring-secondary md:rounded-lg md:w-[40%] text-neutral md:flex md:flex-row md:items-stretch md:justify-around flex-col absolute top-[-300px] transition-all left-0 right-0 h-[40vh] w-full p-5 md:py-2  items-stretch justify-evenly ${navExpanded? "nav-expanded": ''} `}>
      <Link  className={` nav-link md:hover:text-accent px-5 md:px-0 ${location.pathname === '/'?"page-active":""}`} to='/'> Home</Link>
      <Link  className={` nav-link md:hover:text-accent px-5 md:px-0 ${location.pathname === '/movies'?"page-active":""}`} to='movies'> Movies & Shows</Link>
      <Link  className={` nav-link md:hover:text-accent px-5 md:px-0 ${location.pathname === '/support'?"page-active":""}`} to='support'> support</Link>
      <Link  className={` nav-link md:hover:text-accent px-5 md:px-0 ${location.pathname === '/subscription'?"page-active":""}`} to='subscription'>Subscription </Link>
      {!loggedIn && <Link  className={` nav-link md:hover:text-accent px-5 md:px-0    ${location.pathname === '/signin'?"page-active":"bg-accent md:hover:text-ash"}`} to='signin'>signin </Link>}

    </nav>
  )
}

export default Navbar