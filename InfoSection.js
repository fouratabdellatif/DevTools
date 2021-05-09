import { Avatar, Button, Container, Grid, makeStyles, Menu, MenuItem } from '@material-ui/core';
import React, { useState } from 'react';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import { Confirm, CustomDialog } from 'react-st-modal';
import PictureCropper from './PictureCropper';
import '../../../assets/css/InfoSection.css'
import { Provider, useDispatch } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { reducers } from '../../../reducers';
import InfoIcon from '@material-ui/icons/Info';
import { updateUserProfilePicture } from '../../../actions/userProfile';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

const useStyles = makeStyles({
    avatar: {
        color: '#fff',
        backgroundColor: '#1c2237',
        width: '200px',
        height: '200px',
        fontSize: '100px',
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'center'
    },
    avatarProfile: {
        color: '#fff',
        backgroundColor: 'transparent',
        width: '200px',
        height: '200px',
        fontSize: '100px',
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'block',
        border: '4px solid #1c2237'
    },
    avatarCamera: {
        transform: 'translate(150px, -40px)',
        width: '50px',
        height: '50px',
        backgroundColor: '#1c2237',
        padding: '8px',
        borderRadius: '40px',
        color: '#fff',
        cursor: 'pointer',
        border: '#fff 3px solid',
    },
    camera: {
        width: '100%',
        height: '100%',
    },
    dialog: {
        height: '50vh'
    },
    content: {
        fontSize: '16px',
        fontFamily: 'system-ui',
        color: '#1c2237'
    },
    item: {
        marginBottom: '-30px'
    },
    separator: {
        height: '50px'
    },
    dot: {
        marginTop: '12px',
        backgroundColor: '#1c2237'
    },
    connector: {
        marginTop: '-6px'
    },
    icon: {
        color: '#1c2237',
        fontSize: '30px',
    },
    iconConnector: {
        height: '30px'
    },
    iconItem: {
        marginLeft: '-15px',
        height: '100px'
    }
});

function InfoSection() {

    const classes = useStyles();

    const dispatch = useDispatch();

    const [user] = useState(JSON.parse(localStorage.getItem("profile")));

    const [anchorEl, setAnchorEl] = useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
    const isMenuOpen = Boolean(anchorEl);

    const handleEditProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const [userPicture, setUserPicture] = useState({
        selectedFile: ""
    });

    const deleteProfilePicture = () => {
        setUserPicture({
            selectedFile: ""
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();
        const result = await Confirm(
            'Efacer Photo de Profil?',
            'Confirmer?',
            'Oui',
            'Non',
        );

        if (result) {
            dispatch(updateUserProfilePicture(userPicture));
        } else {
            // Сonfirmation not confirmed
        }
    };

    return (
        <Container maxWidth='xl'>
            <Grid container xs={12} sm={12} md={12} spacing={10}>
                <Grid item xs={12} sm={12} md={12}>
                    {user.result.selectedFile ? (
                        <Avatar className={classes.avatarProfile} alt={user.result.name} src={user.result.selectedFile}>
                        </Avatar>
                    ) : (
                        <Avatar className={classes.avatar} alt={user.result.name}>
                            {user.result.firstName.charAt(0)}{user.result.lastName.charAt(0)}
                        </Avatar>
                    )}
                    <Avatar className={classes.avatarCamera}>
                        <div onClick={handleEditProfileMenuOpen}>
                            <AddAPhotoIcon className={classes.camera} />
                        </div>
                    </Avatar>
                    {
                        <Menu
                            className={classes.menu}
                            anchorEl={anchorEl}
                            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                            keepMounted
                            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                            open={isMenuOpen}
                            onClose={handleMenuClose}
                        >
                            <MenuItem>
                                <Button
                                    onClick={async () => {
                                        await CustomDialog(
                                            <div className={classes.dialog}>
                                                <Grid container xs={12} sm={12} md={12}>
                                                    <Provider store={store}>
                                                        <PictureCropper />
                                                    </Provider>
                                                </Grid>
                                            </div>, {
                                            title: 'Changer la photo de profil',
                                            showCloseIcon: true,
                                            isBodyScrollLocked: false,
                                        });
                                    }}>
                                        Modifier Photo
                                </Button>
                            </MenuItem>
                            <MenuItem >
                                <Button
                                    type='submit'
                                    onClick={deleteProfilePicture && handleSubmit}
                                >

                                    Effacer Photo
                                </Button>
                            </MenuItem>
                        </Menu>
                    }

                </Grid>
                <Grid item container xs={12} sm={12} md={12} style={{
                    marginTop: '-150px',
                }}>
                    <Grid item xs={4} sm={4} md={4} style={{
                        whiteSpace: 'nowrap',
                        marginLeft: '-30px',
                    }}>
                        <Timeline align="left">
                            <TimelineItem className={classes.iconItem}>
                                <TimelineSeparator>
                                    <TimelineDot variant="outlined">
                                        <InfoIcon className={classes.icon} />
                                    </TimelineDot>
                                    <TimelineConnector className={classes.iconConnector} />
                                </TimelineSeparator>
                            </TimelineItem>
                            <TimelineItem className={classes.item}>
                                <TimelineSeparator className={classes.separator}>
                                    <TimelineDot variant="outlined" className={classes.dot} />
                                    <TimelineConnector className={classes.connector} />
                                </TimelineSeparator>
                                <TimelineContent className={classes.content}>
                                    <strong>Nom & Prénom:</strong> {user.result.name}
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem className={classes.item}>
                                <TimelineSeparator className={classes.separator}>
                                    <TimelineDot variant="outlined" className={classes.dot} />
                                    <TimelineConnector className={classes.connector} />
                                </TimelineSeparator>
                                <TimelineContent className={classes.content}>
                                    <strong>Email:</strong> {user.result.email}
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem className={classes.item}>
                                <TimelineSeparator className={classes.separator}>
                                    <TimelineDot variant="outlined" className={classes.dot} />
                                    <TimelineConnector className={classes.connector} />
                                </TimelineSeparator>
                                <TimelineContent className={classes.content}>
                                    <strong>N° de Téléphone:</strong> {user.result.phone}
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem className={classes.item}>
                                <TimelineSeparator className={classes.separator}>
                                    <TimelineDot variant="outlined" className={classes.dot} />
                                </TimelineSeparator>
                                <TimelineContent className={classes.content}>
                                    <strong>Adresse:</strong> {user.result.address}, {user.result.city}, {user.result.codepostal}
                                </TimelineContent>
                            </TimelineItem>
                        </Timeline>
                    </Grid>
                </Grid>
                {/* <Grid item xs={12} sm={1} md={1}></Grid> */}
            </Grid>
        </Container >
    )
}

export default InfoSection
