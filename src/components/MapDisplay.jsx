import '../App.css'
import Grid from './Grid';

import { useState, useRef, useEffect} from 'react'
import { useAnimate } from 'framer-motion';

  // image location
  // throttling

function MapDisplay()
{
  const [position, setPosition] = useState({playerX: 0, playerY: 0});
  const [player, animatePlayer] = useAnimate();
  const [active, setActive] = useState(0);
  const gridRef = useRef();
  const gridSize = 11;

  useEffect (() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  })

  const handleResize = () =>
  {
    console.log('Window resized to:', window.innerWidth, window.innerHeight);
  }

  // Handles Player Movement
  const keyPress = (e) =>
  {
    console.log("Key Input: " + e.key);

    let axis = "";
    let tileChange = 0;
    let dist = gridRef.current.children[0].getBoundingClientRect().width;

    // Check which key was pressed and change x/y values.
    switch (e.key)
    {
      case 'w':
        axis = "y";
        dist = 0 - dist;
        tileChange = -9;
        break;
      case 'a':
        axis = "x";
        dist = 0 - dist;
        tileChange = -1;
        break;
      case 's':
        axis = "y";
        dist = 0 + dist;
        tileChange = 9;
        break;
      case 'd':
        axis = "x";
        dist = 0 + dist;
        tileChange = 1;
        break;
      default:
        // console.log("X: " + position.playerX + " Y: " + position.playerY);
    }

    // Check for bounds.
    if (!isValidMove(active, tileChange, axis))
    {
      return;
    }

    // Moves the player according to x/y values.
    if (axis == "x")
    {
      setPosition(prevP => ({...prevP, playerX:  prevP.playerX + dist}));
      animatePlayer((player.current), {x: position.playerX + dist});
    }
    else if (axis == "y")
    {
      setPosition(prevP => ({...prevP, playerY:  prevP.playerY + dist}));
      animatePlayer((player.current), {y: position.playerY + dist});
    }

    // Updates the acive tile.
    gridRef.current.children[active].setAttribute('data-active', 'false');
    gridRef.current.children[active + tileChange].setAttribute('data-active', 'true');
    setActive(active + tileChange);
  }

  // Checks for a valid tile move by using mod for x axis and gridSize for y.
  function isValidMove(tileNum, dir, axis)
  {
    if (axis == "x" && ((tileNum % gridSize) + dir < 0 || (tileNum % gridSize) + dir >= gridSize))
    {
      console.log("INVALID MOVE!");
      return false;
    }
    else if (axis == "y" && (tileNum + dir < 0 || tileNum + dir >= gridSize*gridSize))
    {
      console.log("INVALID");
      return false;
    }

    return true;
  }

  return (
    <>
      <div onKeyDown={keyPress} tabIndex={0} className='mainArea' ref={gridRef} style={{gridTemplateColumns: `repeat(${gridSize}, 1fr)`, gridTemplateRows: `repeat(${gridSize}, 1fr)`}}>
        <Grid player={player} setActive={setActive} dimension={gridSize}/>
      </div>
    </>
  )
}

export default MapDisplay
