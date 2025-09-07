// import { spawn } from "child_process";
import { useState } from "react";

const New_login = () => {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password, setPassword]=useState("");
    const [error, setError]=useState({ })

    const validateForm = () => {
        let isValid = true;
        const newError = {};

        if(!name.trim()){
            newError.name="Name is required !"
            isValid = false;
        }
        if(!email.trim()){
            newError.email="email is required !"
            isValid = false;
        }
        if(!password.trim()){
            newError.password="passwor is required!"
            isValid = false
        }
        setError(newError);
        return isValid
    }

    const handlerSubmit = (e) => {
        e.preventDefault()
        if(validateForm()){
              const data = {
            name,
            email,
            password
        }
        console.log("Form value",{data})
        }
    }
    return(
        <>
     <div className="page_container mx-auto">
         <div className="mx-auto py-10">
          <form onSubmit={handlerSubmit}>
              <label htmlFor="name" className="block">Name</label>
              <input type="text" placeholder="username" value={name}   autoComplete="name" className="border-2 border-gray-500 " onChange={(e)=> setName(e.target.value)}/>
              {error.name && <span className="text-red-500">{error.name}</span>  }
            <label htmlFor="email" className="block">Email</label>
              <input type="email" placeholder="email" value={email}   autoComplete="email" className="border-2 border-gray-500 " onChange={(e)=> setEmail(e.target.value)} />
              {error.email && <span className="text-red-500">{error.email}</span>  }
            <label htmlFor="password" className="block">Password</label>
              <input type="password" placeholder="password" value={password}   autoComplete="password"  className="border-2 border-gray-500 " onChange={(e)=> setPassword(e.target.value)}/>
              {error.password && <span className="text-red-500">{error.password}</span>  }

              <button className="border-1 border-gray-600 block mt-4 px-8 py-1 bg-blue-600  " type="submit">Login</button>
          </form>
         </div>

     </div>
        </>
    )
}
export default New_login;