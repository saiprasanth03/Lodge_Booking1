import './top.css'

import React from 'react'

const Top = () => {
  return (
    <div className='header'>
        <div className="headerContainer">
          <div className="headerList">
            <div className="headerListItem active">
              <i className="fa-solid fa-bed"></i>
              <span>Stays</span>
            </div>
            <div className="headerListItem"><i className="fa-solid fa-plane-circle-check"></i><span>Flights</span></div>
            <div className="headerListItem"><i className="fa-solid fa-car"></i><span>Car rental</span></div>
            <div className="headerListItem"><i className="fa-solid fa-bed"></i><span>Attractions</span></div>
            <div className="headerListItem"><i className="fa-solid fa-taxi"></i><span>Airport taxis</span></div>
          </div>
        </div>    
    </div>
    
  )
}

export default Top