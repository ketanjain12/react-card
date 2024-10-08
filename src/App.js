// import { useState } from "react";
// import "./App.css";

// function App() {

//  const[count,setcount]=useState(0);
// //  const [trend, setTrend] = useState(null);
// //  setTrend(count  ? 'increasing' : 'decreasing');
//  function decreaseHandler(){
//   if(count>0){
//     setcount(count-1);
//   }
//  }

//  function resetHandler(){
//   setcount(0);
//  }
//  function increaseHandler(){
//   setcount(count+1);
//  }

//   return (
//     <div className="bg-gray-200 w-[100vw] h-[100vh] flex justify-center items-center flex-col">
//   <div className="bg-green-300 p-5">
//       <div className="text-[#0398d4] font-medium text-2xl">increment && decrement</div>
//       <div className="bg-white flex gap-10 justify-center py-1 rounded-sm text-[25px] text-[#344151] px-1" >
//         <button onClick={decreaseHandler} className="border-r-2 text-center w-20 border-[#bfbfbf] text-5xl">-</button>
//         <div className="font-bold gap-12 text-2xl pt-2">{count}</div>
//         <button onClick={increaseHandler} className="border-l-2 text-center w-20 border-[#bfbfbf] text-5xl">+</button>
//       </div>
//       <button onClick={resetHandler} className="bg-blue-600 text-lg text-center text-white mt-2 py-1 px-2 ml-28"> Reset</button>
//   </div>

//     </div>
//   );
// }

// export default App;

// second porject card related
import React, { useState } from "react";
import data from "./data";
import { Tours } from "./componets/Tours";

const App=()=>{

  const [tours,setTours]=useState(data);

  return(
    <div className="flex">
    
    <Tours tours={tours}></Tours> 
  </div>
  )
}
export default App;
// 1. sabse pahle <Tours></Tours>  karge fir component banayege
// 2. components folder m tours.js file banayege
// 3 uske bad app.js m usestate(  const [tours,setTours]=useState(data);) ka use karuga/data,js file ko import karva liya app.js m 
// isse sab city ka data tours state m aa gya hoga fir humne <Tours></Tours> component m tours state ko as props pass kar diya tours m                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              like
//    <Tours tours={tours}></Tours> and tours ko import kiya app.js m

// 4 fir tpurs.js file m data enter kiya where we can use map function for shwoing all city data on browser
// and vha per jo props pass kiya tha uska use karge and uska use karke map function ka use karek data nikal lunga
// and vaha per <card></card> name ka component bana lunga


                                                                                                         