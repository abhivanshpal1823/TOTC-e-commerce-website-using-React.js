import { useRef } from "react";
const Course = () => {
    
  const inputRef = useRef(null);

  

//   const handleFocus = () => {
//     inputRef.current.focus(); // input par focus karwa diya
//   };
    
    return(
        <>
        <div className="py-15 px-20">
      <input ref={inputRef} type="text" placeholder="Enter something..." />
      <button onClick={() => inputRef.current.focus()}>Focus Input</button>
      <br />
     

     
    </div>
        
        </>
    )
}
export default Course;