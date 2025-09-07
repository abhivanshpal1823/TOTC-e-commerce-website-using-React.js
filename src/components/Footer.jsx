import { Link } from "react-router";
import Logo from "../assets/images/toct_logo.png"

const Footer = () => {
  return (
    <div className="w-full bg-[#252641] mt-10">
  <div className="flex flex-col justify-center items-center gap-8 py-6">
    
    {/* First Column */}
    <div className="flex items-center space-x-10">
      <img src={Logo} alt="Logo" className="w-auto " />
      <span className="border-r border-gray-500 h-12"></span>
      <p className="text-white text-[1em] font-semibold">
        Virtual Class <br /> for Zoom
      </p>
    </div>

    {/* Second Column */}
    <div className="text-white ">
      <h2 className="text-[1.5em] font-medium text-[#B2B3CF] text-center max-sm:text-[1em]"> Subscribe to get our Newsletter </h2>
   <div className="space-x-6 pt-2">
     <input type="email" name="email" placeholder="Your Email" className="border py-2.5 px-5 rounded-4xl w-70 text-[1em] font-light max-sm:w-50 max-sm:py-2 max-sm:px-3" />
    <button className="bg-[#49BBBD] px-10 py-3 rounded-4xl max-sm:px-5 max-sm:py-2 ">Subscribe</button>
   </div>
    </div>

    {/* Third Column */}
    <div className="text-white ">
     <ul className="flex gap-4 text-[#B2B3CF] text-[1em] max-sm:text-[0.95em] ">
      <li><Link to="">Careers</Link><span className="border-r-1 pl-4"></span></li>
      <li><Link to=""> Privacy Policy </Link><span className="border-r-1 pl-4"></span></li>
      <li><Link to=""> Terms & Conditions </Link></li>
     </ul>

     <p className="text-[#B2B3CF] text-[1.125em] text-center pt-4"> © 2021 Class Technologies Inc. </p>
    </div>

  </div>
</div>








  )
}
export default Footer;