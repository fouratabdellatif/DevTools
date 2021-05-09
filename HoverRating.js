import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

const labels = {
  0.5: 'Inutile',
  1: 'Inutile+',
  1.5: 'Mauvais',
  2: 'Mauvais+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Bon',
  4: 'Bon+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

const useStyles = makeStyles({
  root: {
    width: 200,
    display: 'flex',
    alignItems: 'center',
  },
  rate: {
      color: '#1c2237'
  }
});

export default function HoverRating() {
  
  const [value, setValue] = React.useState(0);
  const [hover, setHover] = React.useState(-1);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
      />
      {value !== null && <Box ml={2} className={classes.rate}>{labels[hover !== -1 ? hover : value]}</Box>}
    </div>
  );
}