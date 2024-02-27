import { useState } from "react";

function  Card({id ,image ,info ,price ,name, removeTour}){
function readmoreHandler(){
    setReadmore(!readmore);
}
 const [readmore , setReadmore]= useState(false)

 const description = readmore ? info: `${info.substring(0,200)}...`;

 return(
      <div className="w-[400px] h-auto  rounded-sm p-[1rem] flex flex-col justify-center  shadow-md shadow-slate-300 m-2 gap-5 hover:drop-shadow-lg hover:shadow-slate-800">
         <img src={image} alt="" className="aspect-square object-fill rounded-md h-64 "/>

         <div className="mt-3">
         <div>
            <h4 className="text-[#1faa59] font-bold">${price}</h4>
            <h4 className="text-[1.5rem] font-bold "> {name}</h4>
         </div>
         <div className="text-[0.9rem]">{description}
         <span onClick={readmoreHandler} className="text-[#12b0e8] cursor-pointer" >{readmore?`show less`:`show more`}</span>
         </div>

         </div>

     <button onClick={()=>removeTour(id)} className="border-solid border-[#b4161b] text-[18px] py-2 px-3 border-[1px] bg-[#b4161b21] rounded-md cursor-pointer hover:bg-red-600 transition-all ease-in-out duration-[0.2s] hover:text-white " 
       >Not Intrested</button>
      </div>
 )
}

export default Card;