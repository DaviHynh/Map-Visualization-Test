import '../App.css'
import image from '../assets/react.svg'

import { useState, useEffect} from 'react'

function MapDisplay() {

  const [grid, setGrid] = useState([]);


  // Loads the initial grid.
  useEffect(() => {
    const newGrid = [];

    for (let i = 0; i < 81; i++)
    {
      newGrid.push(<div></div>);
    }

    setGrid(newGrid);
  }, []);


  // Listens for key press events.
  useEffect(() => {

    function somefunction (event)
    {
      if (event.key === 'w')
      {
        let lol = document.getElementById("main");

        lol.translate(10, 10);

        console.log('press w');
      }
    }

    window.addEventListener('keydown', somefunction);

    return () => {
      window.removeEventListener('keydown', somefunction);
    }
  }, [])

  return (
    <>
    <div className='mainArea'>


    <img id="main" src={image}/>


    {grid}

    </div>
    </>
  )
}

export default MapDisplay
