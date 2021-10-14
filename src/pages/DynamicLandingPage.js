import React from 'react';
import Grid from '../components/grid/Grid';

function DynamicLandingPage(props){
  return(
    <div>
      <Grid data={props.data} />
    </div>
  )
}
export default DynamicLandingPage
