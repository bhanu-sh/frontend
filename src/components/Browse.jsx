import React, { useState } from 'react'
import laptopList from './dummydata'

const Browse = () => {
    
    const [laptopData, setlaptopData] = useState(laptopList);

    const displayData = () => {
        return laptopData.map((laptop) => (
            <div className='col-md-3'>
                <div className='card'>
                    <img className='card-img-top' src={laptop.image} alt="" />
                    <div className='card-body'>
                        <h4>{laptop.brand}</h4>
                        <h3>{laptop.model}</h3>
                        <h2>&#8377; {laptop.price}</h2>
                    </div>
                </div>
            </div>
        ))
    }

  return (
    <div>
        <div className='container'>
            <div className='row'>{displayData()}</div>
        </div>
    </div>
  )
}

export default Browse