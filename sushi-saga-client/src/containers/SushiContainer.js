import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi';

const SushiContainer = (props) => {
  
  const renderSushi = () => {
    return props.sushi.map(sushi=><Sushi handleSushiClick={props.handleSushiClick} key={sushi.id} wallet={props.wallet} sushi={sushi}/>)
  }

  return (
    <Fragment>
      <div className="belt">
        {renderSushi()}
        <MoreButton moreSushi={props.moreSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer