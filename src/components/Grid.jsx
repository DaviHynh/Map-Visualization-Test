import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// import GridTile from './GridTile'
// import Player from './Player';

function Grid({mapDataProp})
{
  const [initRow, setInitRow] = useState(0);
  const [initCol, setInitCol] = useState(0);

  const [visibleMap, setVisibleMap] = useState([]);
  const [keysHeld, setKeysHeld] = useState({});

  // Adds the key being held down to the usestate and sets it to true.
  const handleKeyDown = (e) =>
  {
    if(keysHeld[e.key] === true)
    {
      console.log(e.key + " stil being held.");
      return;
    }

    setKeysHeld((prev) => ({...prev, [e.key]:true}))
  }

  // Sets the key that was held down to false.
  const handleKeyUp = (e) =>
  {
    setKeysHeld((prev) => ({...prev, [e.key]:false}))
  }

  // Used to load the initial grid.
  useEffect(() => {
    if (mapDataProp.length === 0)
    {
      return;
    }

    // Splits the entire map into the selected rows.
    let gotRows = mapDataProp.slice(initRow, initRow + 5);

    let newGrid = [];
    
    // Splits the selected rows into the selected columns.
    gotRows.map((row) => {newGrid.push(row.slice(initCol, initCol + 5))});

    setVisibleMap(newGrid);
  }, [mapDataProp, initCol, initRow])

  
  // Handles map movement when the held buttons change.
  useEffect(() => {
    if (keysHeld.w)
    {
      // Set subtract 1 from Y!.
      setInitRow(prev => Math.max(prev - 1, 0));
    }

    if (keysHeld.a)
    {
      // Set subtract 1 from Y!.
      setInitCol(prev => Math.max(prev - 1, 0));
    }

    if (keysHeld.s)
    {
      // Set subtract 1 from Y!.
      setInitRow(prev => Math.min(prev + 1, 21 - 5));
    }

    if (keysHeld.d)
    {
      // Set subtract 1 from Y!.
      setInitCol(prev => Math.min(prev + 1, 21 - 5));
    }
  }, [keysHeld])

  return (
    <>
      <div className='gridArea' onKeyDown={handleKeyDown} onKeyUp={handleKeyUp} tabIndex={0}>
        {visibleMap}
      </div>
    </>
  )
}

export default Grid

Grid.propTypes = {
  mapDataProp: PropTypes.array.isRequired
}