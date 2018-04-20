import React, { Component } from 'react';
import CommentApp from './common/CommentApp'
import CommentAppMobx from './mobx/CommentApp'
import { observer } from 'mobx-react'

// import mobxStore from './mobxStore';
// const store = new mobxStore();

@observer
class App extends Component {
  componentDidUpdate(){
    console.log(this.props)
  }
  render() {
    return (
        <div className="App">
          <div className="outerView">
            <CommentApp/>
            <CommentAppMobx/>
          </div>
        </div>
    );
  }
}

export default App;
