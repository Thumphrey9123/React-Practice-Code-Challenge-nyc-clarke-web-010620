import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi';

const SushiContainer = (props) => {
  
  const renderSushi = () => {
    return props.sushi.map(sushi=><Sushi key={sushi.id} sushi={sushi}/>)
  }

  return (
    <Fragment>
      <div className="belt">
        <MoreButton />
        {renderSushi()}
      </div>
    </Fragment>
  )
}

export default SushiContainer