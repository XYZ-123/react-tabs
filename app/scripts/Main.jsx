import React from 'react';
import * as TabHolder from 'tab-holder';
class App extends React.Component {
  render()
  {
    return (<div className="main">Example with tabs <TabHolder/></div>);
  }
}

React.render(<App/>, document.body);
