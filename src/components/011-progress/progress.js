import React from 'react'
import { useState } from 'react'
import { Button, ProgressBar } from 'react-bootstrap'

const Progress = () => {
  const [progress, setprogress] = useState(0)
  const [counter, setcounter] = useState(0)

  return (
    <div>
    <h2>%{progress}</h2>
    <ProgressBar  variant={progress<34?"success": progress<67 ?"warning":"danger"}  now={progress}  label={`${progress}%`}/>;
    <Button   disabled={progress==100} onClick={()=>setprogress(progress=>progress+10)} style={{backgroundColor:"green",borderRadius:"50%",margin:"15px"}}>+</Button>
    <Button  disabled={!progress} onClick={()=>setprogress(progress=>progress-10)} style={{backgroundColor:"red",borderRadius:"50%",margin:"15px"}}>-</Button>

    <h2 className='m-5'>Clicked <span className='bg-info text-danger'>{counter}</span> Times</h2>
    <Button className='m-5' variant='info' onClick={()=>setcounter(counter=>counter+1)}>Click Me</Button>
    </div>
  )
}

export default Progress