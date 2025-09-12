import { Link, useLocation } from "react-router";
import Nav_log from "../assets/images/toct_logo.png"
import UserEllipse from "../assets/images/user-Ellipse.png";

const Header = () => {
  const location = useLocation();
  //  const hideAuthLinks = location.pathname === "/about-us";`
  const isHome = location.pathname === "/";
  return (
    <>
      <div className={`main_container ${isHome ? "bg-[#49bbbd]" : ""}`}>
        <div className="page_container mx-auto items-center  flex justify-between py-4 max-md:flex-col ">
          {isHome ? <Link to="/"> <img src={Nav_log} alt="logoImg" /></Link> : <Link className="bg-[#7eccce] px-4  rounded-[45%] opacity-90 " to="/"> <img src={Nav_log} alt="logoImg" /></Link>}
          {/* <Link to ="/"> <img src={Nav_log} alt="logoImg" /></Link> */}
          <div className="flex gap-10 items-center max-sm:flex-col   ">
            {isHome ?
              <ul className={`flex gap-14  text-[20px] max-md:flex-col ${isHome ? "text-white" : "text-gray-600"}  `}>
                <li>  <Link to="/">Home</Link> </li>
                <li>  <Link to="/membership">MemberShip</Link> </li>
                <li>  <Link to="/course">Course</Link> </li>
                <li>  <Link to="/blog">Blog</Link> </li>
                <li>  <Link to="/about-us">About Us</Link> </li>
              </ul>
              :
              <div className="flex items-center gap-6">
                <ul className={`flex gap-14  text-[20px] max-md:flex-col ${isHome ? "text-white" : "text-gray-600"}  `}>
                  <li>  <Link to="/">Home</Link> </li>
                  <li>  <Link to="/membership">MemberShip</Link> </li>
                  <li>  <Link to="/course">Course</Link> </li>
                  <li>  <Link to="/blog">Blog</Link> </li>
                  <li>  <Link to="/about-us">About Us</Link> </li>
                </ul>
                <img src={UserEllipse} alt="userImg" />
              </div>
            }
            {isHome && (
              <div className="gap-2 flex max-md:flex-col">
                <Link to="/signup"><button className="text-white px-10 py-2 cursor-pointer  text-[18px] font-medium rounded-3xl  bg-[#7eccce] hover:bg-blue-400">SignUp</button></Link>
                <Link to="/login"><button className="text-white   px-2 pt-2  text-[18px] bg-[#f3627c] cursor-pointer font-medium rounded-3xl" title="login"  ><i className="fa-regular fa-circle-user text-3xl text-gray-100 hover:text-white"></i></button></Link>
              </div>
            )}

          </div>
        </div>

      </div>
    </>
  )
}
export default Header;