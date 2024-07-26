import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import GridTile from './GridTile';

function MapGen({setDataProp})
{
  const mapSize = 21;
  const [map, setMap] = useState([]);

  // Generates a 2d array which holds map data.
  // Could usecallback here maybe.
  const generateMap = () =>
  {
    const map = [];
    
    for (let row = 0; row < mapSize; row++)
      {
      const rowData = [];
      
      for (let col = 0; col < mapSize; col++)
      {
        let randNum = Math.floor(Math.random() * 10) + 1;
        rowData.push(<GridTile key={row + col} randNum={randNum}/>);
      }

      map.push(rowData);
    }

    return map;
  }  

  // This runs once after initial render to change state. Component rerenders after.
  useEffect(() => {
    setMap(generateMap());
  }, []);

  // This runs twice, once for initializing map, once for generating map.
  useEffect(() => {
    setDataProp(map)
  }, [map, setDataProp]);

  // Old map gen.
  // const test = Array.from({length: mapSize*mapSize}).map((_, index) => <GridTile key={index}/>);

  return (
    <>
      <div className='fullMap' style={{gridTemplateColumns: `repeat(${mapSize}, 1fr)`, gridTemplateRows: `repeat(${mapSize}, 1fr)`}}>
        {map}
      </div>
    </>
  )
}

export default MapGen

MapGen.propTypes = {
  setDataProp: PropTypes.func.isRequired
}