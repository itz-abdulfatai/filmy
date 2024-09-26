import React from 'react'
import Button from './Button'

function LoadingError({error,command}) {
  return (
    <div className=" w-full h-50 bg-primary  border-accent2 flex flex-col justify-center gap-4 items-center">
    {error.message}
    <Button text={'retry'} bg={'accent'} onClick={command}/>

   
    </div> 
  )
}

export default LoadingError