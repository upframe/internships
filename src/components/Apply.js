import React, { Component } from 'react';

export default class Apply extends Component {

  render() {
    return (
      <div>
        <p>You are applying to</p>
        <p>{window.location.href}</p>
      </div>
    );
  }
}