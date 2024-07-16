import '../App.css'
import image from '../assets/react.svg'

import { useState, useEffect , useRef} from 'react'
import { useAnimate } from 'framer-motion';

  // image location
  // throttling

function MapDisplay()
{
  const [position, setPosition] = useState({playerX: 0, playerY: 0});
  
  const [grid, setGrid] = useState([]);
  const [player, animatePlayer] = useAnimate();
  const gridRef = useRef();

  // Loads the initial grid.
  useEffect(() => {
    const newGrid = [];

    let spawnTile = 40;
  
    for (let i = 0; i < 81; i++)
    {
      if (i == spawnTile)
      {
        newGrid.push(<div key={i} data-active={"true"}>{i}<img src={image} ref={player}/></div>);
      }
      else
      {
        newGrid.push(<div data-active={"false"} key={i}>{i}</div>);
      }
    }

    console.log("Grid setting...");

    setGrid(newGrid);
  }, [player]);

  // Handles Player Movement
  const keyPress = (e) =>
  {
    console.log("Key Input: " + e.key);

    let axis = "";
    let dist = gridRef.current.children[0].getBoundingClientRect().width;

    switch (e.key)
    {
      case 'w':
        axis = "y";
        dist = 0 - dist;
        break;
      case 'a':
        axis = "x";
        dist = 0 - dist;
        break;
      case 's':
        axis = "y";
        dist = 0 + dist;
        break;
      case 'd':
        axis = "x";
        dist = 0 + dist;
        break;
      default:
        console.log("X: " + position.playerX + " Y: " + position.playerY);
    }

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
  }

  return (
    <>
    <div onKeyDown={keyPress} tabIndex={0} className='mainArea' ref={gridRef}>

    {grid}

    </div>
    </>
  )
}

export default MapDisplay
