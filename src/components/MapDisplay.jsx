import '../App.css'
import image from '../assets/react.svg'

import { useState, useEffect , useRef} from 'react'
import { useAnimate } from 'framer-motion';

  // Whenever the window changes, I should update location of image
  // also add throttling

function MapDisplay()
{
  const [X, setX] = useState(0);
  const [Y, setY] = useState(0);
  
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
        newGrid.push(<div key={i}><img src={image} ref={player}/></div>);
      }
      else
      {
        newGrid.push(<div key={i}></div>);
      }
    }

    console.log("Grid setting...");

    setGrid(newGrid);
  }, [player]);

  // Handles Player Movement
  const keyPress = (e) =>
  {
    console.log("Key Input: " + e.key);

    let dist = gridRef.current.children[0].getBoundingClientRect().width;

    switch (e.key)
    {
      case 'w':
        setY(Y - dist);
        animatePlayer(player.current, {y: Y-dist});
        break;
      case 'a':
        setX(X - dist);
        animatePlayer(player.current, {x: X-dist});
        break;
      case 's':
        setY(Y + dist);
        animatePlayer(player.current, {y: Y+dist});
        break;
      case 'd':
        setX(X + dist);
        animatePlayer(player.current, {x: X+dist});
        break;
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
