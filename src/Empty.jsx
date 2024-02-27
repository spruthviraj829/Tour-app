import React from 'react'

const Empty = ({returnPage}) => {
  return (
    <div className='text-center justify-center mt-40' >
        <h2>No cards avilable</h2>
       <button className=" justify-center border-solid border-black  border-[2px] rounded-md w-20 p-2 mt-4 " onClick={returnPage}> Refresh </button>
    </div>
  )
}

export default Empty
