import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TextDivider from '../TextDivider';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { signin } from '../../actions/auth';
import { NavLink } from 'react-router-dom';
// import useModal from '../hooks/useModal';
// import Checkbox from '@material-ui/core/Checkbox';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import LockOpenIcon from '@material-ui/icons/LockOpen';
// import FacebookLogin from 'react-facebook-login';


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

// const CssCheckbox = withStyles({
//     root: {
//         color: '#1c2237',
//         '&$checked': {
//             color: '#82171f',
//         },
//     },
//     checked: {},
// })((props) => <Checkbox color="default" {...props} />);


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(-8),
        marginRight: -70,
        marginLeft: -70,
        padding: '5px 50px 0 50px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: '#82171f'
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(0),
        backgroundColor: '#fff'
    },
    submit: {
        margin: theme.spacing(0, 0, 0, 0),
        backgroundColor: '#82171f'
    },
    margin: {
        // height: '20%'
        // margin: '8px'
        fontSize: '15px'
    },
    socMargin: {
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'block',
        marginTop: '10px'
    }
}));

export default function SignInForm() {

    const classes = useStyles();

    // const { isShowing, toggle } = useModal();


    const history = useHistory();
    const dispatch = useDispatch();
    const message = useSelector((state) => state.auth.error);


    const initState = {
        email: "",
        password: "",
    }

    const [formData, setFormData] = useState(initState);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signin(formData, history));
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }


    const renderError = () => {
        if (message) {
            return <div>{message}</div>;
        }
    };

    useEffect(() => {
        console.log(message);
    })

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Se Connecter
                    </Typography>
                <form className={classes.form} validate onSubmit={handleSubmit}>
                    <CssTextField
                        className={classes.margin}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="E-mail"
                        name="email"
                        autoComplete="email"
                        // autoFocus
                        size='small'
                        onChange={handleChange}
                    />
                    <CssTextField
                        className={classes.margin}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Mot de passe"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        size='small'
                        onChange={handleChange}
                    />
                    {/* <FormControlLabel
                        control={<CssCheckbox value="remember" color="#1c2237" />}
                        label="Se souvenir de moi"
                        style={{
                            marginBottom: '-20px'
                        }}
                    /> */}

                    {renderError()}

                    <CssButton
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.margin}
                        size='small'
                    // endIcon={<LockOpenIcon />}
                    >
                        connexion <i class="fas fa-sign-in-alt"
                            style={{
                                marginLeft: '15px',
                                fontSize: '20px'
                            }} />
                    </CssButton>
                    <Grid container>
                        <Grid item xs>
                            <NavLink to='/forget-password' variant="body2" style={{ color: '#82171f', fontSize: '12px' }}>
                                Mot de passe oublié?
                            </NavLink>
                        </Grid>
                        <Grid item>
                            <NavLink to="/sign-up" variant="body2" style={{ color: '#82171f', fontSize: '12px' }}>
                                {"Vous n'avez pas de compte?"}
                            </NavLink>
                        </Grid>
                    </Grid>
                    <TextDivider>OU</TextDivider>
                    {/* <Grid container component="main" className={classes.root}>
                        <Grid item xs={12} sm={6}>
                            <FacebookLogin
                                appId="958085938265183"
                                autoLoad={true}
                                fields="name,email,picture"
                            >
                                Facebook
                            </FacebookLogin>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <CssButton
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.socMargin}
                                size='small'
                                endIcon={<LockOpenIcon />}
                            >
                                connexion
                            </CssButton>
                        </Grid>
                    </Grid> */}
                </form>
            </div>
        </Container>
    );
}