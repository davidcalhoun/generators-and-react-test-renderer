import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import renderer from 'react-test-renderer';

const Webdriver = target => {
  target.defaultProps = {
  	...target.defaultProps,
    'data-webdriver': target.name
  };

  target.propTypes = {
  	...target.propTypes,
    'data-webdriver': PropTypes.string
  };
};

@Webdriver
class WithDecorator extends Component {
  static defaultProps = {
  	foo: 'bar'
  }

  static propTypes = {
    foo: PropTypes.string
  }

  formatPropsForDisplay() {
  	return Object.entries(this.props).map(([key, val]) => <li>{ `${ key }="${ val }"` }</li>);
  }

  render() {
    return (
      <div { ...this.props } >
        <h2>{ this.constructor.name }</h2>
        <h3>Props:</h3>
        <ul>
        	{ this.formatPropsForDisplay() }
        </ul>
      </div>
    );
  }
};

const App = () => (
	<div>
		<WithDecorator />
	</div>
);


ReactDOM.render(<App />, document.getElementById('app'));