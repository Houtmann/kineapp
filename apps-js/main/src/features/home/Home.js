import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import Container from '@material-ui/core/Container';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Link from '@material-ui/core/Link';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';



export class Home extends Component {
  static propTypes = {
    home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  componentDidMount() {
    const { registerUser, getInitialData } = this.props.actions;
    const user = JSON.parse(document.querySelector('#root') && document.querySelector('#root').getAttribute('data-django'));
    console.log('user', user);
    registerUser(user);
    getInitialData();

  }

  render() {
    const { currentUser } = this.props.home;

    return (

      <div className="home-home">
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className="toto" color="inherit" aria-label="menu">

            </IconButton>
            <Typography variant="h6" className="toto">
            </Typography>
            <Button color="inherit">Accueil</Button>
            <Button color="inherit">Mes programmes</Button>
            <Button  color="inherit">Profil</Button>
          </Toolbar>
        </AppBar>
        <Container maxWidth="lg">

          {/* {currentUser &&
               {currentUser[0].user.first_name} {currentUser[0].user.last_name}

              Voici les programmes disponibles :


            currentUser[0].programs.map((item, i) => (

                <CardText>Type : {item.type} {item.name}</CardText>

                <Link to={{
                  pathname: '/programme',
                  state: {
                    program: item
                  }
                }}>{item.name}</Link>






            ))}*/}


        </Container>

      </div>
  );
  }
  }

  /* istanbul ignore next */
  function mapStateToProps(state) {
    return {
    home: state.home,
  };
  }

  /* istanbul ignore next */
  function mapDispatchToProps(dispatch) {
    return {
    actions: bindActionCreators({...actions}, dispatch),
  };
  }

  export default connect(
  mapStateToProps,
  mapDispatchToProps,
  )(Home);
