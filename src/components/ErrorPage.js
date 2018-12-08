import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

export default class ErrorPage extends PureComponent {

  render() {
    return (
      <div>
        <h1>Oops that page doesn't exist!</h1>
        <Link to='/'>Go home</Link>
      </div>
    )
  }
}