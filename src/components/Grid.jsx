import '../App.css'
import image from '../assets/react.svg'

import PropTypes from 'prop-types';
import { useState, useEffect} from 'react'

function Grid({player, setActive, dimension})
{ 
  const [grid, setGrid] = useState([]);

  // Loads the initial grid.
  useEffect(() => {
    const newGrid = [];
    let spawnTile = Math.floor( (dimension * dimension) / 2);
  
    for (let i = 0; i < dimension*dimension; i++)
    {
      if (i == spawnTile)
      {
        newGrid.push(<div key={i} className="gridTile" data-active={"true"}><img className="player" src={image} ref={player}/></div>);
      }
      else
      {
        newGrid.push(<div className="gridTile" data-active={"false"} key={i}>{i}</div>);
      }
    }

    console.log("Grid setting...");
    setGrid(newGrid);
    setActive(spawnTile);
  }, [player, setActive, dimension]);

  return (
    <>
    {grid}
    </>
  )
}

export default Grid

Grid.propTypes = {
    player: PropTypes.object.isRequired,
    setActive: PropTypes.func.isRequired,
    dimension: PropTypes.number.isRequired
}
