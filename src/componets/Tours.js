// import React from 'react'
// import { Card } from './Card'
// export const Tours = ({tours}) => {
//   return (
//     <div>
//       <div>
//       <h1 className="inline-block border-2 border-dotted border-red-500 p-4 text-center my-2 text-2xl ml-[660px]">Plan With love</h1>
//       </div>
//       <div className='grid grid-rows-3 grid-flow-col gap-3 mx-10'>
//          {
//           tours.map((tour)=>{
//             return <Card {...tour}></Card>
//           })
//          }
//       </div>
//     </div>
//   )
// }

// 4.1 yaha tours jo props pass kiya tha uska yaha use kar lunga and us per map function ka use kar lunga 
// than i will create an card component in tpurs.s file
// <Card {...tour}></Card> ...tour: The spread operator ... is used to "spread" or pass the properties of an object as individual props to the Card component.
// ... as clone we can assume as clone /or bass the copy of data    
// then componenst folder m card.js name se file bana lunga fir card m jauga aage ka dtta 4.1.1 karke milega

//after chat gpt code 
import React, { useState } from 'react';
import { Card } from './Card';

export const Tours = ({ tours }) => {
    // Initialize the tours state
    const [tourList, setTourList] = useState(tours);
    const [showReload, setShowReload] = useState(false); // State to manage reload button visibility

    const removeTour = (id) => {
        const updatedTours = tourList.filter(tour => tour.id !== id);
        setTourList(updatedTours);

        // Show the reload button if there are no tours left
        if (updatedTours.length === 0) {
            setShowReload(true);
        }
    };

    const reloadTours = () => {
        setTourList(tours); // Reset to original tours
        setShowReload(false); // Hide reload button
    };

    return (
        <div>
            <div>
            <h1 className="inline-block border-2 border-dotted border-red-500 bg-sky-200 p-4 text-center my-2 text-2xl ml-[660px] rounded-md">
    Plan With Ketan
</h1>



           </div>
            <div className='grid grid-rows-3 grid-flow-col gap-3 mx-10'>
                {tourList.map((tour) => {
                    return (
                        <Card 
                            key={tour.id} 
                            {...tour} 
                            removeHandler={() => removeTour(tour.id)} // Pass remove handler
                        />
                    );
                })}
            </div>
            {/* Conditionally render the reload button when no tours are left */}
            {showReload && (
                <div className="flex justify-center mt-4">
                    <button 
                        className='bg-green-500 text-white p-2 rounded hover:green-600 text-center' 
                        onClick={reloadTours}
                    >
                        Reload Tours
                    </button>
                </div>
            )}
        </div>
    );
};
