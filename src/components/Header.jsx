import { Link,useLocation } from "react-router";
import Nav_log from "../assets/images/toct_logo.png"

const Header = () => {
  const location = useLocation();
  //  const hideAuthLinks = location.pathname === "/about-us";`
     const isHome = location.pathname === "/";
    return(
        <>
      <div className={`main_container ${isHome ? "bg-[#49bbbd]":"bg-yellow-700"}`}>
          <div className="page_container mx-auto items-center  flex justify-between py-4 max-md:flex-col ">
           <Link to ="/"> <img src={Nav_log} alt="" /></Link>
         <div className="flex gap-10 items-center max-sm:flex-col   ">
             <ul className="flex gap-14 text-white text-[20px] max-md:flex-col ">
            <li>  <Link to="/">Home</Link> </li>
            <li>  <Link to="/membership">MemberShip</Link> </li>
            <li>  <Link to="/course">Course</Link> </li>
            <li>  <Link to="/blog">Blog</Link> </li>
            <li>  <Link to="/about-us">About Us</Link> </li>
          </ul>
        {isHome && (
         <div className="gap-8 flex max-md:flex-col">
             <Link to="/login"><button className="text-gray-500 px-10 py-2 text-[18px] cursor-pointer font-medium rounded-3xl bg-white" >Login</button></Link>
              <Link to="/signup"><button className="text-white px-10 py-2 cursor-pointer  text-[18px] font-medium rounded-3xl  bg-[#7eccce]">SignUp</button></Link>
              </div>
            ) }

         </div>
        </div>

      </div>
        </>
    )
}
export default Header;