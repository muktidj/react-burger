import React, { Component } from 'react';
import Layout from './components/Layouts/Layout'

class App extends Component {
  render(){
    return (
      <div>
        <Layout>
          <p>React Burger</p>
        </Layout>
      </div>
    )
  }
}

export default App;