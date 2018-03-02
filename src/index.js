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

  constructor(props) {
    super(props);
  }

  formatPropsForDisplay() {
  	const propsArr = [];
  	for (let [key, val] of Object.entries(this.props)) {
  		propsArr.push(`${ key }=${ val }`);
  	}

  	return propsArr.join(', ');
  }

  render() {
    return (
      <div { ...this.props } >
        <h2>{ this.constructor.name }</h2>
        <p>Props: { this.formatPropsForDisplay() }</p>
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