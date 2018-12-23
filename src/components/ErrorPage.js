import { Component } from 'preact';

export default class ErrorPage extends Component {

  render() {
    return (
      <div>
        <h1>Oops that page doesn't exist!</h1>
        <a href='/'>Go home</a>
      </div>
    )
  }
}