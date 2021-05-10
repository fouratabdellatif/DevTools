import { Button, Grid, makeStyles, TextField, withStyles } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { MDBIcon } from 'mdbreact';

const useStyles = makeStyles({
    searchGrid: {
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '100%',
        display: 'flex',
        alignItems: 'center'
    },
    searchButton: {
        width: '100px',
        height: '55px',
    },
    searchButtonGrid: {
        width: '100%',
        height: '100%',
    },
    searchInput: {
        width: '100%',
        display: 'flex',
    },
    searchInputGrid: {
        width: '100%',
    },
    searchIcon: {
        fontSize: '50px',
        color: '#82171f',
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'block',
        width: '10%',
        marginTop: '40px'
    },
    dropdown: {
        width: '100%',
        height: '55px',
        paddingLeft: '10px',
        fontSize: '18px',
        fontWeight: 'lighter',
        color: '#929396'
    },
})

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
                borderColor: '#242424',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#82171f',
            },
        },
    },
})(TextField);

const CssButton = withStyles((theme) => ({
    root: {
        color: '#fff',
        backgroundColor: '#1c2237',
        margin: theme.spacing(3, 0, 2),
        '&:hover': {
            backgroundColor: '#82171f',
        },
    },
}))(Button);

function Tracker({ searchQuery, setSearchQuery }) {

    const classes = useStyles();

    const history = useHistory();
    const onSubmit = (e) => {
        history.push(`?s=${searchQuery}`);
        e.preventDefault();
    };

    return (
        <div>
            <MDBIcon icon="search-location" className={classes.searchIcon} />
            <form
                action="/"
                method="get"
                autoComplete="off"
                onSubmit={onSubmit}
            >
                <Grid container xs={12} sm={12} md={12} className={classes.searchGrid}>
                    <Grid item xs={12} sm={8} md={8} className={classes.searchInputGrid}>
                        <CssTextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            label="Suivre votre colis"
                            value={searchQuery}
                            onInput={(e) => setSearchQuery(e.target.value)}
                            type="text"
                            id="tracker"
                            placeholder="Introduire N° de Colis"
                            name="tracker"
                            className={classes.searchInput}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4} md={4} className={classes.searchButtonGrid}>
                        <CssButton type="submit" className={classes.searchButton}>
                            Search
                    </CssButton>
                    </Grid>
                </Grid>
            </form>
        </div>
    )
}

export default Tracker
