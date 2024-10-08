// import React, { useState } from 'react';

// export const Card = ({ id, image, info, price, name }) => {
//     const [readmore, setReadmore] = useState(false);
    
//     // Get a truncated version of the info
//     const description = readmore ? info : `${info.substring(0, 100)}...`;

//     // Toggle read more / show less
//     function readmoreHandler() {
//         setReadmore(!readmore);
//     }
//     function removeHandler(){

//     }

//     return (
//         <div className='card border p-4 rounded-lg shadow-md'>
//             <img src={image} className='rounded-[40px] shadow-md shadow-[rgba(0,0,0,0.15)] mb-2 transition-transform duration-300 hover:scale-105' alt={name} />
//             <div className='bg-green-200 p-4 rounded-lg'>
//                 <div className='mb-2'>
//                     <h4>{price}</h4>
//                     <h4 className='text-xl'>{name}</h4>
//                 </div>
//                 <div>
//                     <p>{description}</p>
//                     <span
//                         onClick={readmoreHandler}
//                         className='text-blue-500 cursor-pointer'
//                     >
//                         {readmore ? 'Show Less' : 'Read More'}
//                     </span>
//                 </div>
//             </div>
//             <button className='bg-[#FF4136] text-white p-2 rounded hover:bg-[#E12F2F] mt-2' onClick={removeHandler}>
//                 Not Interested
//             </button>
//         </div>
//     );
// };

//4.1.1 pahle humne card ke  ander data pass kiya tha usse props bolte h
// av props ko const Card = (id,name etc)akrke use karege

// 4.1.1 fir hume read more ke liye charctor nikalne honge  {description} m fir m infor m el substring method apply karuga
// fir show more and show less bi handlew karna hoga isse ui change ho rhoi h for that we will be use useState 
// yaha per readmore and setreadmore m false set kar dnege and niche span tag m readmore ? m true h to / show less and false m readmore /// based on boolean value
// and listenner laga diya kyon click hone per ui chnage ho rhi h  function readmoreHandler(){
//   setReadmore(!readmore);
// } ismain yeh true readmore ko true/false bana dega according to previous state

//after chat gpt 5.8 pm 

import React, { useState } from 'react';

export const Card = ({ id, image, info, price, name, removeHandler }) => {
    const [readmore, setReadmore] = useState(false);
    
    const description = readmore ? info : `${info.substring(0, 100)}...`;

    const readmoreHandler = () => {
        setReadmore(!readmore);
    };

    return (
        <div className='card border p-4 rounded-lg shadow-md'>
            {/* <img src={image} className='rounded-[40px] shadow-md shadow-[rgba(0,0,0,0.15)] mb-2 transition-transform duration-300 hover:scale-105' alt={name} /> */}
            <img 
  src={image} 
  className='w-[600px] h-[300px] object-cover rounded-[40px] shadow-md shadow-[rgba(0,0,0,0.15)] mb-2 transition-transform duration-300 hover:scale-105' 
  alt={name} 
/>

            <div className='bg-green-200 p-4 rounded-lg my-6'>
                <div className='mb-2'>
                    <h4 className='text-amber-600 font-bold'>₹ {price}</h4>
                    <h4 className='text-xl text-[#319795]'>{name}</h4>
                </div>
                <div>
                    <p>{description}</p>
                    <span
                        onClick={readmoreHandler}
                        className='text-blue-500 cursor-pointer'
                    >
                        {readmore ? 'Show Less' : 'Read More'}
                    </span>
                </div>
            </div>
            <div className='flex justify-center'>
    <button className='bg-[#FF4136] text-white p-2 rounded hover:bg-[#E12F2F] mt-2 px-16' onClick={removeHandler}>
        Not Interested
    </button>
</div>
        </div>
    );
};

