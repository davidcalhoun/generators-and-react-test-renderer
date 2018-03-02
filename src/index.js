import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import renderer from 'react-test-renderer';

const Webdriver = target => {
  target.defaultProps = {
    'data-webdriver': target.name
  };

  target.propTypes = {
    'data-webdriver': PropTypes.string
  };
};

@Webdriver
class WithDecorator extends Component {
  static defaultProps = {
    'data-test': 'testing 123'
  }

  static propTypes = {
    'data-test': PropTypes.string
  }

  render() {
    return (
      <div { ...this.props } />
    );
  }
};

class WithoutDecorator extends Component {
  static defaultProps = {
    'data-test': 'testing 123'
  }

  static propTypes = {
    'data-test': PropTypes.string
  }

  render() {
    return (
      <div { ...this.props } />
    );
  }
};


const App = () => (
	<div>
		<WithDecorator />
		<WithoutDecorator />
	</div>
);


ReactDOM.render(<App />, document.getElementById('app'));