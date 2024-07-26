import { useEffect } from 'react'
import image from '../assets/react.svg'

import PropTypes from 'prop-types';

// Not sure if this is necessary anymore.
function Player({keysHeldProp})
{
  useEffect(() => {
    console.log(keysHeldProp);
  }, [keysHeldProp]);

  return (
    <>
      <div style={{position: "absolute"}}>
        <img src={image}/>
      </div>
    </>
  )
}

export default Player

Player.propTypes = {
  keysHeldProp: PropTypes.object.isRequired,
}