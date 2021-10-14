import React from 'react';
import Grid from '../components/grid/Grid';
import { useParams } from "react-router-dom";
import { useTheme } from '@mui/styles';

function DynamicDetailPage(props){
  const theme = useTheme();
  let { id } = useParams();
  return(
    <div style={{color:theme['color2'],background:theme['color2']}}>
      <Grid dynamicPage={true} theme={props.theme} data={props.data.find(page => page.url.toString() === id)}/>
    </div>
  )
}
export default DynamicDetailPage