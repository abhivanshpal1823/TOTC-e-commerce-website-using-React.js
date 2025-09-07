import { useState,useRef } from "react";

const StopWatch = () => {
    const [seconds,setSeconds]=useState(0);
    const [minutes,setMinutes] = useState(0);
    const [hours,setHours] = useState(0);
    const [day,setDay] =useState(0);

    let timerRef = useRef(null);

    const startTimer = () => {
       timerRef.current =setInterval(() => {
         setSeconds(seconds => seconds += 1);
       },1000);
    }

    const stopTimer = () => {
        clearInterval(timerRef.current);
        timerRef.current =null;
    }
    const resetTimer = () => {
        stopTimer();
        setSeconds(0);
    }

    return(
        <>
       <div className="page_container mx-auto flex justify-center py-10    ">
         <div className="py-20 bg-amber-500 px-15 rounded-xl ">
            <h2 className="text-[20px] text-center"> StopWatch : {seconds} Seconds</h2>

       <div className="space-x-4 pt-8">
         <button className="text-white bg-blue-800 px-8 rounded-sm py-1 " onClick={startTimer}>Start</button> 
        <button className="text-white bg-blue-800 px-8 rounded-sm py-1 "  onClick={stopTimer}>Stop </button>
        <button className="text-white bg-blue-800 px-8 rounded-sm py-1 "  onClick={resetTimer}> Reset </button>
       </div>
         </div>
       </div>
        </>
    )
}
export default StopWatch;