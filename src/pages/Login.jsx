import { useState } from "react";
import FormFields from "../components/Formfields";

const Login = () => {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [error, setError]=useState({});
    // const [submittedData, setSubmittedData]=useState(null);

    const validateForm = () => {
        let isValid = true;
        const newError = {};

        if(!name.trim()){
            newError.name="name is required";
            isValid = false;
        }

        if(!email.trim()){
            newError.email = "Email is required"
            isValid = false
        }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)){
            newError.email="email is invalid"
            isValid = false;
        }
        if(!password.trim()){
            newError.password = "Password is required"
            isValid = false
        }else if (password.length < 6 ){
            newError.password = "password should we at least 6 charters long"
            isValid = false
        }
        setError(newError);
        return isValid;
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(validateForm()){
            const submittedData = {
                name,
                email,
                password
            }
            // setSubmittedData(submittedData);
            console.log("Form Submitted" , submittedData)
        }
    } 
 
    return(
        <>
        <div className="page_container left-0 right-0 mx-auto py-8">
            <div className="mx-auto w-[34%] bg-gray-100 px-10 pb-20 rounded-br-4xl rounded-tl-4xl  pt-10">
                <h2 className="text-3xl font-semibold text-center pb-10"> Login Form </h2>
              <form className="" onSubmit={handleSubmit}>
                <FormFields
                label="Username"
                type="text"
                labelID="username"
                value={name}
                placeholder="username"
                onChange={(e) => setName(e.target.value)}
                inputClass="border-2 border-gray-700 py-1 px-2 w-full rounded-sm"
                labelClass="text-[20px] text-gray-800   block"
                />
                {error.name && <span className="text-red-600">{error.name}</span>}
                <FormFields
                label="Email"
                type="email"
                labelID="email"
                value={email}
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
                inputClass="border-2 border-gray-700 py-1 px-2 w-full rounded-sm"
                labelClass="text-[20px] text-gray-800 pt-4  block"
                />
                 {error.email && <span className="text-red-600">{error.email}</span>}
                <FormFields
                label="Password"
                type="password"
                labelID="password"
                value={password}
                placeholder="password"
                onChange={(e)=> setPassword(e.target.value)}
                inputClass="border-2 border-gray-700 py-1 px-2 w-full rounded-sm"
                labelClass="text-[20px] pt-4 text-gray-800  block"
                />
                 {error.password && <span className="text-red-600">{error.password}</span>}

                 <button className="text-[18px] text-white bg-blue-700 px-10 rounded-sm mt-8 float-end py-1" type="submit">Login</button>

              </form>
            </div>
            {/* {submittedData && (
                <div>
                    <h2> Submitted Data :</h2>
                    <p>{submittedData.name}</p>
                    <p>{submittedData.email}</p>
                    <p>{submittedData.password}</p>
                </div>
            )} */}

        </div>
        </>
    )
}
export default Login;