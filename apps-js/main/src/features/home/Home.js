import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import { getInitialData, registerUser } from './redux/actions';
import CardActions from 'react-md/lib/Cards/CardActions';
import Button from 'react-md/lib/Buttons';
import CardText from 'react-md/lib/Cards/CardText';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import Card from 'react-md/lib/Cards';


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
        {currentUser &&
        <Card className="md-cell">
          <CardTitle title="hello">Bonjour {currentUser[0].user.first_name} {currentUser[0].user.last_name}</CardTitle>
          <CardText>
          Voici les programmes disponibles :
          </CardText>

          {currentUser[0].programs.map((item, i) => (
            <CardText>Type : {item.type} {item.name}</CardText>

          ))}
          <CardActions>
            <Button flat label="Action 1"/>
            <Button flat label="Action 2"/>
          </CardActions>
        </Card>
        }
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
    actions: bindActionCreators({ ...actions }, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
