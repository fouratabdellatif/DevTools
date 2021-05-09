import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { deepPurple } from '@material-ui/core/colors';
import Post from './Post';

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 50px',
    },
    heading: {
        color: 'rgba(0,183,255, 1)',
        textDecoration: 'none',
    },
    image: {
        marginLeft: '15px',
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '400px',
    },
    profile: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '400px',
    },
    userName: {
        display: 'flex',
        alignItems: 'center',
    },
    brandContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    smMargin: {
        margin: theme.spacing(1),
    },
    purple: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
    },
    [theme.breakpoints.down('sm')]: {
        appBar: {
            padding: '10px 20px',
        },
        heading: {
            display: 'none',
        },
        userName: {
            display: 'none',
        },
        image: {
            marginLeft: '5px',
        },
        toolbar: {
            display: 'flex',
            justifyContent: 'flex-end',
            width: '160px',
        },
    },

    actionDiv: {
        textAlign: 'center',
    },
    msg: {
        textAlign: 'center',
        fontSize: '30px',
        marginTop: '70px',
        marginBottom: '70px',
        color: '#919191'
    }
}));

const Posts = ({ setCurrentId }) => {

    const posts = useSelector((state) => state.posts);
    const classes = useStyles();

    return (

        !posts.length ? 
        <div>
            <h3 className={classes.msg}>Pas d'actualités à afficher</h3>
        </div> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                <Grid container xs={12} sm={12} md={12} spacing={3}>
                    {posts.map((post) => (
                        <Grid key={post._id} item xs={12} sm={3} md={3}>
                            <Post post={post} setCurrentId={setCurrentId} />
                        </Grid>
                    ))}
                </Grid>

            </Grid>

        )
    );
};

export default Posts;
