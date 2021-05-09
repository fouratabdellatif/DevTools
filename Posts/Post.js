import React from 'react';
import { makeStyles, Grid } from '@material-ui/core/';
import moment from 'moment';
import 'moment/locale/fr'
import { CustomDialog } from 'react-st-modal';
import CardItem from '../cards/CardItem';
import '../../assets/css/PostModal.css'

const useStyles = makeStyles({
    media: {
        height: 0,
        paddingTop: '56.25%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backgroundBlendMode: 'darken',
    },
    border: {
        border: 'solid',
    },
    fullHeightCard: {
        height: '100%',
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: '15px',
        height: '100%',
        position: 'relative',
        marginTop: '23px',
        cursor: 'pointer'
    },
    overlay: {
        position: 'absolute',
        top: '20px',
        left: '20px',
        color: '#fff',
    },
    overlay2: {
        position: 'absolute',
        top: '20px',
        right: '20px',
        color: '#fff',
    },
    grid: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '20px',
    },
    title: {
        padding: '0 16px',
    },
    cardActions: {
        padding: '0 16px 8px 16px',
        display: 'flex',
        justifyContent: 'space-between',
    },
    modalTitle: {
        margin: '15px 0px 0px 30px',
        fontSize: '30px'
    },
    modalDate: {
        margin: '0px 0px 20px 30px',
        fontSize: '15px'
    },
    modalMessage: {
        margin: '15px 25px 0 30px',
        fontSize: '20px',
        fontWeight: '100'
    },
    modalImage: {
        margin: '15px 15px 0 -15px',
        height: '350px',
        marginBottom: '200px',
    },
    dialog: {
        height: '60vh'
    }
});

const Post = ({ post, setCurrentId }) => {

    const classes = useStyles();
    // const user = JSON.parse(localStorage.getItem('profile'));

    return (
        <>
            <div onClick={async () => {
                await CustomDialog(
                    <div className={classes.dialog}>
                        <Grid container xs={12} sm={12} md={12}>
                            <Grid item xs={12} sm={6} md={8}>
                                <h2 className={classes.modalTitle}>{post.title}</h2>
                                <h5 className={classes.modalDate}>{moment(post.createdAt).locale("fr").fromNow()}</h5>
                                <p className={classes.modalMessage}>{post.message}</p>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <img className={classes.modalImage} src={post.selectedFile} alt='' />
                            </Grid>
                        </Grid>
                    </div>, {
                    title: `${post.category}`,
                    showCloseIcon: true,
                    isBodyScrollLocked: false,
                });
            }}>
                <CardItem
                    // title={post.title}
                    src={post.selectedFile}
                    title={post.title}
                    label={post.category}
                    time={moment(post.createdAt).locale("fr").fromNow()}
                    className={classes.card}
                />
            </div>
        </>
    );
};

export default Post;
