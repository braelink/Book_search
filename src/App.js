import React, {Component } from 'React';
import Header from './header';
import Books from './books';
class App extends Component{
  render() {
    return (
      <div classname = "App">
        <Header />
        <Books />
      </div>

    )
  }
}
export default App;