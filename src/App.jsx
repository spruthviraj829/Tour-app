import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Data from './Data'
import Tours from './components/Tours'
import Empty from './Empty'


function App() {
 const [tours ,setTours]= useState(Data)

 function removeTour(id){
    const newTour = tours.filter(tour=> tour.id !==id);
    setTours(newTour)
    console.log(newTour.length); 
 }


 function returnPage (){
  setTours(Data);
 }

  return (
    <>
     <h1 className="font-bold text-center mt-[2rem] mb-2 border-dashed border-[2px]  border-black w-40 mx-auto p-3 rounded-md ">Plan With Love</h1>
     <div>{ tours.length==0 ?<Empty returnPage={returnPage}/> :"" }</div>
     <Tours tours={tours} removeTour={removeTour} ></Tours>
    </>
  )
}

export default App
