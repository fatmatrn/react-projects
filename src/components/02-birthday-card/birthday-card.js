import React, { useState } from 'react'
import "./birthday-card.scss"
import data from "./data.json"
import { Button } from 'react-bootstrap'
const BirthdayCard = () => {
    const [people, setPeople]= useState(data)
  return (
    <div className='container1'>
        <h2>{people.length} birthday today</h2>
      {
        people.map((person)=>(
             <div key={person.id} className="main">
            <div className='profileImg'><img src={person.image} alt="" /></div>
            <div className='info'>
                <h3>{person.name}</h3>
                <p>{person.age}</p>
            </div>
        </div>
        )
    )
      }
       
    <Button variant="primary" onClick={() => setPeople([])}>
        Clear All
    </Button>
    <Button variant="primary" onClick={() => setPeople(data)}>
        Reload All
    </Button>
    </div>
  )
}
export default BirthdayCard









