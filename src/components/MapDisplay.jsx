import '../App.css'
import image from '../assets/react.svg'

import { useState, useEffect, useRef} from 'react'
import { animate, motion, useAnimate } from 'framer-motion';


  // To make movement consistent maybe I should make it relate to the viewport stuff?
  // Whenever the window changes, I should update location of image
  // I should also update movement based on cell size. (Normal = 55x55 pix) (smaller = 13x13 pix) so move 13 pixels instead of 55?
  // also add throttling


function MapDisplay() {

  const [X, setX] = useState(0);
  const [Y, setY] = useState(0);
  
  const [grid, setGrid] = useState([]);
  const [player, animatePlayer] = useAnimate();

  // Loads the initial grid.
  useEffect(() => {
    const newGrid = [];
  
    for (let i = 0; i < 81; i++)
    {
      newGrid.push(<div key={i}></div>);
    }

    setGrid(newGrid);
  }, []);

  const keyPress = (e) =>
  {
    console.log("Key Input: " + e.key);
    console.log(Y);

    switch (e.key)
    {
      case 'w':
        setY(Y - 30);
        animatePlayer(player.current, {y: Y-30});
        break;
      case 'a':
        setX(X - 30);
        animatePlayer(player.current, {x: X-30});
        break;
      case 's':
        setY(Y + 30);
        animatePlayer(player.current, {y: Y+30});
        break;
      case 'd':
        setX(X + 30);
        animatePlayer(player.current, {x: X+30});
        break;
    }

    console.log("Y After Change: " + Y);
  }

  return (
    <>
    <div onKeyDown={keyPress} tabIndex={0} className='mainArea'>

    {grid}

    <img src={image} ref={player}/>

    </div>
    </>
  )
}

export default MapDisplay
