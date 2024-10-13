 import React, { useEffect, useState } from 'react'
 import { PiNotebookFill } from "react-icons/pi";
 import { FaShoppingCart } from "react-icons/fa";
 import { useDispatch } from 'react-redux'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ProductData } from '../Slices/CounterSlices';

 const HomeCompo = () => {
  const [productData , setProductData] = useState([])
  const navigate = useNavigate()
  const dispatch = useDispatch()


 useEffect(()=>{
    
 axios.get('https://api.jsonbin.io/v3/b/670a0c74ad19ca34f8b70979')
 .then((res)=> setProductData((res.data.record)))
 .catch((err)=> console.log((err)))
 },[])
 


  const handelShow =(mistialu)=>{
    navigate('/Data')
    console.log(mistialu)
    dispatch(ProductData(mistialu))
  }

  return (
   <>
   <div className="container">
    <div className=' main-content flex gap-5 flex-wrap p-5'>
       {
        productData.map((item,i)=>(
            <div key={i} className=' item w-[250px] h-[680px] bg-[#FF8A8A]  p-0 rounded-lg hover:scale-110 shadow-xl relative hover:text-all card-bg-green- 300 transition'>
            <div className='item-image h-[250px] flex justify-center items-center hover: bg-red-300 all-i hover:bg-red-700 rounded-1.9xl '>
             <img src={item.image} alt="img" />
            </div>

            <div className=' item-details m-[11px]'>
                <div className=' item-details-titale w-[222px] h-[40px] font-bold text-[16px] text-black'>
                    
                    <h2 className=' text-2xl font-bold'>{item. product_name}</h2>

                </div>
                <div className=' item-details--specification font-lato text-[13px] text-black  font-semibold mt-[35px]'>
                 <ul className=' pl-5'>
                    <li>id: {item.id} </li>
                    <li>category: {item.category} </li>
                    <li>description: {item.description} </li>

                 </ul>
                </div>
                <div className=' item-details mt-5 pl-5'>
                <p className='font-lato mt-5 text-[20px] w-[190px] text-red-700 font-extrabold border-e border-2 flex justify-center items-center'> {item.old_price} </p>
                <p className='font-lato mt-5 text-[20px] w-[190px] text-red-700 font-extrabold border-e border-2 flex justify-center items-center'> {item.new_price } </p>

                </div>
                <div className=' flex w-[150px] h-[160px] flex-justify-center items-center flex-col bottom-0 pl-5 mt-6 ml-7'>
                    <button onClick={ ()=>handelShow (item)} className=' w-[200px] h-[40px] border border-green-500 rounded-full hover:scale-105 transition bg-red-600 hover:bg-orange-500'> <PiNotebookFill className=' absolute ml-5 w-9 h-5 text-[#ffff]'/>Show more</button>
                   
                    <button className=' w-[200px] h-[40px] border border-green-500 rounded-full hover:scale-105 transition bg-red-600 hover:bg-orange-500 mt-4'> <FaShoppingCart className=' absolute ml-5 w-9 h-5 text-[#000]'/> Buy Now</button>

                </div>
            </div>
        </div>
        ))
       }
    </div>
    
   </div>
   
   
   </> 
  )
 }

 export default HomeCompo