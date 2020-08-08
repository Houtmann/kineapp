import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import {Exercice} from './Exercice';

export class Programme extends Component {
  static propTypes = {
    home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    console.log(props);


  }

  render() {
    const { program } = this.props.location.state;
    console.log('toto', program);
    return (
      <div className="home-programme">

        <li>{program.name}</li>
        <li>{program.description}</li>
        <li>{program.type}</li>
        <li>Exercices :
          {program.exercices.map((exo) =>
            <Exercice exercice={exo} />,
          )}</li>
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
)(Programme);
