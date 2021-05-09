import React from 'react';
import { TextField, Grid, InputAdornment, IconButton, makeStyles, withStyles } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#82171f',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#82171f',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'primary',
      },
      '&:hover fieldset': {
        borderColor: '#1c2237',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#82171f',
      },
    },
  },
})(TextField);

const useStyles = makeStyles((theme) => ({
  field: {
    margin: theme.spacing(0.5, 0, 0, 0),
  }
}));

const CssInput = ({ name, handleChange, label, half, autoFocus, type, handleShowPassword, id, autoComplete }) => {

  const classes = useStyles();

  return (
    <Grid item xs={12} sm={half ? 6 : 12}>
      <CssTextField
        className={classes.field}
        name={name}
        onChange={handleChange}
        variant="outlined"
        margin="normal"
        required
        fullWidth
        label={label}
        autoFocus={autoFocus}
        type={type}
        id={id}
        autoComplete={autoComplete}
        InputProps={name === 'password' ? {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleShowPassword}>
                {type === 'password' ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        } : null}
      />
    </Grid>
  );
}

export default CssInput;
