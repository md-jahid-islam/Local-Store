import React from 'react'
import { FaShoppingCart } from "react-icons/fa";

const DataCompo = () => {
  return (
    <>
    <section className=' w-[550px] bg-white'>
        <div className="container pl-5">
            <div className=' ietm flex'> 
             <div className=' w-[500px] h-[500pxs] '>
                <img src=" public/images/hadn_wash.png" alt="img" />

             </div>
             <div className=' item details'>
                <div className=' item-details--titel font-bold text-[#aab4f3] ml-[60px] mt-[40px] '>

                </div>
               <div className=' item details--feature ml-[70px] mt-[40px]'>
                <h2 className=' font-bold text-[#000] text-2xl'>key_features</h2>
                <ul className=' font-bold text-[17px] text-black'>
                    <li> Intel Core :i7 processor </li>
                    <li> RAM:16GB </li>
                    <li> SSD:512GB </li>
                    <li>  display:13.3 inch FHD</li>

                </ul>
                <p className=' flex justify-center items-center font-lato mt-5 text-[25px] text-red-700 font-extrabold border-e border-2 rounded-full'>Price:59.99</p>

               </div>
               <div className='btn item--details ml-[60px] mt-[65px]'>
               <button className=' w-[200px] h-[40px] border border-green-500 rounded-full hover:scale-105 transition bg-red-600 hover:bg-orange-500'> <FaShoppingCart className='  absolute ml-5 w-9 h-5'/>Buy Now</button>
               </div>
             </div>
            </div>
        </div>
        <section className=''>
        <footer className='bg-[#f2f4f8] '>
        <div className="container">
            <div
                className="specification mt-[50px] rounded-md w-full h-full bg-white font-lato text-[25px] text-black font-bold ">
                <h2 className=' ml-[30px] pt-4'>Specification</h2>
                <div className="basic-information font-lato text-[17px] text-black  font-medium  ml-[50px] mr-[50px]">
                    <h3 className='text-[17px] text-[#3749bb]  font-bold mb-[20px] mt-[20px] bg-[#f2f4f8] rounded'>Basic
                        information</h3>
           
                    <p>model: </p>
                    <hr />
                    <p>processor:</p>
                    <hr />
                    <p>display: </p>
                    <hr />
                 
                </div>
                <div
                    className="memory-specifications  font-lato text-[17px] text-black  font-medium  ml-[50px] mr-[50px]">
                    <h3 className='text-[17px] text-[rgb(74,224,230)]  font-bold mb-[20px] mt-[20px] bg-[#f2f4f8] rounded'>
                        Memory Specifications</h3>

                    <p>RAM: </p>
                    <hr />
                    <p>storage: </p>
                    <hr />
                   

                </div>
                <div
                    className="warranty-information  font-lato text-[17px] text-black  font-medium  ml-[50px] mr-[50px]">
                    <h3 className='text-[17px] text-[rgb(79,245,223)]  font-bold mb-[20px] mt-[20px] bg-[#f2f4f8] rounded'>
                        Warranty_Information</h3>
                    <p className='pb-5'>duration:</p>
                    <p className='pb-5'>type:</p>
                </div>
             
            </div>
        </div>
    </footer>


        </section>

    </section>
    
    </>
  )
}

export default DataCompo