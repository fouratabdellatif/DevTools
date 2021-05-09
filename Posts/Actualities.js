import React, { useState, useEffect } from "react";
import {
    Container,
    Grid,
    makeStyles,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { getPosts } from "../../actions/posts";
import Posts from "./Posts";

function Actualities() {
    
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    const useStyles = makeStyles((theme) => ({
        icon: {
            marginRight: theme.spacing(2),
        },
        heroContent: {
            backgroundColor: theme.palette.background.paper,
            padding: theme.spacing(8, 0, 6),
        },
        heroButtons: {
            marginTop: theme.spacing(-5),
        },
        cardGrid: {
            paddingTop: theme.spacing(8),
            paddingBottom: theme.spacing(8),
        },
        card: {
            height: "100%",
            display: "flex",
            flexDirection: "column",
        },
        cardMedia: {
            paddingTop: "56.25%", // 16:9
        },
        cardContent: {
            flexGrow: 1,
        },
        footer: {
            backgroundColor: theme.palette.background.paper,
            padding: theme.spacing(6),
        },
        container: {
            border: '2px solid #919191',
            borderRadius: '10px'
        }
    }));
    const classes = useStyles();

    return (
        <>
            <Container className={classes.container}>
                <Grid
                    container
                    justify="space-between"
                    alignItems="stretch"
                    spacing={3}
                >
                    <Grid item xs={12} sm={12} md={12}>
                        <Posts setCurrentId={setCurrentId} />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

export default Actualities;
