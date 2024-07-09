import '../App.css'

import { useState, useEffect } from 'react'

function MapDisplay() {
  const [grid, setGrid] = useState([]);

  useEffect(() => {
    // Generate 9 divs
    const newDivs = [];
    for (let i = 0; i < 81; i++) {
      newDivs.push(<div key={i} className="child-div"></div>);
    }
    setGrid(newDivs);
  }, []);

  





  return (
    <>
    <div className='mainArea'>
    {grid}


    </div>
    </>
  )
}

export default MapDisplay
