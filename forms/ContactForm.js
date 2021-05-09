import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import '../../assets/css/ContactForm.css'
import { useDispatch } from 'react-redux';
import { reclamer } from '../../actions/reclamations';

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

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    paper: {
        margin: theme.spacing(8, 4.5),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '85%', // Fix IE 11 issue.
        marginTop: theme.spacing(4),
    },
    submit: {
        margin: theme.spacing(4, 0, 0),
    },
}));

export default function ContactForm() {
    const classes = useStyles();

    const dispatch = useDispatch();

    const initState = {
        name: "",
        email: "",
        phone: "",
        city: "",
        message: "",
    };

    const [reclamation, setReclamation] = useState(initState);

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(reclamer(reclamation));
    };

    const handleChange = (e) => {
        setReclamation({ ...reclamation, [e.target.name]: e.target.value });
    };

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={12} sm={5} md={5} className='image' />
            <Grid item xs={12} sm={7} md={7} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Typography component="h1" variant="h5">
                        <h3>Contact</h3>
                    </Typography>
                    <form className={classes.form} validate onSubmit={handleSubmit}>
                        <h6>Besoin d'aide ou d'informations ? N'hésitez pas à nous contacter, nous vous répondrons dans les plus brefs délais.</h6>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <CssTextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="name"
                                    label="Nom & Prénom"
                                    name="name"
                                    autoComplete="name"
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <CssTextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Addresse Email"
                                    name="email"
                                    autoComplete="email"
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <CssTextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="phone"
                                    label="Numéro du téléphone"
                                    name="phone"
                                    autoComplete="tel"
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <CssTextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="city"
                                    label="Ville"
                                    name="city"
                                    autoComplete="city"
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <CssTextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    type='text'
                                    id="message"
                                    label="Votre message"
                                    name="message"
                                    autoComplete="message"
                                    onChange={handleChange}
                                    multiline
                                    rows='4'
                                />
                            </Grid>
                        </Grid>
                        <CssButton
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Envoyer Message
                        </CssButton>
                    </form>
                </div>
            </Grid>
        </Grid>
    );
}