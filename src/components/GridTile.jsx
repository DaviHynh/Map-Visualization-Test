import image from '../assets/react.svg'
import PropTypes from 'prop-types';

// Gets send a random number, which determines if a tile should have an image or not.
function GridTile({randNum})
{
  if (randNum === 1)
  {
    return (
      <div className="gridTile">
        <img src={image}/>
      </div>
    )
  }

  return (
    <div className="gridTile">
    </div>
  )
}

export default GridTile

GridTile.propTypes = {
  randNum: PropTypes.number.isRequired,
}