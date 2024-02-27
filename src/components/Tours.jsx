import Card from "./Card";
function Tours({tours, removeTour}){
  return(
        <div>
            
            <div className="grid grid-cols-3  max-w-[1200px] mx-auto gap-3 flex-wrap  " >
               {
                 tours.map((tour)=>{
                    return <Card key={tour.id} {...tour } removeTour={removeTour}></Card>
                })
               }
            </div>
             
        </div>
  )
}

export default Tours;