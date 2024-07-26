// Grid should be the player view.
import { useState } from 'react'
import Grid from '../components/Grid'

// MapGen should be the display of the entire map.
import MapGen from '../components/MapGen'

function MainPage()
{
  const [mapData, setMapData] = useState([]);

  return (
    <>
    <div className="mainPageContianer">
        <Grid mapDataProp={mapData}/>
        <MapGen setDataProp={setMapData}/>
    </div>
    </>
  )
}

export default MainPage