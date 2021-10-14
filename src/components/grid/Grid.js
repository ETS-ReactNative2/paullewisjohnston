import React from 'react';
import PreviewCard from './cards/PreviewCard';
import { Grid as GridLayout} from '@mui/material';

const styles={
  root: {
    flexGrow: 1
  }
};

export default function Grid(props) {
  return (
    <GridLayout container sx={styles.root}>
      {props.dynamicPage ? 
        <GridLayout container spacing={1}>
          <PreviewCard {...props} key={props.data.id} item={props.data}/>
        </GridLayout>
      :
        <GridLayout container spacing={1}>
          {props.data.map(item => (
            <PreviewCard {...props} key={item.id} item={item}/>
          ))}
        </GridLayout>
      }
    </GridLayout>
  );
}
