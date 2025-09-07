import { useState } from "react";
import SignupImage from "../assets/images/SignupImage.png";

const Signup = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});


  const validateForm = () => {
    let isValid = true;
    const newError = {}

    if (!name.trim()) {
      newError.name = "name is required !";
      isValid = false;
    }
    if (!email.trim()) {
      newError.email = "email is required !";
      isValid = false;
    }
    if (!password.trim()) {
      newError.password = "password is required !";
      isValid = false;
    }
    setError(newError);
    return isValid;
  }


  const handlerSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const data = {
        name,
        email,
        password,
      }
      console.log("Form Value", data)
    }

  }

  return (
    <div className="w-full">
      <div className="w-[75%] mx-auto flex py-10 items-center">
        <div className="w-full max-md:hidden h-screen bg-no-repeat bg-contain bg-center "
          style={{ backgroundImage: `url(${SignupImage})` }}>
        </div>
        <div className="w-[calc(100%)]  mx-auto ">
          <div className="w-[85%] mx-auto">
            <h2 className="text-center text-[1.5em] max-xl:text-[1em] "> Welcome to lorem...!</h2>
            <div className="flex gap-8 max-xl:gap-5 max-xl:py-1.5 max-xl:px-2 max-lg:gap-2 max-lg:py-1 max-lg:px-2 max-lg:mt-2 bg-[#49BBBD] w-fit px-4 py-2 mt-6 max-xl:mt-4 rounded-4xl mx-auto">
              <button className="hover:bg-sky-600 px-12 max-xl:px-8 rounded-2xl text-white">Login</button>
              <button className="hover:bg-sky-600 px-10 max-xl:px-8 rounded-2xl py-2 text-white">Register </button>
            </div>
            <div className=" w-[80%] mx-auto ">
              <p className="text-[1.25em] pt-8 max-xl:text-[1em] max-xl:pt-4 max-lg:pt-2 max-lg:text-[0.80em]" >Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

              <form className=" mt-12 max-xl:mt-8 max-xl:space-y-6 space-y-6" onSubmit={handlerSubmit} >
                <div>
                  <label className="block max-lg:text-[0.85em]" htmlFor="userEmail">Email Address</label>
                  <input
                    type="text"
                    name="userEmail"
                    id="userEmail"
                    placeholder="Enter your email address"
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full border-1 focus:outline-none  border-[#23BDEE] py-2 px-4 rounded-4xl" />
                  {error.email && <span className="text-red-500 pt-2">{error.email}</span>}
                </div>

                <div>
                  <label className="block  max-lg:text-[0.85em]" htmlFor="username">UserName</label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your User name"
                    className="block  w-full border-1 focus:outline-none border-[#23BDEE] py-2 px-4 rounded-4xl" />
                  {error.name && <span className="text-red-500 pt-2">{error.name} </span>}
                </div>
                <div>

                  <label className=" max-lg:text-[0.85em]" htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    className="block  focus:outline-none w-full border-1 border-[#23BDEE] py-2 px-4 rounded-4xl" />

                  {error.password && <span className="text-red-500 "> {error.password} </span>}

                </div>
                <div className="flex justify-end">
                  <button type="submit" className="bg-[#49BBBD] hover:bg-sky-600 rounded-4xl px-14 py-2 text-white ">Register</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>


  )
}
export default Signup;




