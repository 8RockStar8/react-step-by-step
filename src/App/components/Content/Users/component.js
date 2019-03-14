import React, { PureComponent, Fragment } from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


import CardActionArea from '@material-ui/core/CardActionArea';

import './component.css';
const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 338,
        width: 300,
    },
    control: {
        padding: theme.spacing.unit * 2,
    },
    card: {
        maxWidth: 345,
    },
    media: {
        // ⚠️ object-fit is not supported by IE 11.
        objectFit: 'cover',
    }
});

class Users extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }

    componentDidMount() {
        fetch('https://api.github.com/users')
        .then(res => res.json())
        .then(
            (res) => {
                this.setState({
                    items: res
                });
            }
        );
    }

    render() {
        const { items } = this.state;
        const { classes } = this.props;
        return (
            <Fragment>
            <Grid container className={classes.root}>
                <Grid item xs={12}>
                    <Grid container className={classes.demo} justify="center">
                        {
                            items.map(item => (
                                <Grid key={ item.id } item>
                                    <Paper className={classes.paper}>
                                        <Card className={classes.card}>
                                            <CardActionArea>
                                                <CardMedia 
                                                    component="img"
                                                    alt="Contemplative Reptile"
                                                    className={ classes.media }
                                                    height="220"
                                                    image={ item.avatar_url }
                                                    title="Contemplative Reptile"
                                                />
                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" component="h2">
                                                        { item.login }
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                            <CardActions>
                                                <Button>
                                                    <a href={ item.html_url } target='_blank' rel='noopener noreferrer' className='read-more-link'>Personal Info</a>
                                                </Button>
                                            </CardActions>
                                        </Card>
                                    </Paper>
                                </Grid>
                                )
                            )
                        }
                    </Grid>
                </Grid>
            </Grid>
            </Fragment>
        );
    }
}

Users.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Users);

// export default Users;
