import { Component } from 'react';
import PropTypes from 'prop-types';

export default class App extends Component {
  static defaultProps = {
    helloMsg: 'NO MESSAGE!',
  };

  static propTypes = {
    helloMsg: PropTypes.string,
  };

  state = {
    helloMsg: this.props.helloMsg,
  };

  render() {
    return (
      <>
        <h1>{this.state.helloMsg}</h1>
      </>
    );
  }
}
